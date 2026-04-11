---
layout: post
title: "I Built My Own Wispr Flow in an Evening"
date: 2026-04-10
comments: true
tags:
- AI
- Mobile
- Android
- Voice
- Developer Workflow
---

*Notes from a single evening where my mobile workflow got rewritten.*

A day ago I wrote about [Mobile Hacking, Without Leaving the CLI](https://nihal111.github.io/2026/04/09/mobile-hacking-without-leaving-the-cli/). This is the direct sequel.

I downloaded Wispr Flow on Android last week after seeing their Android launch push and trial messaging, and it has significantly changed how I operate from mobile.

It is dramatically easier to walk and talk than stare at a screen and type. I can speak ideas into my phone and bring them to life quickly.

As soon as I discovered the productivity benefits, it occurred to me that the trial may soon end. I may find myself paying for Wispr Flow as a service, and with all of the other AI tooling subscriptions I already have, stacking subscriptions like that is not sustainable.

If this becomes a core mode of operation, I cannot rely on early-access terms I don’t control.

## Why I Can’t Live Without This Workflow

Wispr Flow changed my day-to-day loop immediately.

Walking around, speaking into my phone, and turning ideas into running changes without typing felt like cheating. My velocity jumped in a way that honestly felt absurd.

At that point, I knew I needed a self-hosted fallback I fully own.

I’m already paying for enough AI tooling. I didn’t want another subscription for a capability I can run myself with open speech models and my own hardware.

Most of my development already routes through my Mac anyway, so building this on top of my existing stack was the obvious move.

## Why Self-Hosted Matters For Privacy

Self-hosting is also a security and privacy decision.

Keeping transcription inside my own device boundary matters: voice notes and transcripts are sensitive, and I do not want them sitting on third-party servers by default.

As I use voice for more of my day-to-day workflow, local control becomes more important, not less.

## What I Found About Android Access Terms

As of **April 10, 2026**, this is what public Wispr Flow sources say:

- Wispr’s help center has an **"Android Launch Promotion: 6-Month Free Pro Trial"** article saying new Android signups get 6 months of Pro, applied automatically, no promo code, and no charge unless you subscribe later.
- Wispr’s pricing page also says Android on Basic is **"Unlimited words per week on Android (limited time only)"** and that new accounts start with a 14-day Pro trial.

Links:

- [Android Launch Promotion: 6-Month Free Pro Trial (Wispr docs)](https://docs.wisprflow.ai/articles/5533071756-android-launch-promotion-6-month-free-pro-trial)
- [Wispr Flow Pricing](https://wisprflow.ai/pricing)
- [TechCrunch Android launch coverage](https://techcrunch.com/2026/02/23/wispr-flow-launches-an-android-app-for-ai-powered-dictation/)

So yes: there is a real launch-era free access story on Android. But it is still a promotional/business policy, not something I control long-term.

That was enough motivation to build my own path.

## The Build: One Evening

I built the core Android client in one evening.

Not from a desk setup. From the gym.

Between sets, while catching my breath, I was speaking instructions into my phone and driving the implementation forward (this is getting out of hand).

Even before I reached home Wi-Fi and installed on my physical phone, most of the app was already in place through an emulator-first test loop.

By the time I did the first real phone install, I was mostly validating behavior, not starting from scratch.

## Screenshot

<div class="center">
  <img src="/img/wispr-flow-selfhost-evening.jpg" alt="Building a self-hosted Whisper Flow-style Android workflow from mobile" height="780" />
  <p><em>On the left edge is the real Whisper Flow and on the right edge is my clone.</em></p>
</div>


## What I Built

Two repos now work together:

- Android client (floating bubble, speech capture, text insertion): [WhisperClientAndroid](https://github.com/nihal111/WhisperClientAndroid)
- Self-hosted server for transcription on my Mac: [WhisperServer](https://github.com/nihal111/WhisperServer)

The flow is straightforward:

1. Phone captures speech from a floating bubble.
2. Audio is sent to my self-hosted server.
3. Server transcribes.
4. Text is inserted back into the focused field (or copied to clipboard fallback).

Private-network access via Tailscale makes this usable even when I’m away from local Wi-Fi.

## Why This Matters To Me

This wasn’t a weekend novelty project.

It was operational insurance for a workflow that has become central to how I think and build.

And it reinforces a bigger point from the last post:

When your mobile control plane is solid, random in-between minutes become real build time.

That still feels insane.

## Closing

I started this as a fallback plan.

It ended up being one of the most practically valuable things I’ve built for my own daily workflow.

If you’re experimenting with voice-first development loops, I highly recommend owning at least one self-hosted path end-to-end.
