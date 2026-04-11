---
layout: post
title: "Voice Conversion- Machine Learning Project"
date: 2018-04-30
comments: true
tags:
- Machine Learning
- Reinforcement Learning
---


For our CS 419 - Introduction to Machine Learning course project in Spring 2018, Arpan Banerjee, Srivatsan Sridhar, and I tackled the problem of Voice Conversion -- making one person’s voice sound like another’s. Think of it as the world’s most elaborate impression act, but with neural networks doing the impersonation.

We built a pipelined approach using deep learning to convert source waveforms to phonemes, and then phonemes to target waveforms. Two neural networks in sequence.
The first network converted the source speaker’s waveforms to phonemes.

{: .center}
![Net1]({{ site.baseurl }}/img/voice-conversion/net1.png "Net1"){:style="max-height: 500px;"}

While the second network involved converting the obtained phonemes to the target speaker's waveforms.

{: .center}
![Net2]({{ site.baseurl }}/img/voice-conversion/net2.png "Net2"){:style="max-height: 500px;"}

We used the TIMIT corpus (various sources) and CMU ARCTIC corpus (single target) for training. As part of the project, we performed extensive experimentation with bidirectional Recurrent Neural Networks using LSTM and GRU cells.

We used a multitask approach to train the network on both mel spectral coefficients (as an intermediate representation) and magnitude spectrum (the final output), employing a pyramidal network architecture.

{: .center}
![multitask]({{ site.baseurl }}/img/voice-conversion/multitask.png "multitask"){:style="max-height: 500px;"}

Our experiments and approaches are detailed here- [Report]({{ site.baseurl }}/docs/voice_conversion_report.pdf)
