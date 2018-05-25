---
layout: page
title: Projects
header: True
permalink: /projects/
---

Projects are good things. Perhaps the best of things and no good project ever gets completed.
Here is the list of projects I own or have contributed to:

* [Google Summer of Code][Google Summer of Code]- I completed my GSoC in 2017 under [MovingBlocks- Terasology][MovingBlocks- Terasology]. The broad goal was to introduce content systems and gameplay connections to support a new template with solid replayability. I developed a new survival gameplay mode called [Lost][Lost] involving puzzles, traps and exploration based content packed in a new world with a backing lore. Dealt with the game’s physics, multiplayer and Entity Component System. Created new modules like [AdvancedBehaviors][AdvancedBehaviors] (for event driven behavior switching), [AdventureAssets][AdventureAssets] (for traps and puzzle elements). Made several accompanying API changes to the engine. Created and added [WildAnimals] to the game.

### Hackathons

* [Flood League][Flood League]: Designed and developed an endless runner game using Unity3D. Superheroes have to drive past the obstacles while rescuing the drowning civilians as their boat rushes past the flood-stricken city. Extensively worked on level design and implemented functionality such as continuous scoring, heat vision, super stretch arms, superpower cooldown among others. **First prize winner in Ubisoft GameJam 2017**.

* [Run][Run]: The Run app was born at the Yahoo! hackathon and ended up **winning the “most creative and fun hack” award**. Our team built a multi-player treasure hunt Android game supported by a Django server. Players look for and click a picture of an object around them as shown in the clue received on their phones to get the next clue. The first to finish the trail and decipher the clues wins. Used histogram equalization and scale invariant feature transform (SIFT) for rudimentary image matching.

