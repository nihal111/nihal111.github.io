---
layout: post
title: "Lenovo GameJam- First Hackathon Experience"
date: 2015-09-20
comments: true
tags:
- Unity
- Hackathon
- GameJam
---

**Note**: *The events in this article antedate the creation of this blog. This post is written at a later point in time than dated.*

It was early September, and the rain gods had started to show some clemency. We made our way out of the mess area, towards the notice boards.

{: .center}
![lenovoposter]({{ site.baseurl }}/img/lenovoposter.jpg "Poster"){:style="max-height: 500px;"}

### The Poster
We had come across this poster before; it described the rules of a GameJam and boasted a **prize worth INR 1,00,000** sponsored by **Lenovo**. We had brushed off the idea of participating earlier -- building a game in 72 hours seemed ridiculously far-fetched, let alone competing with experienced seniors. We were freshmen, barely a month into college, still floundering in our attempt to absorb the dizzying spectrum of activities around us. We had our finger in every pie that looked tasty. Somehow Arpan convinced me we should give it a shot.

### Briefing
Fast forward to **September 15, 8 PM**. We had reached early and found seats in the FC Kohli Auditorium. The room filled up past 150 people. A host from Lenovo and an Android game developer spoke for a while, followed by general instructions and rules. The host rattled off a few game engines we could use. Arpan and I exchanged glances -- we hadn't the faintest clue what any of them were.

### Theme
As if making a game wasn't already challenging enough for the two of us, the host decided to spice it up by allotting **random themes** to each team. Most teams had 4 members (the cap), but I was reluctant to add anyone else. Arpan and I were schoolmates who had collaborated before -- an additional teammate could easily disrupt our coordination. We walked up to the bowl and drew a chit: **Insect World**. It sounded absurd for about thirty seconds, and then ideas started flowing.

### Clock's Ticking
The 72-hour countdown was to start as soon as the clock hit **00:00 on September 16**. As advised, we spent a good fraction of time deciding what game to build. I came up with Bug on a Wire, the [Miniclip game](https://www.miniclip.com/games/bug-on-a-wire/en/) where the player controls a bug which has to jump past crows on a telephone wire in an endless runner. Arpan came up with other ideas. After a while, we decided that owing to our lack of knowledge and experience; we'd stick to 2D and choose a game idea that has incremental difficulty to build. We wanted to keep the first milestone in near sight.

A little past midnight, we reconciled to the idea of a [classic bulldozer game](https://www.microsoft.com/en-us/store/p/bulldozer-classic/9nblgggzm5sm), where, in a puzzle setting a bulldozer has to push boulders to targets. Just that, the bulldozers are ants, the boulders are sugar cubes, and the targets are holes. Almost instantly, we came up with a name for it- **AssistANT**. The player has to assist an ant in order to send food to its family.

### OK, now what?
We had done a bit of C++ in school but knew absolutely nothing about building games. "**Unity**" stuck with us from the briefing, and within minutes we were installing it while simultaneously binging tutorial videos. We pair-programmed on Arpan's new laptop (mine was a junk box back then). Most of the initial stuff was surprisingly intuitive, and we were soon fiddling around with an ant sprite on screen, experimenting with friction, gravity, and all sorts of physics goodness that came out of the box.

By 3 AM, we decided to sleep and rendezvous at the 8:30 AM lecture. Needless to say, we couldn't concentrate in class and spent the entire time watching tutorials and reading docs. We rushed back to the room and spent all day building our first level, starting with a quick map sketched in MS Paint. Soon we were playing with Box Colliders and other 2D physics, writing code in C#. By midnight, Level 1 was ready -- quirky and almost unplayable, but it existed. I had a date the next day and needed a time out.

{: .center}
![lenovoposterAssistANTLevel1]({{ site.baseurl }}/img/AssistANTLevel1.jpg "Level 1"){:style="max-height: 500px;"}

### 72 to 48
By early evening, having cleared my other *commitments*, I called Arpan only to find out he'd left for home and wouldn't be back until morning. Not wanting to waste time, I started designing levels in MS Paint based on ideas from the previous day. By the end of the night, I had 4 levels ready.

{: .center}
![lenovoposterAssistANTNewLevel]({{ site.baseurl }}/img/AssistANTNewLevel.jpg "New level"){:style="max-height: 500px;"}

### The Last Mile
Our game was still quirky, but we were getting somewhere. We worked in shifts -- one person integrated the new maps into the game while the other scoured tutorials and docs for bug fixes. By evening, all isolated levels were working somewhat decently. With time to spare, we threaded together all the levels and added a scoring function that exponentially decays with time. An hour before midnight, we were ready for submission.

Satisfied with the effort and quietly pleased with the outcome, we submitted and went to bed. We still had zero expectations of winning; our game was amateurish at best.

### Result Day
The results took a while to arrive. I received a call from Pradyot, the then WnCC manager, inviting me to the prize distribution ceremony. The venue had been changed to the [Tinkerers' Lab](http://tinkerers-lab.org/). We expected a consolation prize, or perhaps the "best freshmen game" prize. These existed alongside the top 3 cash prizes (50k, 30k, 20k INR). The distribution started from the bottom, and as names went by without ours, we slowly realised we had made a podium finish.

We ended up **winning the 2nd prize with a cash prize of 30,000 INR**. Our happiness knew no bounds and the prize money was a cherry on top.

**The game can be downloaded from [here](https://github.com/nihal111/nihal111.github.io/releases/download/v0.1/AssistANT.zip).** The zip file contains an executable with instruction on how to run. Unfortunately, the source code didn't survive since we didn't know any version control back then.

**Note from the future**: *I believe that this one event sparked a butterfly effect. I feel it has had a considerable impact on my life choices pertaining towards WnCC, shaping my interests and pursuing coding as a hobby. I look back to this with a vivid memory and great pleasure.*