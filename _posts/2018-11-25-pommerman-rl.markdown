---
layout: post
title: "Pommerman- Reinforcement Learning Project"
date: 2018-11-25
comments: true
tags:
- Machine Learning
- Reinforcement Learning
---


For our CS 747 - Foundations of Intelligent & Learning Agents course project in Fall 2018, Chinmay Talegaonkar, Dhruv Shah, and I took on the [Pommerman Challenge](https://www.pommerman.com/) -- a test bed for multi-agent learning algorithms.

{: .center}
![Pommerman]({{ site.baseurl }}/img/pommerman.gif "Pommerman"){:style="max-height: 500px;"}

Pommerman is essentially a clone of the classic Bomberman game: a constantly changing environment with bombs going off, power-ups to collect, and other agents to eliminate. There are two main modes: **FFA** (four agents battle each other, last one standing wins) and **Team** (two teams of two agents compete).

We took on the FFA challenge and explored several approaches, including vanilla DQN, rule-based heuristics, and imitation learning. After hitting various walls, we found that the DQfD (Deep Q-learning from Demonstrations) agent performed remarkably well compared to our other approaches -- it turns out that showing an agent how humans play before letting it loose is quite effective.

Our experiments and approaches are detailed in the full report: [Report]({{ site.baseurl }}/docs/pommerman_report.pdf)

To see our agent in action, watch the video below:

<iframe width="100%" height="400px" src="https://www.youtube.com/embed/DtiyIrMZ69A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>



