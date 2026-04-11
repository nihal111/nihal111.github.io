---
layout: post
title:  "Mozilla: Quarter of Contribution"
date: 2016-06-03
comments: true
tags:
- open source
- mozilla
---
I've decided to dive into open source development this summer. Under the WnCC Seasons of Code programme, I've chosen to take part in the Mozilla Quarter of Contribution project, mentored by Kalpesh Krishna ([martiansideofthemoon](https://github.com/martiansideofthemoon)). The [WnCC Seasons of Code](http://wncc-iitb.org/soc/) is an initiative by the Web and Coding Club of IIT Bombay -- think Google Summer of Code, minus the paycheck.

### Mozilla: Quarter of Contribution
The [Mozilla: Quarter of Contribution](https://wiki.mozilla.org/Auto-tools/New_Contributor/Quarter_of_Contribution) is an opportunity to work on a large project for a couple of months. Current projects for Summer 2016 are:

- Web Platform Tests - Results Viewer Refactoring (:jgraham, :martianwars)
- Perfherder (:wlach, :jmaher)
- Talos (:jmaher, :rwood)

I've made a few bug fixes and merged PRs on Web Platform Tests as well as Perfherder. I've decided to work on wptview under [:jgraham](https://github.com/jgraham) and [:martianwars](https://mozillians.org/en-US/u/martianwars/) as part of Mozilla QoC.

### wptview
[Wptview](https://github.com/mozilla/wptview) is a web platform test viewer. The Web Platform Tests (WPT) are a set of cross-browser validation tests designed to validate common functionality across browsers. Wptview makes it easy to view test results and visually compare different test runs. You can add test data as mozlog files, and all the tests along with their results load in a table format, with filters and sorting by status for easy analysis.

The [agenda for the QoC](https://wiki.mozilla.org/Auto-tools/New_Contributor/Quarter_of_Contribution/WPTViewer_Refactor) is a UI revamp, addition of unit testing, and adding visualizations to accompany test results. I'd like to work on all these features.

I've fixed a few basic bugs so I have some familiarity with the codebase. I'm a beginner in AngularJS and plan to learn as I go. This is my first real foray into open source, and I'm looking forward to seeing where it leads.