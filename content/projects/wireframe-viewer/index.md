---
title: "Wireframe Viewer"
subtitle: "Visualize topological maps in 3D."
description: "Program to visualize topological maps in 3D, done in a couple of weeks in pure C for my learning course at 42."
slug: "wireframe-viewer"
date: 2022-07-14T15:56:54+02:00
draft: false
project/tags: [3D, School, Software]
---

{{% twoColumns_50-50 %}}

{{% div %}}

For a school project (programming course at {{< link href="https://www.42.fr/lenvironnement-de-travail/" target="_blank" rel="noopener noreferrer">}}School 42 {{</ link >}}) I developed a program to visualize topological maps in 3D, this was done in a couple of weeks in C, the usage of any libraries was prohibited except a lib to handle window interactions provided by the school.

On the UI side you can find info on the screen like the controls you can use, the name of the current topological map and the number of edges of the file.

{{%/ div %}}
{{< image title="Screenshot of the program displaying the 42 logo." size="500x" class="follow-grid-height" locurl="images/WireframeViewer_01.png" popup="true" >}}

{{%/ twoColumns_50-50 %}}

There is the option to load the program with multiple topological maps, then you can navigate between these files with keyboard shortcuts.

One last element I've done is a file errors checker, so if you try to execute the program with an invalid map the program will tell you why you map is invalid as well as where the errors are (find info about that on the {{< link href="https://github.com/BenSouchet/wireframe-viewer#bad-maps--errors" target="_blank" rel="noopener noreferrer" >}}Github Repository{{</ link >}}).

{{< projectInfoContainer >}}

{{< projectInfo icon="far fa-calendar-alt" title="When" value="2015" >}}

{{< projectInfo icon="far fa-clock" title="Duration" value="2 weeks" >}}

{{< projectInfo icon="far fa-file-code" title="Language" value="C" >}}

{{</ projectInfoContainer >}}

{{< sectionTitle "Images" >}}

{{< image title="Rotation of a topological map." size="750x" locurl="images/WireframeViewer_02.gif" popup="true" >}}
\
{{< twoColumns_50-50 >}}

{{< image title="Interactions with a topological map." size="500x" locurl="images/WireframeViewer_03.gif" popup="true" >}}

{{< image title="Simple map which shows well the perspective we can get." size="500x" locurl="images/WireframeViewer_04.png" popup="true" >}}

{{</ twoColumns_50-50 >}}

{{< sectionTitle "Links" >}}

{{< twoColumns_50-50 >}}

{{< largeButton text="Source Code" icon="fab fa-github" href="https://github.com/BenSouchet/wireframe-viewer" rel="noopener noreferrer" target="_blank" bgHexColor="24292E" >}}

{{< largeButton text="LinkedIn" icon="fab fa-linkedin" href="https://www.linkedin.com/in/BenSouchet/" rel="noopener noreferrer" target="_blank" bgHexColor="0077B5" >}}

{{</ twoColumns_50-50 >}}