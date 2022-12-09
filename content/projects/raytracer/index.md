---
title: "Raytracer"
subtitle: "Render 3D objects, simulates light reflections, refractions and shadows."
description: "Final project of my curriculum at school 42, realised as a team of 4 students in 3 months."
slug: "raytracer"
date: 2022-07-18T12:49:41+02:00
draft: false
project/tags: [3D, Graphic, School, Software, UI/UX]
---

{{% twoColumns_50-50 %}}

{{% div %}}

This is the final project of my curriculum at {{< link href="https://www.42.fr/lenvironnement-de-travail/" rel="noopener" target="_blank" >}}school 42{{</ link >}}, realised as a team of 4 students in about three months.

The goal was to create in C and without the help of libraries that we hadn't coded ourselves, a raytracer engine, so ability to render simple 3D objects, simulates light reflections, refractions and shadows.

It was also necessary to create a input file type for the program and do the parsing to be able to load scenes.

{{%/ div %}}
{{< image title="The raytracer program with multiple textured spheres." size="500x" class="follow-grid-height" locurl="images/Raytracer_01.png" popup="true" >}}

{{%/ twoColumns_50-50 %}}

On my side I worked on many parts of the project:
- The input file and its parsing
- The UI & UX, and events management (keyboard, mouse, buttons)
- Special modes (filters) that modify the final rendering of the image
- The PNG image export system
- The ability to add elements in the scene
- Management of scene elements, modification of position, size, colors, shader, ...

I learned a lot during the development, I tested new things like the advanced event management with different interface elements (button, textarea, radio button, input, ...).

It was a long and challenging project but the result was worth it.

{{< projectInfoContainer >}}

{{< projectInfo icon="far fa-calendar-alt" title="When" value="2017" >}}

{{< projectInfo icon="far fa-clock" title="Duration" value="3 months" >}}

{{< projectInfo icon="far fa-file-code" title="Language" value="C" >}}

{{</ projectInfoContainer >}}

{{< sectionTitle "Images" >}}

{{< image title="View of the program with a scenecomposed of multiple objects." size="750x" locurl="images/Raytracer_02.png" popup="true" >}}
\
{{< twoColumns_50-50 >}}

{{< image title="Multiple objects with perlin nose textures." size="500x" locurl="images/Raytracer_03.png" popup="true" >}}

{{< image title="Greyscale filter applied on a textured sphere." size="500x" locurl="images/Raytracer_04.png" popup="true" >}}

{{< image title="One of the filters (Sobel) applied to the first image." size="500x" locurl="images/Raytracer_05.png" popup="true" >}}

{{< image title="Night vision effect applied." locurl="images/Raytracer_06.png" size="500x" popup="true" >}}

{{</ twoColumns_50-50 >}}

{{< sectionTitle "Links" >}}

{{< twoColumns_50-50 >}}

{{< largeButton text="Source Code" icon="fab fa-github" href="https://github.com/BenSouchet/raytracer" rel="noopener noreferrer" target="_blank" bgHexColor="24292E" >}}

{{< largeButton text="LinkedIn" icon="fab fa-linkedin" href="https://www.linkedin.com/in/BenSouchet/" rel="noopener noreferrer" target="_blank" bgHexColor="0077B5" >}}

{{</ twoColumns_50-50 >}}