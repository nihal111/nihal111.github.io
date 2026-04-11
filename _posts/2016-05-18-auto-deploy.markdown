---
layout: post
title:  "Auto Deploy on Server"
date: 2016-05-18
comments: true
tags:
- git
- ruby
---
I'd been using a server to host the [WnCC website](http://www.wncc-iitb.org) for a while. With development happening constantly, updating and testing changes on the server had become a regular chore. Having built the site in Jekyll, I needed to copy the contents of `_site` from my local machine to `/var/www/html` on the server after every build. I'd been doing this the brute-force way with `scp` -- copying every file in the folder each time. This was getting increasingly painful as the site grew with more multimedia content, and the terminal command wasn't short either. I could have SSH'd into the server, pulled from the git repo, and copied `_site` into `/var/www/html`, but that would still have been tedious. There had to be a better way.

### Discovering [Github Webhooks](https://developer.github.com/webhooks/)
Enter webhooks. [Webhooks](https://developer.github.com/webhooks/) let you set up an integration with your GitHub repository to listen for one or more events. Whenever such an event occurs, GitHub sends an HTTP POST payload to the webhook's configured URL. Events can be triggered by a push, the creation of an issue, a star, a fork -- you name it. I used a webhook here for the fairly common purpose of setting up auto-deploy on my server.

GitHub provides a [comprehensive guide](https://developer.github.com/webhooks/configuring/) on setting up a webhook to localhost connected through [ngrok](https://ngrok.com/download). I followed the guide and replicated similar steps on my server to get the webhook configured.

### Using [Sinatra](http://www.sinatrarb.com/)
I used Sinatra to create a simple web framework that receives an HTTP POST at the configured server URL and runs a shell command. With this small piece of code, every push to the repository is now automatically reflected on the website. The code renames the `html` folder inside `/var/www/` to `_site`, performs a git pull inside `/var/www`, and renames it back to `html` (since the built site lives inside the `_site` folder of the repository).

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

I didn't know about GitHub webhooks before this, and it turned out to be a neat discovery. The above is a quick and dirty automation setup. If you know a way to improve it, let me know in the comments.

Till next time!