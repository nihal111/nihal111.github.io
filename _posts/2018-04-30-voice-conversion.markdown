---
layout: post
title: "Voice Conversion- Machine Learning Project"
date: 2018-04-30
comments: true
tags:
- Machine Learning
- Reinforcement Learning
---


As the course project for CS 419 - Introducing to Machine Learning, Spring 2018, I teamed up with Arpan Banerjee and Srivatsan Sridhar to work on the task of Voice Conversion.  

We built a pipelined approach to convert one person’s voice into another person’s voice. We proposed a deep learning approach to convert source waveform to phonemes and further phonemes to target waveform. This approach consisted of two neural networks.
The first network was used to convert the source speaker's waveforms to phonemes.

{: .center}
![Net1]({{ site.baseurl }}/img/voice-conversion/net1.png "Net1"){:style="max-height: 500px;"}

While the second network involved converting the obtained phonemes to the target speaker's waveforms.

{: .center}
![Net2]({{ site.baseurl }}/img/voice-conversion/net2.png "Net2"){:style="max-height: 500px;"}

We used the TIMIT (different sources) and CMU ARCTIC (single target) corpus respectively for training our network. As part of our project, we performed extensive experimentation with bi-directional Recurrent Neural Networks using LSTM and GRU cells. 

We’ve used the multitask approach to train the network as per both the mel spectral coefficients (as an intermediate representation) and magnitude spectrum which forms the final output while using a pyramidal network architecture.

{: .center}
![multitask]({{ site.baseurl }}/img/voice-conversion/multitask.png "multitask"){:style="max-height: 500px;"}

Our experiments and approaches are detailed here- [Report]({{ site.baseurl }}/docs/voice_conversion_report.pdf)
