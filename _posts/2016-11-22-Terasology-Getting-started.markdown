---
layout: post
title:  "Terasology: Getting Started"
date: 2016-11-22
comments: true
tags:
- open source
- MovingBlocks
- Terasology
- GCI
---

<style type="text/css">
    .collapsiblecontainer {
    width:100%;
    border:1px solid #d3d3d3;
}
.collapsiblecontainer div {
    width:100%;
}
.collapsiblecontainer .collapsibleheader {
    background-color:#d3d3d3;
    padding: 2px;
    cursor: pointer;
    font-weight: bold;
}
.collapsiblecontainer .collapsiblecontent {
    display: none;
    padding : 5px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
    $(".collapsibleheader").click(function () {
        $collapsibleheader = $(this);
        //getting the next element
        $collapsiblecontent = $collapsibleheader.next();
        //open up the collapsiblecontent needed - toggle the slide- if visible, slide up, if not slidedown.
        $collapsiblecontent.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of collapsibleheader based on visibility of collapsiblecontent div
            $collapsibleheader.find("span:first-child").text(function () {
                //change text based on condition
                return $collapsiblecontent.is(":visible") ? "- " : "+ ";
            });
        });

    });
}); 

</script>

{: .center}
![Terasology]({{ site.baseurl }}/img/Terasology.jpg "Terasology")

This is a comprehensive guide for getting started with your first contribution to the Terasology project. If you've stumbled here and don't know what Terasology is, check out the [github repository][Repo].

The [Quick Start guide][wiki] on the github wiki of the repository is pretty complete, but it can get a little confusing if this is your first time. If not and you want to get cracking as soon as possible, do head over there.

Without any further ado, let's get started.

# Run from source
This is probably the first and most important step you need to do before you can do anything else. Also, the first question you'll be asked on IRC when you're in doubt, is whether you're able to "run from source".

## 1. Get Java

{: .center}
![Java]({{ site.baseurl }}/img/java.png "Java")

Java 8 SDK is a requirement for the game to run. You can download this from [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) by choosing your OS.

## 2. Get Git

{: .center}
![Git]({{ site.baseurl }}/img/git.png "Git")

If you don't have git setup, you need to do so before going any further. You'll need git to collaborate and contribute to this project.
<div class="collapsiblecontainer">
<div class="collapsibleheader"><span>+ </span><span>What is git?</span></div>
<div class="collapsiblecontent">   
	Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
	Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.
	<br/>
	Git allows the users working on a project to mirror and save all changes they make on the central server as well as keep a copy in their own system.
</div>
</div>

#### For Linux:
If you’re on Fedora, you can use yum:
{% highlight bash %}
$ sudo yum install git-all
{% endhighlight %}
If you’re on a Debian-based distribution like Ubuntu, try apt-get:
{% highlight bash %}
$ sudo apt-get install git-all
{% endhighlight %}