* [Lend-It][Lend-It]: Designed a Django-based web application that serves as a platform to bridge the gap between lenders and borrowers. Through Lend-It one can find people nearby who wish to lend and borrow books or other shareable commodities and perform a safe exchange. Implemented a backend using Django for the Lend-It website, which allows user interaction, sending notifications, searching and lending books, maintaining a user profile among other features Hosted temporarily online [here](http://pacific-dawn-55810.herokuapp.com/). **Third prize winner in Microsoft code.fun.do** November '16.

* [RPG][RPG]: A real time RPG game in which players assume roles of characters lost on a island. Players are each given a backstory and an objective. Players can interact and communicate with each other using video chat. The story progresses and you have to convince the other player to join your objective and let you live. Made using Kandy API. **Third prize winner in Kandy Hackathon 2016**.

* [AssistANT][AssistANT]: Help the ant find sugar for its family. Built a puzzle game using Unity similar to the classic Bulldozer game. Guide the ant to push the sugar cubes down the ant holes. Dealt with basic 2-D physics and box colliders. Made custom sprites and worked largely on level design. Created using Unity 2D. **Second prize winner for Lenovo GameJam '15**.

* [alCHEMy][alCHEMy]: A game which completes chemical reactions, much like the classical Alchemy. Microsoft code.fun.do submission in January '16.

### Open Source

* [WnCC Website][WnCC Website]: The official Web and Coding Club, IIT Bombay website. Created, managed and maintained largely by me. The entire website is static and runs on Jekyll. Mainly serves as a portal for the Seasons Of Code (SOC) program. If you want to mentor a SOC project or have any ideas to make it look better, send a PR [here][WnCCRepo].

* [Bashortcuts][Bashortcuts]: 'bashortcuts' or bash-shortcuts is a skinny python script that helps build a personalized inputrc, which is a customized configuration of GNU Readline, the input related library used by bash and most other shells. Additionally, it makes it easy to define macros that can be used to tie shell_commands and functions to key sequences.

* [Terasology][Terasology]: Terasology is an open source renedition of Minecraft and is a platform to develop gameplay settings in the voxel world. I've been contributing to this project since October '16. The community is very active and enthusiastic, and I've had a great time with them.

### Course Projects and Research Work

* [Voice Conversion][Voice Conversion]: Built a pipelined approach to convert one person’s voice into another person’s voice. Proposed a deep learning approach to convert. Source waveform to phonemes and further phonemes to target waveform. Trained on TIMIT and CMU ARCTIC corpus respectively. Performed extensive experimentation with bi-directional Recurrent Neural Networks using LSTM and GRU cells. Adopted a multitask training approach by evaluating loss over an intermediate state with a pyramidal network architecture.

* [SAFE Quiz App][SAFE Quiz App]: Worked for the development of the SAFE Android application that facilitates online paperless tests in educational institutes. Multiple devices concurrently connect to a Wireless Access Point to fetch test data with action-logging happening in real time at the invigilator’s console. Worked on fetching and displaying of performance history and correct/incorrect answer visuals on the app. I worked on this as a part of my R & D Project in Fall '16.

* [Steganography Tool][Steganography Tool]: Implemented a steganography tool using MATLAB with custom terminal GUI. Implemented variations of encryption algorithms using Least Significant Bit to encrypt/decrypt text within an image with a custom passphrase. This was done as a part of my Digital Image Processing course project in Fall '17.

### Hobby Projects

* [MooDLD][MooDLD]: A python application that automates the download of course material from [moodle.iitb.ac.in](moodle.iitb.ac.in). It has a Tkinter based GUI and uses Mechanize for scraping. Made independently for Windows, it consists of a setup which installs MooDLD with all dependencies. Developed further as an android app that lets you download all the courses with the click of a button. [***UPDATE***: **Was officially launched by the UG Academics Council at IIT Bombay in Aug '16**. However, project has been ***dicontinued*** due to the recent Moodle version bump to support the official Moodle Mobile app.]

* [EVENTual][EVENTual]: No more painstakingly filling or remembering event details. Save events to your default calendar with one tap. Fill out the details and get a sharable link and QR code. Use the [EVENTual android app] to directly add that. Created a platform for creating and sharing events easily, automating the task of filling details in the calendar by generating shareable links and QR Codes. Made a Django based web application to facilitate creation and searching of events. Developed an Android app which would pick up sharable links and scan QR Codes, to automatically add the event to calendar.

* [J.A.R.V.I.S.][J.A.R.V.I.S.]: An attempt to make a very simple, Personal Assistant that understands speech as well as text input and is capable of performing tasks other than conversing. This project is based on AIML 1.0 and uses pyaiml for using the AIML interpreter in python. AIML, is based on pattern matching and this project does not implement any sort of machine learning or language processing.

* [IITB login extension for Chrome][IITB login extension for Chrome]: This extension automatically logs in to [internet.iitb.ac.in](internet.iitb.ac.in) page whenever Chrome browser is opened. Added integration for [moodle](moodle.iitb.ac.in) and [gpo](gpo.iitb.ac.in).

* Kibo- In the summer of 2016, I worked on [Project Awaaz][Project Awaaz], a non-profit initiative to create an audiobook repository for the blind. Anybody can record text by reading out uploaded content and the recordings would be compiled, stitched and distributed. Built the backend for Project Awaaz and the Kibo website using the Django framework- Python/Django/Apache/MySQL. Designed responsive websites. Worked extensively on the Android application for Project Awaaz and handled server side integration.


[Project Awaaz]: http://projectawaaz.org/
[Flood League]: https://github.com/Ferozepurwale/Flood-League/
[Lost]: https://github.com/Terasology/Lost/
[AdvancedBehaviors]: https://github.com/Terasology/AdvancedBehaviors/
[AdventureAssets]: https://github.com/Terasology/AdventureAssets
[WildAnimals]: https://github.com/Terasology/WildAnimals
[Google Summer of Code]: /2017/08/15/GSoC-wrap-up.html
[MovingBlocks- Terasology]: https://github.com/MovingBlocks/Terasology
[J.A.R.V.I.S.]:https://github.com/nihal111/J.A.R.V.I.S
[Terasology]: https://github.com/MovingBlocks/Terasology
[EVENTual android app]: https://play.google.com/store/apps/details?id=co.eventual.ferozepurvale.eventual
[EVENTual]: http://www.eventual.co.in/
[WnCCRepo]: https://github.com/nihal111/WnCC
[WnCC Website]: http://wncc-iitb.org/
[LendIt]: http://pacific-dawn-55810.herokuapp.com
[MooDLD]: https://github.com/nihal111/MooDLD
[IITB login extension for Chrome]: https://github.com/nihal111/IITB-login-extension-Chrome
[AssistANT]: https://github.com/nihal111/nihal111.github.io/releases/download/v0.1/AssistANT.zip
[RPG]: https://github.com/nihal111/RPG
[alCHEMy]: https://github.com/nihal111/alCHEMy
[Run]: https://github.com/CodeMaxx/Run-App
[Bashortcuts]: https://github.com/nihal111/bashortcuts
[SAFE Quiz App]: http://safe.cse.iitb.ac.in/
[Voice Conversion]: https://github.com/nihal111/voice-conversion
[Steganography Tool]: https://github.com/nihal111/steganography