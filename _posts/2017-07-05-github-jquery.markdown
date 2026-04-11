---
layout: post
title: "GitHub Button jQuery Plugin"
date: 2017-07-05
comments: true
tags:
- jQuery
- CSS
- HTML
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript" src="/js/github-buttons.js"></script> 

Lately, I've created a lot of blog posts where I've felt the need to link a GitHub pull request or issue. Creating a vanilla Markdown link is easy, but not very aesthetically appealing. I wanted a ribbon sort of thing that would distinguish between issues and PRs. Unable to find something good online, I went ahead and created my own jQuery plugin.

## How does it look?
Without further ado, this is what it looks like:

This is an un-merged open PR.

<div class="github-button" url="https://github.com/Terasology/AdventureAssets/pull/14"></div>

This is a merged PR.

<div class="github-button" url="https://github.com/MovingBlocks/Terasology/pull/2994"></div>

This is an open issue.

<div class="github-button" url="https://github.com/Terasology/WildAnimals/issues/7"></div>

This is a closed issue.

<div class="github-button" url="https://github.com/Terasology/Books/issues/5"></div>


## How does it work?
Generating such a button only requires creating a div with the appropriate URL, and it is super simple. Here's how the HTML for one button looks:

{% highlight html %}
<div class="github-button" url="https://github.com/Terasology/Books/issues/5"></div>
{% endhighlight %}

The plugin uses the [GitHub API](https://api.github.com/) to fetch details of the PR or issue, like the date, status, and repository.  
The color and icon on the right side change depending on the state. Hyperlinks to the issue/PR and associated repository are created automatically.  
The included icons belong to the [GitHub Octicon](https://octicons.github.com/) pack. The icon stylesheet is loaded directly by the plugin from [CDN](https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/font/octicons.css), so it does not need to be included separately.

This plugin is very minimal and can be easily customized to look different. The jQuery code resides in one file, while the CSS code lives in another.

### Responsive
Since the plugin is tailor-made to fit my needs, I rely on a single [media query](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) to adjust the font and element widths for mobile devices. Here is a screenshot of how it looks on my phone:

{: .center}
![githubButtonResponsive]({{ site.baseurl }}/img/githubButtonResponsive.jpg "Github Button Responsive"){:style="max-height: 800px;"}

## Usage

Here is the [FIDDLE](https://jsfiddle.net/2r10thcb/).
<div style="height:400px; overflow: scroll">
<script style="height:400px" async src="//jsfiddle.net/2r10thcb/1/embed/"></script>
</div>

The fiddle consists of the CSS and JavaScript (jQuery) code. It only has jQuery added as an external library. Simply download the CSS code into `github-buttons.css` and the jQuery code into `github-buttons.js`, then include them as shown:

{% highlight html %}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<link rel="stylesheet" href="/css/github-buttons.css" type="text/css" />
<script type="text/javascript" src="/js/github-buttons.js"></script>
{% endhighlight %}

### For Jekyll:
This depends on the kind of setup you have. If you have a setup like [mine](https://github.com/nihal111/nihal111.github.io), you might have to create a `github-buttons.scss` file instead of `github-buttons.css`, using the same CSS code. Place the SCSS file inside the `_sass` directory. The `main.css` file then needs to be updated with

{% highlight css %}
@import 
	"github-buttons"
{% endhighlight %}

That's all for now. Feel free to use and share this plugin. Cheers, and may your PR links look fancier than your TODO list.
