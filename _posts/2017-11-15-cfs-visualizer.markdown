---
layout: post
title: "CFS Visualizer- Operating Systems Project"
date: 2017-11-15
comments: true
tags:
- Operating Systems
- Visualization
---


For our CS 347 - Operating Systems course project in Fall 2017, Arpan Banerjee, Srivatsan Sridhar, and I built a visualizer for the Completely Fair Scheduler -- the default process scheduler lurking inside every Linux system you've ever used.

The visualizer is available at- [https://nihal111.github.io/CFS-visualizer/](https://nihal111.github.io/CFS-visualizer/).

### Schedulers

Linux is a multitasking operating system, which means it needs a scheduler to juggle all those processes vying for CPU time. The Linux scheduler has evolved considerably over the years. With Linux Kernel 2.6, the O(1) scheduler arrived. It relies on active and expired arrays of processes to achieve constant scheduling time. Each process gets a fixed time quantum, after which it is preempted and moved to the expired array. Once all tasks from the active array have exhausted their time quantum, an array switch takes place -- the active array becomes the new empty expired array, and vice versa. The main issue with this algorithm is the complex heuristics used to classify tasks as interactive or non-interactive.

### The Completely Fair Scheduler

The Completely Fair Scheduler (CFS) handles CPU resource allocation for executing processes and aims to maximize overall CPU utilization while also maximizing interactive performance. It was merged into the 2.6.23 release (October 2007) of the Linux kernel and has been the default scheduler ever since.

By "Completely Fair," CFS means to allocate CPU resources equally among all queued processes depending on their nice values. It uses a Red-Black tree to track all queued processes and handles switching with nanosecond granularity. The scheduling complexity is `O(log N)`, where `N` is the number of tasks in the runqueue. Choosing a task can be done in constant time, but reinserting a task after it has run requires `O(log N)` operations because the runqueue is implemented as a red-black tree.

### The Visualizer

The [CFS visualizer](https://nihal111.github.io/CFS-visualizer/) lets you watch the process queue and the dynamically populated red-black tree while the scheduler is in action. The time scale has been magnified so you can slow things down and watch the scheduler do its nanosecond-granularity work in real time.