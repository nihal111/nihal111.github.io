---
layout: post
title: "Dancing with Claude's Credentials"
date: 2026-04-19
comments: true
tags:
- AI
- Claude
- Developer Workflow
- CLI
- OAuth
---

*A follow-up to [yesterday's post](/2026/04/18/when-one-claude-subscription-isnt-enough.html) on rotating two Claude accounts. The switcher worked fine at first, then one morning both credentials were dead with an `invalid_grant` error. Fixing it meant understanding what happens when you manage multiple OAuth credentials in a sidecar: how cache drift emerges on disk, why you can't just snapshot and swap, and what it takes to keep credentials fresh while other processes silently rotate them out from under you. The reverse-engineered Claude Code source helped close gaps in my assumptions.*

## The Problem

The switcher worked fine through that first day. I rotated between two accounts several times, everything responsive and smooth.

The next morning, I tapped switch and got an `invalid_grant` error from the refresh endpoint. Both accounts. Nothing had changed on my end: no re-login, no config touches, no upgrades. The credentials that worked last night were simply dead.

I re-logged in to unblock my day, but "it works until it doesn't, and the fix is re-login" is exactly the friction I built the switcher to eliminate. So I went back in to figure out what was happening.

## How Credential Rotation Works

Claude uses OAuth 2.0 where refresh tokens are single-use and rotate on every refresh. This is standard practice.

Your CLI stores `{ accessToken, refreshToken, expiresAt }`. The access token is short-lived (about an hour). When it's near expiry, the CLI POSTs the refresh token to the token endpoint and gets back a new pair: new access token and new refresh token. The old refresh token is revoked server-side immediately.

Now consider the setup I built. Each account has a `.cred` snapshot on disk, my stored copy of its `{ accessToken, refreshToken, expiresAt }`. When I switch from account A to account B, I install B's tokens into the Keychain; A's snapshot stays on disk, unchanged.

Between switches, multiple `claude` processes may be running against the Keychain: an MCP server, a VS Code extension, maybe a tmux pane I forgot about. When one of them refreshes account B's token in the background, the `refreshToken` in my on-disk snapshot for B now points to a credential that's been revoked. I don't find out until the next time I run `use secondary` and the refresh fails with `invalid_grant`.

The failure mode is cache drift: my disk snapshot and the server's view of which refresh-token lineage is alive have diverged. The tokens I saved got rotated out from under me by a background process I didn't track.

## Correcting Assumptions

I also looked at the reverse-engineered Claude Code mirror at [`yasasbanukaofficial/claude-code`](https://github.com/yasasbanukaofficial/claude-code) and found a few assumptions I had gotten wrong. Nothing critical, but worth adapting to what the actual source uses.

I was hitting `console.anthropic.com/v1/oauth/token` instead of `platform.claude.com/v1/oauth/token`. Different authorization servers with different rate limits. I was also refreshing at 2-minute expiry skew instead of the upstream 5-minute window, and omitting the `scope` field from refresh requests (which is technically legal but different endpoints enforce it differently). None of these would have broken things entirely, but matching the actual source made the implementation cleaner.

## Reactive Refresh for the Drift Case

Those three fixes reduced the drift. They didn't eliminate it. No amount of proactive refresh saves you from the case where *another* claude process rotated your refresh token between your last save and now. The token on disk is dead, you just don't know it yet.

For that, I added a reactive path: when the live "is this access token still good" check against `api.anthropic.com/api/oauth/account` returns 401 or 403, attempt one refresh, then retry validation. Nine times out of ten, the access token is dead but the refresh token is still alive, the retry yields a fresh pair, and the user sees a `use <alias>` that "just works." The tenth time the refresh token itself is dead and you re-login; but at least the switcher now recovers on its own for the common case.

Combined with the upstream-matched refresh behavior above, the re-login rate dropped to basically zero for normal operation.

## What Changed

In [AI Traffic Control](https://github.com/nihal111/ai-traffic-control):

- Token refresh now hits `platform.claude.com/v1/oauth/token` instead of the console endpoint.
- Refresh request bodies include the full `scope` claim for explicitness.
- A reactive refresh layer retries once on 401/403 from the account-validation endpoint, catching the case where tokens have drifted in the background.
- On switch, we validate that the new account's credential is fresh from the source (accounting for the native Claude Code process' own proactive refresh running in parallel).

When Claude Code processes (MCP servers, extensions, etc.) use the token, they check for expiry and refresh as needed. This usage-driven refresh in the background is what creates the drift between our on-disk snapshot and the Keychain. What we control is detecting and recovering from that drift.

Full mechanics are documented at [`dashboard/docs/claude-account-switching.md`](https://github.com/nihal111/ai-traffic-control/blob/main/dashboard/docs/claude-account-switching.md) in the repo.

## What This Taught Me

Two things stick with me.

First: managing multiple credentials in a sidecar is harder than it looks. It's not just understanding OAuth's refresh semantics. It's understanding what cache drift means when you've saved a snapshot of one credential on disk, swapped another into the Keychain, and then some background process silently refreshes that second one while you're not watching. You need to account for tokens becoming obsolete outside your control. The real complexity is not "tokens rotate" but "how do I keep my on-disk snapshots synchronized when other processes are modifying the Keychain behind my back."

Second: having the source code available, even as a reverse-engineered mirror, is a huge multiplier. It closed the loop from "something is wrong" to "here's the exact constant I had wrong" in an hour.

I said in yesterday's post that I'd rather own a switchboard than pay for a bigger meter. A switchboard only helps if I don't get my wires crossed.
