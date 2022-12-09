---
title: "Fractals Explorer"
subtitle: "Display fractals, zoom and change complexity."
description: "Second graphic program I did, the goal is to display fractals, be able to zoom and change the number of iterations (complexity)."
slug: "fractals-explorer"
date: 2022-07-17T14:16:01+02:00
draft: false
project/tags: [Graphic, School, Software]
---

{{% twoColumns_50-50 %}}

{{% div %}}

This project was the second graphic program I did for my programming course the goal was to display fractals, be able to zoom and change the number of iterations (complexity).

I've done this project in one week, and like for almost all the projects at the school the usage of any libraries was prohibited, so we are forced to re-code a lot of "basic" C functions.

{{%/ div %}}
{{< image title="Screenshot of the program with the Julia fractal displayed." size="500x" class="follow-grid-height" locurl="images/FratalsExplorer_01.png" popup="true" >}}

{{%/ twoColumns_50-50 %}}

I set up multiple interactions with the fractals, we can move, zoom, rotate, change the number of iterations, change the color gradient.

And for the first time I handled the mouse in a program, if you select the Julia's fractal and the active the mouse with the keyboard shortcut `M` you will be able to edit the shape of the fractal, you can see below the shape of the Julia fractal change with mouse movement.

On the UI side I simulated background opacity for the panels by darkening the pixels, it's the same result as if I had to manage the overlapping of a semi-transparent image with the background.

{{< projectInfoContainer >}}

{{< projectInfo icon="far fa-calendar-alt" title="When" value="2015" >}}

{{< projectInfo icon="far fa-clock" title="Duration" value="1 week" >}}

{{< projectInfo icon="far fa-file-code" title="Language" value="C" >}}

{{</ projectInfoContainer >}}

{{< sectionTitle "Images" >}}

{{< image title="The Julia fractal changed via mouse movements." size="750x" locurl="images/FratalsExplorer_02.gif" popup="true" >}}
\
{{< twoColumns_50-50 >}}

{{< image title="Screenshot of the program with the Julia fractal displayed." size="500x" locurl="images/FratalsExplorer_03.png" popup="true" >}}

{{< image title="Screenshot of the program with the Julia fractal displayed." size="500x" locurl="images/FratalsExplorer_04.png" popup="true" >}}

{{</ twoColumns_50-50 >}}

{{< sectionTitle "Links" >}}

{{< twoColumns_50-50 >}}

{{< largeButton text="Source Code" icon="fab fa-github" href="https://github.com/BenSouchet/fractol" rel="noopener noreferrer" target="_blank" bgHexColor="24292E" >}}

{{< largeButton text="LinkedIn" icon="fab fa-linkedin" href="https://www.linkedin.com/in/BenSouchet/" rel="noopener noreferrer" target="_blank" bgHexColor="0077B5" >}}

{{</ twoColumns_50-50 >}}