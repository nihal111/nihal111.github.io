---
layout: post
title: "CFS Visualizer- Operating Systems Project"
date: 2017-11-15
comments: true
tags:
- Machine Learning
- Reinforcement Learning
---


As the course project for CS 347 - Operating Systems, Fall 2017, I teamed up with Arpan Banerjee and Srivatsan Sridhar to work on building a visulizer for the Completely Fair Scheduler that's widely present in all Linux systems as the default scheduler.

The visualizer is available at- [https://nihal111.github.io/CFS-visualizer/](https://nihal111.github.io/CFS-visualizer/).

### Schedulers

Linux is a multitasking operating system, and therefore, it has a scheduler to manage the processes. The Linux scheduler has evolved over time. With the Linux Kernerl 2.6, the O(1) scheduler came in. It relies on active and expired arrays of processes to achieve constant scheduling time. Each process is given a fixed time quantum, after which it is preempted and moved to the expired array. Once all the tasks from the active array have exhausted their time quantum and have been moved to the expired array, an array switch takes place. This switch makes the active array the new empty expired array, while the expired array becomes the active array. The main issue with this algorithm is the complex heuristics used to mark a task as interactive or non-interactive.

### The Completely Fair Scheduler

The Completely Fair Scheduler is a process scheduler that handles CPU resource allocation for executing processes and aims to maximize overall CPU utilization while also maximizing interactive performance. This was merged into the 2.6.23 (October 2007) release of the Linux kernel and is the default scheduler.

By "Completely Fair", the CFS Scheduler means to allocate the CPU resources equally and fairly among all the queued processes depending on their nice values.

The Completely Fair Scheduler uses a Red-Black tree to keep track of all the queued processes and handles switching with a nano second granularity. The fair queuing CFS scheduler has a scheduling complexity of `O(log N)`, where `N` is the number of tasks in the runqueue. Choosing a task can be done in constant time, but reinserting a task after it has run requires `O(log N)` operations, because the runqueue is implemented as a red-black tree.
The Visualizer

The [CFS visualizer](https://nihal111.github.io/CFS-visualizer/) allows one to look at the process queue and the populated dynamic red-black tree while the scheduler is in action. The time scale has been magnified so that one can slow down and visualize the scheduler with nano-second granularity work in real time.