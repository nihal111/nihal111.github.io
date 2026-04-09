---
layout: post
title: "Mobile Hacking, Without Leaving the CLI"
date: 2026-04-09
comments: true
tags:
- AI
- CLI
- Mobile
- Developer Workflow
---

*Personal field notes from a side project for practical vibe coding on the go.*

## Context

This is a hobby project by one developer. The goal was straightforward: keep shipping side projects from a phone without giving up terminal-native workflows.

## Why This Was Needed

I tried OpenClaw early, then tried it again a few months later. In both rounds, I kept running into rough edges that made the IM-first flow feel worse than direct CLI for long, stateful work.

The friction was mostly operational:

- Message/channel behavior could be inconsistent in edge cases
- Session context and thread boundaries could get messy
- Long-running automation had reliability footguns

Those weren’t just my own paper cuts. Similar patterns show up in public issue threads and advisories:

- Telegram ordering bug report: [Issue #10848](https://github.com/openclaw/openclaw/issues/10848)
- WhatsApp document metadata bug report: [Issue #10862](https://github.com/openclaw/openclaw/issues/10862)
- Thread/context leakage report: [Issue #10838](https://github.com/openclaw/openclaw/issues/10838)
- Process/memory pressure report: [Issue #10864](https://github.com/openclaw/openclaw/issues/10864)
- Security advisories page: [openclaw/openclaw advisories](https://github.com/openclaw/openclaw/security/advisories)

Then the April 4, 2026 Claude subscription change landed at the same time, which pushed third-party harness use toward extra usage/API billing. That was broadly reported and discussed here:

- TechCrunch (Apr 4, 2026): [Anthropic says Claude Code subscribers will need to pay extra for OpenClaw usage](https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/)
- Axios (Apr 6, 2026): [The AI agent buffet is closed](https://www.axios.com/2026/04/06/anthropic-openclaw-subscription-openai)
- OpenClaw FAQ reference on billing/auth paths: [OpenClaw FAQ](https://docs.openclaw.ai/help/faq)

In parallel, the CLI experience for Codex and Claude kept improving quickly. So instead of waiting for the IM layer to match that quality, I built a mobile control plane around real terminal sessions.

Also, pure mobile terminal workflows have their own overhead. Termius-style flows are common, but the loop is repetitive:

`Open terminal app -> reconnect -> SSH -> attach tmux -> inspect each session`

That works, but it is cognitively expensive when juggling multiple active agent sessions.

## What Is AI Traffic Control

AI Traffic Control is a mobile-first control surface around terminal-native sessions:

- Browser terminal layer (`xterm.js`) over `ttyd`
- Persistent `tmux` sessions
- Dashboard for slot-level state and quick triage
- Provider usage telemetry for quota-window decisions
- Hot-dial tiles to spawn repeatable, directed agent flows fast
- Structured launch flow (provider/template/persona/workdir)

## Product Screenshots

### Dashboard overview

<img src="https://drive.usercontent.google.com/download?id=179UyavAANO4LGiaEdBtOUlsnJBh_FJ1a&export=view" alt="Dashboard overview" height="780" />

### Browser terminal view

<img src="https://drive.usercontent.google.com/download?id=1O7tuYj-3whmwcA4xieL-wykoFh0dZ6Us&export=view" alt="Browser terminal view" height="780" />

### Intent modal

<img src="https://drive.usercontent.google.com/download?id=1Hqo1obKcj0XxRYWk16M37dtXOuwwYZVs&export=view" alt="Intent modal" height="780" />

### Fleet states

<img src="https://drive.usercontent.google.com/download?id=1SPfvSTXpadh0AeBNuQk6TA6mZ963JMDA&export=view" alt="Scientist fleet states" height="780" />

## What This Improves in Practice

- See fleet states at a glance (`active`, `idle`, `unborn`)
- Jump into any session from phone or desktop
- Make smarter use of provider windows and weekly quotas
- Launch repeatable agent jobs with one tap instead of manual setup

## Access and Security Model

Current setup is private-network first:

- Dashboard runs locally
- Remote access goes through private networking (for example Tailscale)
- Nothing is intentionally exposed publicly by default

## Closing

This is still evolving, but it already made on-the-go hacking much less fragile for me.

If you try it, the most useful feedback is:

- What broke first
- What felt faster than your current setup
- What still felt clumsy

Repository:

- `https://github.com/nihal111/ai-traffic-control`
