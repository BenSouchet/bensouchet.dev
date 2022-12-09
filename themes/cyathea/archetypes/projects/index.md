---
title: "{{- replace .Name "-" " " | title -}}"
subtitle: ""
description: "{{with .Site.Params.description -}}{{- . -}}{{- end -}}"
slug: "{{- lower (replace .Name " " "-" | title) -}}"
date: {{ .Date }}
draft: false
project/tags: []
---

{{% twoColumns_50-50 %}}

{{% div %}}



{{%/ div %}}
{{< image title="" locurl="images/_01.png" size="500x" class="follow-grid-height" popup="true" >}}

{{%/ twoColumns_50-50 %}}



{{< projectInfoContainer >}}

{{< projectInfo icon="far fa-calendar-alt" title="When" value="2022" >}}

{{< projectInfo icon="far fa-clock" title="Duration" value="6 months" >}}

{{< projectInfo icon="far fa-file-code" title="Language" value="C++" >}}

{{</ projectInfoContainer >}}

{{< sectionTitle "Images" >}}

{{< image title="" locurl="images/_02.png" size="750x" popup="true" >}}
\
{{< twoColumns_50-50 >}}

{{< image title="" locurl="images/_03.png" size="500x" popup="true" >}}

{{< image title="" locurl="images/_04.png" size="500x" popup="true" >}}

{{</ twoColumns_50-50 >}}

{{< sectionTitle "Links" >}}

{{< twoColumns_50-50 >}}

{{< largeButton text="Source Code" icon="fab fa-github" href="" rel="noopener noreferrer" target="_blank" bgHexColor="24292E" >}}

{{< largeButton text="LinkedIn" icon="fab fa-linkedin" href="https://www.linkedin.com/in/BenSouchet/" rel="noopener noreferrer" target="_blank" bgHexColor="0077B5" >}}

{{</ twoColumns_50-50 >}}