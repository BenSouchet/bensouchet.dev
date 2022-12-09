---
title: "Wolf3d"
subtitle: "Raycasting game inspired by Wolfenstein 3D."
description: "Program developed for my learning course at school 42, the goal was to create a ray casting game just like Wolfenstein 3D."
slug: "wolf3d"
date: 2022-07-17T14:48:17+02:00
draft: false
project/tags: [3D, School, Software, UI/UX]
---


{{% twoColumns_50-50 %}}

{{% div %}}

I developed this program for my learning course at 42 school, the goal was to create a ray casting game just like Wolfenstein 3D or the first DOOM games.

I've done this project in three weeks, and like for almost all the projects at the school the usage of any libraries was prohibited, so we are forced to re-code a lot of "basic" C functions.

{{%/ div %}}
{{< image title="Screenshot of the game with the texture option enabled." size="500x" locurl="images/Wolf3d_01.png" popup="true" >}}

{{%/ twoColumns_50-50 %}}

For this project I discovered and played with ray casting rendering, a simple rendering method to render three-dimensional scenes to two-dimensional images, rays are traced from the eye of the observer, when rays hit a wall the distance travelled is use to compute the height of the wall.

I played a lot with textures, I created high definition seamless textures inspired by Egyptian tombs. On the lighting side I created two atmospheres, the first one simulates a powerful torch, the second one a candle which makes it more difficult to find the way into the maze.

For the User Interface I did something pretty advanced, I added a minimap, the color schema change according to to the options (Textures, Hardcode mode) and you have a skippable game intro.

I also experimented with audio, I've added music, ability to play/pause and option to change the current song.

{{< projectInfoContainer >}}

{{< projectInfo icon="far fa-calendar-alt" title="When" value="2016" >}}

{{< projectInfo icon="far fa-clock" title="Duration" value="3 weeks" >}}

{{< projectInfo icon="far fa-file-code" title="Language" value="C" >}}

{{</ projectInfoContainer >}}

{{< sectionTitle "Images" >}}

{{< image title="What the game looks like when you move (minimap enabled)." size="750x" locurl="images/Wolf3d_02.gif" popup="true" >}}

{{< image title="Comparison between the various modes." locurl="images/Wolf3d_03.png" size="750x" popup="true" >}}
\
{{< twoColumns_50-50 >}}

{{< image title="Lighting comparison : Default mode vs. Hardcode Mode." size="500x" locurl="images/Wolf3d_04.png" popup="true" >}}

{{< image title="Animation with the hardcore mode enabled." locurl="images/Wolf3d_05.gif" size="500x" popup="true" >}}

{{</ twoColumns_50-50 >}}

{{< sectionTitle "Links" >}}

{{< twoColumns_50-50 >}}

{{< largeButton text="Source Code" icon="fab fa-github" href="https://github.com/BenSouchet/wolf3d" rel="noopener noreferrer" target="_blank" bgHexColor="24292E" >}}

{{< largeButton text="LinkedIn" icon="fab fa-linkedin" href="https://www.linkedin.com/in/BenSouchet/" rel="noopener noreferrer" target="_blank" bgHexColor="0077B5" >}}

{{</ twoColumns_50-50 >}}