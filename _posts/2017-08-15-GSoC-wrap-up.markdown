---
layout: post
title: "GSoC Wrap Up"
date: 2017-08-15
comments: true
tags:
- open source
- MovingBlocks
- Terasology
- GSoC
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
<script type="text/javascript" src="/js/github-buttons.js"></script> 
<script type="text/javascript">
$(document)  .ready(function()  {
$(".collapsibleheader")  .click(function ()   {
$collapsibleheader = $(this)  ;
//getting the next element
$collapsiblecontent = $collapsibleheader.next()  ;
//open up the collapsiblecontent needed - toggle the slide- if visible, slide up, if not slidedown.
$collapsiblecontent.slideToggle(500, function ()   {
//execute this after slideToggle is done
//change text of collapsibleheader based on visibility of collapsiblecontent div
$collapsibleheader.find("span:first-child")  .text(function ()   {
//change text based on condition
return $collapsiblecontent.is(":visible")   ? "- " : "+ ";
})  ;
})  ;

})  ;
})  ;

</script>

Finally it is time for wrapping up my GSoC project and along with it a highly eventful summer. It has been an amazing experience. I've learned a lot over the summer, spending countless days and nights in a row to add new things to this game. The community has been more than helpful. I couldn't have asked for more.

This wrap up post links to all the work done over the summer. There have been a total of **72 PRs** and quite a few independent commits in the new modules I've created. With over **19,000 lines of code**, this summer has boosted my Github stats to a whole new level.

{: .center}
![GSoCStreak]({{ site.baseurl }}/img/GSoCStreak.png "GSoCStreak"){:style="max-height: 500px;"}

## Final Product
The final product out of my GSoC is a whole new gameplay setting in the world of Terasology. It is a single player gameplay mode called **Lost**. You take up the role of a player that ends up stranded on a planet with no way left to get back home. Set on an expedition to find signs of life in neighbouring galaxies, you come across several intriguing things that confirm the existence of intelligent life outside your planet. *Are you truly lost? Will you ever return home?*

{: .center}
![lostBackground]({{ site.baseurl }}/img/lostBackground.jpg "Lost"){:style="max-height: 500px;"}

To test it out simply follow the below instructions-

