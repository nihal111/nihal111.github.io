---
layout: post
title: "Pommerman- Reinforcement Learning Project"
date: 2018-11-25
comments: true
tags:
- Machine Learning
- Reinforcement Learning
---


As the course project for CS 747 - Foundations of Intelligent & Learning Agents, Fall 2018, I teamed up with Chinmay Talegaonkar and Dhruv Shah to take on the [Pommerman Challenge](https://www.pommerman.com/).  


{: .center}
![Pommerman]({{ site.baseurl }}/img/pommerman.gif "Pommerman"){:style="max-height: 500px;"}

The Pommerman Challenge essentially serves as a test bed for multi-agent learning algorithms. It is essentially a clone of the popular Bomberman game, providing a constantly changing environment with bombs going off, power-ups to be collected and other agents to be eliminated. There are mainly two modes to the game, **FFA**- where each of the four agents battle against each other and the last one to survive wins, **Team**- where there are two teams of two agents which compete against each other.  

We took on the FFA challenge, trying a few different approaches. After facing a few hurdles, we found that the DQfD agent performed remarkably well as against our other approaches.  

Our experiments and approaches are detailed here- [Report]({{ site.baseurl }}/docs/pommerman_report.pdf)

To see our agent in action, watch the video below-

<iframe width="100%" height="400px" src="https://www.youtube.com/embed/DtiyIrMZ69A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>



