---
layout: post
title:  "Playing with aliases"
date: 2016-05-08
comments: true
tags:
- bash
- tutorial
---

Since I can't do without my games, I can't do without Windows, and I have to dualboot. This means that most of my data is stored on a disk shared between both the operating systems. The path to the directory where I keep my projects thus becomes rather long. And I like to keep an alias for it.

{% highlight bash %}
alias code='cd /media/Nihal/Code'
{% endhighlight %}

What this would do is create an alias by the name of 'code' which would exist till the time you killed the terminal. Rather I have created a permanent alias for it, which is stored by copying the above line into the **`.bash_aliases`** file in the home directory (if it doesn't exist, you should really create one). I wanted to create a few more permanent aliases as and when needed and the process to do so felt tedious. Alas! I wrote another alias for it. Let's talk about the **`.bashrc`** and **`.bash_aliases`** file before getting there.

### The ***`.bashrc`*** file
In the home directory there also exists a `.bashrc` file which shall contain a lot of oher things. The `.bashrc` file is a script which executes evereytime a terminal is started in the **interactive mode**. It contains a set of configurations for the terminal.  The `.bashrc` file provides a space to set up variables, functions, aliases etc that you may want to use. The `.bashrc` is then run every time you open up a new terminal. Be careful, that any error or change you make in the `.bashrc` file will be reflected in all subsequent terminal windows launced. Also if you have a terminal window running, and you make changes to the `.bashrc` file thereafter, you will obviously have no effect on the running terminal and you may want to restart it.

### Loading the ***`.bash_aliases`*** file
The `.bashrc` file does a fine job of loading the `.bash_aliases` file like so:

{% highlight bash %}
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
{% endhighlight %}

This essentially allows `.bashrc` to load the '.bash_aliases' file within itself, preventing you from meddling with it and managing the list of aliases neatly.

### Creating a Permanent Alias
Creating a permanent alias is easy. Just open up ~/.bash_aliases and append the following line to it. 

{% highlight bash %}
alias foo='bar'
{% endhighlight %}

Whenever you type in "foo", "bar" will be passed as an input to the terminal.<br>
**Note:** You can do this with ~/.bashrc as well but it is neater not to.

A perhaps better way to do this would be to automate the task and save yourself the hassle of opening a the fine and appending to it manually. And what better way to create aliases by using another alias? I wanted to have a way to create a permanent alias by just typing in a 'p' before alias like so:

{% highlight bash %}
palias foo='bar'
{% endhighlight %}

To do this, I opened up `~/.bash_aliases` and created a function called permanent_alias and called it every time I entered "palias" on the terminal:

{% highlight bash %}
permanent_alias(){
    KEY=$(echo $1 | cut -d"=" -f 1)
    VALUE=$(echo $1 | cut -d"=" -f 2-)
    echo -e "\nalias $KEY='$VALUE'" >> /home/nihal/.bash_aliases
    echo "New permanent bash alias set: alias $KEY='$VALUE'"
    if [ -f ~/.bash_aliases ]; then
	    . ~/.bash_aliases
	fi
}

#Create alias for function call
alias palias='permanent_alias'
{% endhighlight %}

#### Explanation
+ $1 is a **positional parameter** that returns the first argument passed. Since "palias" is an alias to a function call, it returns the first word after the word "palias", without the inverted commas. `palias foo='bar'` will return foo=bar as $1.<br>
Interestingly, $0 returns the address of the script or shell running. In this case /bin/bash
+ **$KEY** and **$VALUE** variables are defined by splitting the string in $1 at the first "=". The string **$1** is passed to cut and with delimiter (**-d**) as "**=**", fields (**-f**) **1** and **2-** are selected
{% highlight bash %}echo "foo='bar'" | cut -d"=" -f 1
#returns "foo"
echo "foo='bar'" | cut -d"=" -f 2
#returns "bar"
{% endhighlight %} 
**Note:** `echo "foo='bar'" | cut -d"=" -f 1` has the same effect as `echo "foo='bar'" | cut --delimiter="=" --fields 1 `<br>
**Note:** `echo "foo='bar==car'" | cut -d"=" -f 2-` fetches 'bar==car' while `echo "foo='bar==car'" | cut -d"=" -f 2` fetches 'bar

+ Once KEY and VALUE are abstracted, they are appended to the `.bash_aliases` file using {% highlight bash %}echo -e "\nalias $KEY='$VALUE'" >> /home/user/.bash_aliases{% endhighlight %}
**Note:**  The -e flag is for enabling interpretation of backslash escapes like "\n" (newline). `echo "string" >> file` is used to append "string" at the end of file.

+ The `if [ -f ~/.bash_aliases ]; then . ~/.bash_aliases fi` allows you to use your newly declared permanent alias in the running terminal too, by loading the bash_aliases file again. Not doing this, would result in restarting of terminal for changes to take effect. (Thanks Vinayak for pointing out)

#### Usage
+ For single word aliases, scrapping the inverted commas would do. 
{% highlight bash %}
palias foo='bar'
and
palias foo=bar
would have same effect as we manually add inverted commas later.
{% endhighlight %}
		However,
{% highlight bash %}
palias foo='cd /home'
#$1 = "foo=cd /home"
and
palias foo=cd /home	
#$1 = "foo=cd"
would not have the same effect.
{% endhighlight %}

+ For special characters like " ( , ) , @" etc, scrapping the inverted commas would not work 
{% highlight bash %}
palias foo='permanent_alias()'
and
palias foo=permanent_alias()
would not have same effect as "(" would be an unexpected token.
{% endhighlight %}

+ Garbage after the first space won't matter.
{% highlight bash %}
palias foo='bar'
and
palias foo='bar' this is an amazing blog
would have same effect.
{% endhighlight %}

+ Spaces around the "=" in `palias foo = 'bar'` wouldn't work. They wouldn't work with regular alias either, for that matter.

If you're still reading, I hope you found it useful. Till next time! :)