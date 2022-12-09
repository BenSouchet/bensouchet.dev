---
title: "Fabpilot : Live Patch Rendering"
subtitle: "Streamed from the server to the client's browser."
description: "Implementation of a patch rendering system directly streamed on the client's browser I've done as an Intern at Sculpteo (3D printing company)."
slug: "fabpilot-patch-rendering"
date: 2022-07-18T13:20:30+02:00
draft: false
project/tags: [3D, Graphic, Software, Web]
---

{{% twoColumns_50-50 %}}

{{% div %}}

As an intern at _Sculpteo_ I worked on a product call ***Fabpilot***, my mission was to work their raytracing engine code.

My main task was to implement a patch rendering system directly streamed on the client's browser.

This project was quite challenging because I had to work with several languages:

{{%/ div %}}
{{< image title="The Fabpilot 3D file viewer with the School 42 logo loaded." size="500x" locurl="images/FabpilotPathrendering_01.png" class="follow-grid-height" popup="true" >}}

{{%/ twoColumns_50-50 %}}

- **C** for the core of the raytracing code (stored as a library)
- **C++** and **Cython** to link the raytracing library to the webapp backend.
- **Python** for the webapp backend
- **JS** and **JQuery** for the Frontend (image reconstruction and live update in the browser)

Normally when we do Patch Rendering we leave the default patch order, so we start from the top left and render line by line until the end but knowing that the object to render is often in the middle of the image we decided to test several patches's sequences (patterns), you can check them on the GIF below and in the last image.

What made it possible for me to complete this task in only 1 month was the fact that I was supervised, a big thanks to {{< link href="https://www.linkedin.com/in/ivicaarsov/" rel="noopener" target="_blank" >}}Ivica Arsov{{</ link >}} who was Technical Lead at _Sculpteo_ at the time and who mentored me.

{{< projectInfoContainer >}}

{{< projectInfo icon="far fa-calendar-alt" title="When" value="2017" >}}

{{< projectInfo icon="far fa-clock" title="Duration" value="1 month" >}}

{{< projectInfo icon="far fa-file-code" title="Languages" value="C, C++, Python, JS" >}}

{{</ projectInfoContainer >}}

{{< sectionTitle "Images" >}}

{{< image title="Animation of the Live Patch rendering in action." size="750x" locurl="images/FabpilotPathrendering_02.gif" popup="true" >}}
\
{{< twoColumns_50-50 >}}

{{< image title="Tasks I have done during the internship." size="500x" locurl="images/FabpilotPathrendering_03.png" popup="true" >}}

{{< image title="The patterns implemented for the path rendering." size="500x" locurl="images/FabpilotPathrendering_04.png" popup="true" >}}

{{</ twoColumns_50-50 >}}

{{< sectionTitle "Links" >}}

{{< twoColumns_50-50 >}}

{{< largeButton text="Fabpilot Website" icon="fas fa-cubes" href="https://www.fabpilot.com/features/" rel="noopener noreferrer" target="_blank" bgHexColor="24292E" >}}

{{< largeButton text="LinkedIn" icon="fab fa-linkedin" href="https://www.linkedin.com/in/BenSouchet/" rel="noopener noreferrer" target="_blank" bgHexColor="0077B5" >}}

{{</ twoColumns_50-50 >}}