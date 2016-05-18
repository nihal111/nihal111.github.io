---
layout: post
title:  "Auto Deploy on Server"
date: 2016-05-18
comments: true
tags:
- git
- ruby
---
It had been a while since I had been using a server to host the [website for WnCC](http://www.wncc-iitb.org). With a lot of development happening around, updating and testing changes on the server, had become a requirement. Having built the site in Jekyll, I required to shift the contents of `_site` from my local machine to `/var/www/html` on the server, after every build. I had been following the simple, standard method of using scp, for a long time. Copying all the content from `_site` to `/var/www/html` was now becoming inefficient (as I copied all the files in the folder all over again), took a lot of time as the site started expanding with more multimedia content, and required a long terminal command too. I could have used a probably more efficient way of SSHing into the server, pulling from the git repository and copying the contents of the `_site` folder into `/var/www/html`. But this would have been tedious too, and probably could have been made easier with a script. Nevertheless, it would have required me to SSH into the server, and atleast a couple of terminal commands.

### Discovering [Github Webhooks](https://developer.github.com/webhooks/)
Enter webhooks. [Webhooks](https://developer.github.com/webhooks/) allow one to set up an integration with their github repository to listen for one or more events. Whenever such an event occurs, Github sends a HTTP POST payload to the webhook's configured URL. An event can occur with the creation of an issue, a push to the server or be triggered whenever a repository is starred, forked etc. Webhooks can be used to do a lot of things. I have used a webhook, in this example for the quite general purpose of setting up an auto-deplow on my server.

Github provides a quite [comprehensive guide](https://developer.github.com/webhooks/configuring/) about how to set up a webhook to the local host which is connected to the web using [ngrok](https://ngrok.com/download). I followed the guide and replicated similar steps on my server to get my webhook configured to send a HTTP POST payload to the server.

### Using [Sinatra](http://www.sinatrarb.com/)
I used Sintara to create a simple web framework which would receive a HTTP POST made to the configured server URL, and run a small shell command. Having written this small piece of code, I could now reflect all changes made in the repository on the website, everytime a push is made to the repository. The following code renames the `html` folder inside `/var/www/` to `_site` and performs a git pull inside `/var/www` and later renames it back to `html`. This is done as the built site lies inside the `_site` folder of the repository. I

{% highlight ruby %}
# hook.rb
require 'sinatra'
require 'json'

set :bind, '0.0.0.0'

post '/payload' do
  #push = JSON.parse(request.body.read)
  #puts "I got some JSON: #{push.inspect}"
  output = `mv html _site ; git pull origin master; mv _site html`
  p output
end
{% endhighlight %}

Running a `ruby hook.rb -o 0.0.0.0` will give a message like `Sinatra/1.4.4 has taken the stage on 4567...`. Making a POST request on http://IP:4567/payload, will now trigger the shell command in the above script. (`-o 0.0.0.0` and `set :bind, '0.0.0.0'` allows access from networks other than localhost)

**Note:** You may have to enable the port if you are using a firewall on your server. A simple `sudo ufw allow 4567` should do it.

However this session of Sinatra will close as soon as you CTRL+C out of it or logout. To keep such an instance running even after logout you could try

`nohup sudo ruby hook.rb -o 0.0.0.0 &`

This would put the Sinatra process in background and keep it running even after you have logged out. 

I did not know about github webhooks earlier and this was an interesting find. The above was a quick setup for automation. If you know a way in which I could improve it, do let me know in the comments.

Till next time!