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
We had come across this poster before; it described the rules of a GameJam and boasted a **prize worth INR 1,00,000** sponsored by **Lenovo**. We had brushed-off the idea of participating earlier, claiming it to be ridiculously far-fetched for us to complete building a game in 72 hours, let alone vying with experienced seniors. We were new here, unfledged. Somehow Arpan convinced me that we should give it a shot. It had barely been a month since we got admitted and we were already floundering in our attempt to absorb the spectrum of activities that take place in the institute. We had our finger in every pie that looked tasty.

### Briefing
Fast forward to **September 15, 8 PM**. We had reached early and found seats in the FC Kohli Auditorium. We saw the room fill up and cross a count of 150. There was a host who had come from Lenovo and an Android game developer who spoke for a while. General instructions and rules followed. The host named a few game engines that we could use. Arpan and I exchanged glances; we hadn't the faintest of clues.

### Theme
If making a game wasn't already challenging enough for the two of us, the host decided to spice it up by allotting **random themes** to each team. Most teams had 4 members (with 4 being the cap), but I was reluctant to take anyone else in. Arpan and I were schoolmates and had collaborated earlier. An additional teammate could likely hamper the existing coordination. We advanced to the bowl and drew a chit; it read- **Insect World**. We found it arbitrarily absurd at first, but within a minute, ideas started flowing in.

### Clock's Ticking
The 72-hour countdown was to start as soon as the clock hit **00:00 on September 16**. As advised, we spent a good fraction of time deciding what game to build. I came up with Bug on a Wire, the [Miniclip game](https://www.miniclip.com/games/bug-on-a-wire/en/) where the player controls a bug which has to jump past crows on a telephone wire in an endless runner. Arpan came up with other ideas. After a while, we decided that owing to our lack of knowledge and experience; we'd stick to 2D and choose a game idea that has incremental difficulty to build. We wanted to keep the first milestone in near sight.

A little past midnight, we reconciled to the idea of a [classic bulldozer game](https://www.microsoft.com/en-us/store/p/bulldozer-classic/9nblgggzm5sm), where, in a puzzle setting a bulldozer has to push boulders to targets. Just that, the bulldozers are ants, the boulders are sugar cubes, and the targets are holes. Almost instantly, we came up with a name for it- **AssistANT**. The player has to assist an ant in order to send food to its family.

### OK, now what?
We had done a bit of C++ in school but barely knew anything about building games. '**Unity**' stuck with us from the briefing and within a few minutes, we were already installing Unity while simultaneously watching tutorial videos. We decided to pair-program on Arpan's new laptop. Mine was a junk box, back then. Most of the initial stuff was pretty intuitive and we were soon fiddling around with an ant sprite on screen, experimenting with friction, gravity and all sorts of Physics stuff that came out of the box. 

It was 3 AM, and we decided to sleep and rendezvous at the morning 8:30 AM lecture. We couldn't concentrate in class and spent the entire time going through tutorial videos and docs. We rushed back to the room and spent the entire day building our first level. We had baked up a quick, basic map on MS Paint. Soon, we were playing around with Box Colliders and other 2D Physics stuff, writing code in C#. By around midnight, Level 1 was ready, but it was quirky, almost unplayable. I had a date the next day and I needed a time out.

{: .center}
![lenovoposterAssistANTLevel1]({{ site.baseurl }}/img/AssistANTLevel1.jpg "Level 1"){:style="max-height: 500px;"}

### 72 to 48
Around early evening, having nicely cleared my other appointments, I called up Arpan only to find out that he's left for home and won't be back by next morning. I decided not to waste more time and started designing levels in MS Paint based on raw ideas from the previous day. I finished the day with 4 levels ready.

{: .center}
![lenovoposterAssistANTNewLevel]({{ site.baseurl }}/img/AssistANTNewLevel.jpg "New level"){:style="max-height: 500px;"}

### The Last Mile
Our game's still quirky. We work in shifts. One person integrates the new maps into the game, creating new levels while the other goes through more tutorials, docs to find solutions to the bugs. By evening we have all isolated levels working somewhat decently. Gauging we still have time, we thread together all the levels and add a nice scoring function that exponentially decays with time. An hour before midnight, we were ready for submission.

Satisfied with our effort and pleased with the outcome, we submit and go to bed. We still had no hopes of winning; our game was amateurish at best.

### Result Day
The results took a long time to arrive. I received a call from Pradyot, the then WnCC manager. He invited me to attend the prize distribution ceremony. The venue had been changed to the [Tinkerers' Lab](http://tinkerers-lab.org/). We expected a consolation prize or perhaps the best freshmen game prize. These existed in addition to the top 3 primary cash prizes (breakup- 50k, 30k, 20k). The distribution started from the bottom and as names went by, we realised we had made a podium finish.

We ended up **winning the 2nd prize with a cash prize of 30,000 INR**. Our happiness knew no bounds and the prize money was a cherry on top.

**The game can be downloaded from [here](https://github.com/nihal111/nihal111.github.io/releases/download/v0.1/AssistANT.zip).** The zip file contains an executable with instruction on how to run. Unfortunately, the source code didn't survive since we didn't know any version control back then.

**Note from the future**: *I believe that this one event sparked a butterfly effect. I feel it has had a considerable impact on my life choices pertaining towards WnCC, shaping my interests and pursuing coding as a hobby. I look back to this with a vivid memory and great pleasure.*