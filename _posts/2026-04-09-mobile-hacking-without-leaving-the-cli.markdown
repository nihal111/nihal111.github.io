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

This is a hobby project by a solo developer. The goal was simple: make it easier to keep working on side projects from a phone without giving up the normal CLI workflow.

It is not a claim that this is the best approach. It is one approach that has been useful in practice.

## Why This Was Needed

Over time, two mobile patterns kept coming up:

1. IM-based agent interfaces
2. Mobile terminal reconnect loops

Both are useful. Both also have limitations for long-running, stateful work.

## Where IM-Based Workflows Felt Limited

In personal use, IM routing often felt less reliable for heavier workflows:

- Message delivery and execution state could drift apart
- Session context could get fragmented
- CLI ergonomics did not carry over cleanly

This was most noticeable when tasks became multi-step and tool-heavy.

## Where Mobile Terminal-Only Workflows Felt Expensive

The standard flow works, but it has overhead:

`Open terminal app -> reconnect -> SSH -> attach tmux -> inspect each session`

That overhead is mostly cognitive:

- It takes time to understand what needs intervention now
- Fleet-level visibility is manual
- Repeatable launch flows are mostly DIY each time

## Personal Backstory

OpenClaw was tested very early, and then again a few months later.

In both attempts, there were enough rough edges that it did not become a daily tool compared with direct CLI usage. That is a personal experience, not a universal judgment.

Around the same period, CLI tooling in Codex and Claude improved quickly.

OpenClaw's FAQ also notes that Anthropic informed users on **April 4, 2026 (12:00 PM PT)** that this path would require additional API billing beyond normal subscription limits. Combined with broader community concerns around reliability and security, that made the workflow harder to justify for everyday use.

At that point, building a small personal control plane seemed more practical than waiting.

## What Was Built

AI Traffic Control is a mobile-first control surface around terminal-native sessions:

- Browser terminal layer (`xterm.js`) over `ttyd`
- Persistent `tmux` sessions
- A dashboard for slot-level state and quick triage
- Hooked metadata so session context remains readable

## What This Improves in Practice

- Session fleet states are visible at a glance (`active`, `idle`, `unborn`)
- Terminal control is available from phone and desktop
- Provider usage telemetry helps with quota-window decisions
- Hot-dial tiles reduce repeated launch steps
- Launch flow is structured (provider/template/persona/workdir)

The key benefit is modest but real: less operational friction while staying in real terminal workflows.

## Access and Security Model

Current setup is private-network first:

- Dashboard runs locally
- Remote access is through private VPN networking (for example Tailscale)
- Nothing is intentionally exposed publicly by default

## Who This May Help

- People running multiple long-lived CLI sessions
- Solo builders who need to intervene from mobile
- Anyone trying to reduce session-management overhead on the go

## Closing

This project is still evolving, and there is plenty left to improve.

If you try it, useful feedback would be:

- What broke first
- What felt faster
- What still felt clumsy

Repository:

- `https://github.com/nihal111/ai-traffic-control`

---

## Short Version (for social posts)

A small side project to make mobile CLI agent workflows less tedious.

It keeps terminal-native operation (`xterm.js` + `ttyd` + `tmux`) and adds a lightweight dashboard for session state, usage visibility, and faster launches.

Not a replacement for everything, but a practical improvement for on-the-go hacking.