#### Instructions to run Lost:
1. Download [this](https://slack-files.com/T03G8SB1X-F6N474GS0-867f5f5289) Omega.
2. Extract the Omega.
3. Move the save folder called "Lost" inside `omega796/saves` to the save directory-
- in Windows, C:/Users/name/Saved Games/Terasology/
- in Linux, /home/name/.local/share/terasology/saves/  
  ***Alternatively***, you can run the game with the `-homedir` flag.  
- in Windows, run the game from cmd using a command like: `Terasology.x64.exe -homedir`
  or add the `-homedir` flag to the target field of the shortcut to the exe file.
- in Linux, modify the run_linux.sh script so that it has a `-homedir` flag at the end, like so:
  `java -Xms128m -Xmx1536m -jar libs/Terasology.jar -homedir`
4. Launch the game using the script or the .exe file.
5. Select Singleplayer -> Lost and load the saved game.

### List of new modules created-

- [Terasology/AdvancedBehaviors](https://github.com/Terasology/AdvancedBehaviors)
- [Terasology/WorldlyTooltipAPI](https://github.com/Terasology/WorldlyTooltipAPI)
- [Terasology/WoodAndStoneCraftingJournal](https://github.com/Terasology/WoodAndStoneCraftingJournal)
- [Terasology/AdventureAssets](https://github.com/Terasology/AdventureAssets)
- [Terasology/Lost](https://github.com/Terasology/Lost)

{: .center}
![newModules]({{ site.baseurl }}/img/newModules.png "newModules"){:style="max-height: 500px;"}

### List of repositories contributed to-

- [Engine- MovingBlocks/Terasology](https://github.com/MovingBlocks/Terasology)

{: .center}
![engine]({{ site.baseurl }}/img/engine.png "engine"){:style="max-height: 500px;"}

- [Terasology/WildAnimals](https://github.com/Terasology/WildAnimals)
- [Terasology/StructureTemplates](https://github.com/Terasology/StructureTemplates)
- [Terasology/Books](https://github.com/Terasology/Books)
- [Terasology/WorldlyTooltip](https://github.com/Terasology/WorldlyTooltip)
- [Terasology/Projectile](https://github.com/Terasology/Projectile)
- [Terasology/Pathfinding](https://github.com/Terasology/Pathfinding)
- [Terasology/Journal](https://github.com/Terasology/Journal)
- [Terasology/Scenario](https://github.com/Terasology/Scenario)
- [Terasology/Thirst](https://github.com/Terasology/Thirst)
- [Terasology/Hunger](https://github.com/Terasology/Hunger)

{: .center}
![oldModules]({{ site.baseurl }}/img/oldModules.jpg "oldModules"){:style="max-height: 700px;"}

### List of Pull Requests-

Here is a [list of pull requests](https://github.com/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+author%3Anihal111+created%3A2017-05-04..2017-08-15+) from the start of GSoC up until now.

<div class="collapsiblecontainer">
<div class="collapsibleheader"><span>+ </span><span>Click here to view all PRs?</span></div>
<div class="collapsiblecontent">
<a href="https://github.com/MovingBlocks/Terasology/pull/3065"><strong>MovingBlocks/Terasology</strong> Added setSpawnLocation command</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/20"><strong>Terasology/AdventureAssets</strong> Added MCQ Button Door</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/3061"><strong>MovingBlocks/Terasology</strong> Added removeAllWidgets method API UI</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/3033"><strong>MovingBlocks/Terasology</strong> Dead players alive-d on join</a><br />
<a href="https://github.com/Terasology/StructureTemplates/pull/20"><strong>Terasology/StructureTemplates</strong> Consumes AttackEvent for BlockRegions</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/3030"><strong>MovingBlocks/Terasology</strong> PlayerDeath event should be sent to character entity</a><br />
<a href="https://github.com/Terasology/Hunger/pull/12"><strong>Terasology/Hunger</strong> Fix for Hunger related Alive/Death handling</a><br />
<a href="https://github.com/Terasology/Thirst/pull/5"><strong>Terasology/Thirst</strong> Fix for Thirst related Alive/Death handling</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/19"><strong>Terasology/AdventureAssets</strong> Added NoInteraction component</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/3024"><strong>MovingBlocks/Terasology</strong> Checking isHeadless from DisplayDevice</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/3020"><strong>MovingBlocks/Terasology</strong> Change ActivationPredicted to consumable event</a><br />
<a href="https://github.com/Terasology/StructureTemplates/pull/18"><strong>Terasology/StructureTemplates</strong> Consuming ActivationPredicted event</a><br />
<a href="https://github.com/Terasology/Scenario/pull/33"><strong>Terasology/Scenario</strong> Added Protected Regions and Resizing functionality</a><br />
<a href="https://github.com/Terasology/Projectile/pull/4"><strong>Terasology/Projectile</strong> MaxDistance check during displacement calculation</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/18"><strong>Terasology/AdventureAssets</strong> Structure Template Integration fixes</a><br />
<a href="https://github.com/Terasology/Books/pull/15"><strong>Terasology/Books</strong> Multiplayer + newline fix</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/17"><strong>Terasology/AdventureAssets</strong> Swinging Blade is multiplayer ready</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/16"><strong>Terasology/AdventureAssets</strong> WipeOut is multiplayer ready</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/15"><strong>Terasology/AdventureAssets</strong> Fixed Fireball Launcher for multiplayer</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/14"><strong>Terasology/AdventureAssets</strong> Door works in multiplayer</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/13"><strong>Terasology/AdventureAssets</strong> Password Door is now multiplayer ready</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2994"><strong>MovingBlocks/Terasology</strong> Added door related events</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2993"><strong>MovingBlocks/Terasology</strong> FloatingTextRenderer accepts multiple \n separated lines</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2988"><strong>MovingBlocks/Terasology</strong> Multiline UIText, enter produces newline</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2987"><strong>MovingBlocks/Terasology</strong> Store DoorRegion prefab as component parameter</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/12"><strong>Terasology/AdventureAssets</strong> Added a UI Screen Password locked Door</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2983"><strong>MovingBlocks/Terasology</strong> Separated spawnLocation calculation from respawnPlayer method</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/11"><strong>Terasology/AdventureAssets</strong> Add the Revival Stone</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/10"><strong>Terasology/AdventureAssets</strong> Moved duplicate methods to utility class</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/9"><strong>Terasology/AdventureAssets</strong> Remember rotation after mining of trap blocks</a><br />
<a href="https://github.com/Terasology/Projectile/pull/3"><strong>Terasology/Projectile</strong> Revert to old constructor</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/8"><strong>Terasology/AdventureAssets</strong> Added more parameters for Fireball with Structure Template integration</a><br />
<a href="https://github.com/Terasology/Projectile/pull/2"><strong>Terasology/Projectile</strong> Changed CollisionGroup filter to ALL</a><br />
<a href="https://github.com/Terasology/Projectile/pull/1"><strong>Terasology/Projectile</strong> Added new event constructor for configurable maxDistance</a><br />
<a href="https://github.com/Terasology/DamagingBlocks/pull/6"><strong>Terasology/DamagingBlocks</strong> Reverted the AliveCharacter check</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/6"><strong>Terasology/AdventureAssets</strong> Added Fireball Launcher</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2982"><strong>MovingBlocks/Terasology</strong> Prevents player entity from being destroyed after death onDamage</a><br />
<a href="https://github.com/Terasology/DamagingBlocks/pull/5"><strong>Terasology/DamagingBlocks</strong> Added Alive Character check</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/5"><strong>Terasology/AdventureAssets</strong> Added Wipeout</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/4"><strong>Terasology/AdventureAssets</strong> Changed trap placement approach to root block</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/3"><strong>Terasology/AdventureAssets</strong> Changed trapPlaceholder block shape and fixed readme</a><br />
<a href="https://github.com/Terasology/StructureTemplates/pull/16"><strong>Terasology/StructureTemplates</strong> Moved rotation logic</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2973"><strong>MovingBlocks/Terasology</strong> Fixes <code class="highlighter-rouge">dumpEntities</code> console command</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/2"><strong>Terasology/AdventureAssets</strong> Added SwingingBlade</a><br />
<a href="https://github.com/Terasology/StructureTemplates/pull/15"><strong>Terasology/StructureTemplates</strong> Added rotation logic for spawning entities</a><br />
<a href="https://github.com/Terasology/AdventureAssets/pull/1"><strong>Terasology/AdventureAssets</strong> Add module.txt and gitignore</a><br />
<a href="https://github.com/Terasology/AdvancedBehaviors/pull/7"><strong>Terasology/AdvancedBehaviors</strong> Added alive character check</a><br />
<a href="https://github.com/Terasology/Pathfinding/pull/31"><strong>Terasology/Pathfinding</strong> Added alive character check</a><br />
<a href="https://github.com/Terasology/WildAnimals/pull/16"><strong>Terasology/WildAnimals</strong> Added alive character component</a><br />
<a href="https://github.com/Terasology/GooeysQuests/pull/14"><strong>Terasology/GooeysQuests</strong> Added alive character component</a><br />
<a href="https://github.com/Terasology/Journal/pull/4"><strong>Terasology/Journal</strong> Added Recipe and Image paragraph</a><br />
<a href="https://github.com/Terasology/WoodCrafting/pull/3"><strong>Terasology/WoodCrafting</strong> Moved generators to NeoTTA</a><br />
<a href="https://github.com/Terasology/NeoTTA/pull/1"><strong>Terasology/NeoTTA</strong> Moved generators from WoodCrafting</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2962"><strong>MovingBlocks/Terasology</strong> Fixed eye height movement debug command</a><br />
<a href="https://github.com/Terasology/PhysicalStats/pull/3"><strong>Terasology/PhysicalStats</strong> Fixes missing save component bugs</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2958"><strong>MovingBlocks/Terasology</strong> Do not destroy player entity completely on death</a><br />
<a href="https://github.com/Terasology/Journal/pull/3"><strong>Terasology/Journal</strong> Adds different colored entries for Unread Journal entries</a><br />
<a href="https://github.com/Terasology/Pathfinding/pull/30"><strong>Terasology/Pathfinding</strong> Fixed intelligent flee</a><br />
<a href="https://github.com/Terasology/AdvancedBehaviors/pull/6"><strong>Terasology/AdvancedBehaviors</strong> Added intelligent flee</a><br />
<a href="https://github.com/Terasology/Pathfinding/pull/29"><strong>Terasology/Pathfinding</strong> Added intelligent flee</a><br />
<a href="https://github.com/Terasology/AdvancedBehaviors/pull/5"><strong>Terasology/AdvancedBehaviors</strong> Refactor</a><br />
<a href="https://github.com/Terasology/AdvancedBehaviors/pull/3"><strong>Terasology/AdvancedBehaviors</strong> Added the fleeInProximity package</a><br />
<a href="https://github.com/Terasology/WildAnimals/pull/15"><strong>Terasology/WildAnimals</strong> Added a scaredDeer</a><br />
<a href="https://github.com/Terasology/AdvancedBehaviors/pull/2"><strong>Terasology/AdvancedBehaviors</strong> Added followInProximity package</a><br />
<a href="https://github.com/Terasology/WildAnimals/pull/14"><strong>Terasology/WildAnimals</strong> Added a friendlyDeer</a><br />
<a href="https://github.com/Terasology/WildAnimals/pull/13"><strong>Terasology/WildAnimals</strong> Moved packages to AdvancedBehaviors** module</a><br />
<a href="https://github.com/Terasology/AdvancedBehaviors/pull/1"><strong>Terasology/AdvancedBehaviors</strong> Moved packages from WildAnimals** module</a><br />
<a href="https://github.com/Terasology/WildAnimals/pull/12"><strong>Terasology/WildAnimals</strong> AttackInProximity- adds hostile-stray behavior switching</a><br />
<a href="https://github.com/Terasology/FunnyBlocks/pull/11"><strong>Terasology/FunnyBlocks</strong> Portals work in multiplayer</a><br />
<a href="https://github.com/Terasology/WildAnimals/pull/10"><strong>Terasology/WildAnimals</strong> Added aggressiveDeer</a><br />
<a href="https://github.com/Terasology/WorldlyTooltip/pull/7"><strong>Terasology/WorldlyTooltip</strong> Configured with WorldlyTooltipAPI module</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2932"><strong>MovingBlocks/Terasology</strong> Fixes the blocker #2913</a><br />
<a href="https://github.com/Terasology/WorldlyTooltip/pull/6"><strong>Terasology/WorldlyTooltip</strong> Added character entity support</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2930"><strong>MovingBlocks/Terasology</strong> BehaviorSystem- use cachedInterpreters</a><br />
<a href="https://github.com/MovingBlocks/Terasology/pull/2929"><strong>MovingBlocks/Terasology</strong> Worldly tooltip addition for character entities</a><br />
<a href="https://github.com/Terasology/WildAnimals/pull/9"><strong>Terasology/WildAnimals</strong> Worldly tooltip Integration</a>
</div>
</div>

### What more to look at?

There have been a whole lot of videos I've made over the summer. You can have a look at them at [my channel](https://www.youtube.com/channel/UCVDrDJDt7sI8A9Ww1FekUMQ).

I have also written a set of blog posts marking the progress I made through the summers. A list of all these can be found under the #GSoC tag [here](http://nihal111.github.io/tags/#GSoC).

### What's next?

Although I have checked off most of my primary targets from the proposal. There are quite a few things that need work on-  
1. Some of the traps like the Swinging Blade work well only in Single Player. This is because the Movement Prediction works quite differently on the server side. The `CharacterImpulseEvent` triggers differently even with a little lag.
2. Traps like the Wipe Out, require the player to move constantly along with the surfboard. There have also been instances when a collision is not detected between the player and the surfboard. Again something to deal with the Movement Prediction and Physics engine.
3. On the Gameplay side, I've attempted to make interesting short riddles for the three treasure locations, however they get boring very fast. The player might feel it is too much effort to solve a text based riddle. It can be difficult to strike the right chord while making riddles and clues that are both short, engaging and require the player to think.
4. The Portal upon construction does nothing yet. Well, it is supposed to take you back to your home planet. But I guess we could display a "Game Over" dialog or somehow bring up the Credits screen.

Some of these might be fixed by a long overdue movement refactoring. With Tyler Thompson's Scenario module developed alongside in [another GSoC project](https://thompsontyler.github.io/gsoc/2017/08/25/scenario-gsoc.html), the Lost module serves as an example of how a gameplay scenario can be made.  
With the completion of this GSoC project making adventure assets like locked doors, traps, resurrection statues etc are now a lot more easier. Creation of more such things can probably serve as one of the tougher GCI tasks later.

### Wrapping it up

Once again, I would like to thank all my mentors. My primary mentor, [Skylar 'skysom' Sommers](http://forum.terasology.org/members/skysom.1621/), for replying always within a splitsecond (save for the times when he forgets to hit the Send button :P). [Florian ‘flo’ Köberle](http://forum.terasology.org/members/florian.1335/), who was my secondary but went out of his way and functioned effectively as my primary. I got to learn a lot from flo regarding various aspects about the game. It would have been impossible to complete my project without his aid. [Xavier ‘xtariq’ Tariq](http://forum.terasology.org/members/xtariq.1697/), who was also my secondary mentor, helped me whenever I needed him. I'd like to specially thank [Rasmus 'cervator' Praestholm](http://forum.terasology.org/members/cervator.2/) here. Had he not been there that night in October, welcoming me on IRC and helping me set up my codebase, maybe I would have given up, moved on and never have done GSoC in the first place.

All in all, it has been a thrilling summer. By this time I am familiar with a good part of the game's codebase. I would love to continue contributing, albeit in different capacities. Let's hope real life doesn't get in the way too much. Also, GCI is almost here and another storm's coming!

Here's a snap from one of the many exciting multiplayer play test sessions-

{: .center}
![multiplayerPlayTest]({{ site.baseurl }}/img/multiplayerPlayTest.jpg "multiplayerPlayTest"){:style="max-height: 500px;"}