#### For Windows:
Download git for windows [here](https://git-scm.com/download/win).

#### Configuration:
Once you have git installed, open bash (terminal) in Linux or git bash (from Programs) in Windows and get it configured.
git config --global user.name "Your Name"
git config --global user.email "your_email@whatever.com"

## 3. Fork

{: .center}
![Fork]({{ site.baseurl }}/img/fork.png "Fork")

<div class="collapsiblecontainer">
<div class="collapsibleheader"><span>+ </span><span>What is a fork?</span></div>
<div class="collapsiblecontent">   
A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project. Forking the <a href="https://github.com/MovingBlocks/Terasology">MovingBlocks/Terasology</a> repository would create a copy of it at <a>www.github.com/your_github_username/Terasology</a>.
</div>
</div>
Click *[here][fork]* to fork the *[Terasology github repository][Repo].* Doing so will create a repository named "Terasology" under your github account and take you to it. From now you can access your copy of the repository here: <a>www.github.com/your_github_username/Terasology</a>

## 4. Clone
<div class="collapsiblecontainer">
<div class="collapsibleheader"><span>+ </span><span>What is cloning?</span></div>
<div class="collapsiblecontent">   
Cloning downloads or "clones" a repository into a newly created directory by the name of the repository. Cloning www.github.com/your_github_username/Terasology on your machine would create a folder named Teraslogy and download all the content inside it. Use cd to move in and out of directories when inside bash/git-bash.
</div>
</div>

Open up bash (Linux) or git-bash (Windows), go to the directory where you want to clone the repository:
{% highlight bash %}
cd path/to/directory/
git clone www.github.com/your_github_username/Terasology
cd Terasology/
{% endhighlight %}

## 5. Run the game
You now have the repository cloned and can run the game using gradlew.

Open bash or git-bash, cd in to the Terasology directory and type in:
{% highlight bash %}
./gradlew game
{% endhighlight %}

<div class="collapsiblecontainer">
<div class="collapsibleheader"><span>+ </span><span>What is gradlew?</span></div>
<div class="collapsiblecontent">   
The gradlew is a script which downloads a version of the Gradle through which most of the automation happens. The initial gradlew execution will download all project dependencies and could take a while. So, be patient.</div>
</div>

This should show a build log, and launch the game. If this worked you're able to run from source. If it didn't you should get back to IRC and ask for help in debugging. However, any problem encountered at this point is usually from Java not being configured right, such as having an older version as your default Java. See [Common Issues](https://github.com/MovingBlocks/Terasology/wiki/Common-Issues) for more.

Ask in the Support Forum if issues remain, or come join us on #terasology on Freenode IRC. See [Using IRC](https://github.com/MovingBlocks/Terasology/wiki/Using-IRC) and please be patient! IRC isn't necessarily instant communication and it may take a while to get a reply.


## 6. Use an IDE

With this large a project, you could easily get lost and 'grep'ing would be inefficient. We have a series of customizations that prepare run configurations, Git integration, and so on for the project, specifically for IntelliJ. Eclipse has fewer of these but is still entirely usable, as is NetBeans, but you'll need to figure out some details there yourself. I personally recommend the use of Intelij IDEA.

{: .center}
![Intellij]({{ site.baseurl }}/img/intellij.jpeg "Intellij")

#### Install Intellij IDEA on Linux:

{% highlight bash %}
sudo apt-add-repository ppa:mmk2410/intellij-idea-community
sudo apt-get update
sudo apt-get install intellij-idea-community
{% endhighlight %}

#### Install Intellij IDEA on Windows:

Download and install the setup from [here](https://www.jetbrains.com/idea/download/).

Open bash or git-bash and type:
{% highlight bash %}
./gradlew idea
{% endhighlight %}
This would prepare project files for Intellij. Open the resulting Terasology.ipr as an existing project in IntelliJ - do not create a new project or attempt to import the project via Gradle.

## 7. Find a Bug

Once you are able to run from source and preferably have an IDE set up, you should get started with working on your first bug. The complete list of issues can be found [here](https://github.com/MovingBlocks/Terasology/issues). However, you should look for issus with the tag `Bite-size`. All bite-sized issues can be found [here](https://github.com/MovingBlocks/Terasology/issues?q=is%3Aissue+is%3Aopen+label%3ABite-size).

## 8. Code, code and code

By default you would be on the develop branch. Before you start making changes to the code, remember to create a new branch. This can be skipped, however it is the best practice, especially when working on multiple issues. Also, if you don't create a new branch, a Pull Request for your second bug fix will also contain a fix for the first bug, if the first PR isn't merged till then.

<div class="collapsiblecontainer">
<div class="collapsibleheader"><span>+ </span><span>What is a branch?</span></div>
<div class="collapsiblecontent">   
Within a repository you have branches, which are effectively forks within your own repository. Your branches will have an ancestor commit in your repository, and will diverge from that commit with your changes. You can later merge your branch changes. Branches let you work on multiple disparate features at once.
</div>
</div>

### Creating a new branch
Open bash or git-bash and type:
{% highlight bash %}
git checkout -b new_branch_name
{% endhighlight %}

Get cracking on a solution. Ask on IRC when in doubt.

## 9. Make your first contribution

Once you've come up with a fix, it's time to commit those changes and create a pull request.

### Commit your changes
Open bash or git-bash and type:
{% highlight bash %}
git add -A
# to add all files to staging. You could select individual files too
git commit -m "Fix for #1234"
# to commit changes with a relevant commit message.
git push origin new_branch_name
# Push to the newly created branch on your fork
{% endhighlight %}

<div class="collapsiblecontainer">
<div class="collapsibleheader"><span>+ </span><span>What is a commit?</span></div>
<div class="collapsiblecontent">   
Whenever you commit in git, you take a screenshot of your working directory or your repository. You could come back to this state of your repository later at any point or publish these changes to your fork of the repository.
</div>
</div>

<div class="collapsiblecontainer">
<div class="collapsibleheader"><span>+ </span><span>What is pushing?</span></div>
<div class="collapsiblecontent">   
In git, when you push, you bring the changes on your local repository come into effect in the remote repository. In this case changes to the branch "new_branch_name" are published on the remote ("origin") repository www.github.com/your_github_username/Terasology.
</div>
</div>

Once you've pushed successfully, open up your fork (www.github.com/your_github_username/Terasology). This should show something like:

{: .center}
![PR]({{ site.baseurl }}/img/terasologyPR.png "PR")

Clicking on "Compare & pull request" opens a page for you to describe your bug and solution. The pull request compares (head) your_github_username/Terasology/new_branch_name with (base) MovingBlocks/Terasology/develop. Fill in everything and hit "Create Pull Request".

Once done, let the mentors have a look at your PR. If they want changes, you should make the required changes, test locally and then, create a new commit in the same branch and finally push.

## 10. Goto 7

Don't stop now. Go find another bug to fix! :D

[wiki]: https://github.com/MovingBlocks/Terasology/wiki/Dev-Setup
[fork]: https://github.com/MovingBlocks/Terasology/fork
[Repo]: https://github.com/MovingBlocks/Terasology