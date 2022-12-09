---
title: "{{- replace .Name "-" " " | title -}}"
subtitle: ""
description: "{{with .Site.Params.description -}}{{- . -}}{{- end -}}"
slug: "{{- lower (replace .Name "-" " " | title) -}}"
date: {{ .Date }}
draft: false
---
