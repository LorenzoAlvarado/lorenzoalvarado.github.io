# Maintenance Guide

This site is structured so routine updates require editing content rather than copying full HTML pages.

## 1. Add a talk

Create **two files** in `_talks/`, one per language. A practical naming convention is:

- `_talks/en-my_talk.html`
- `_talks/es-my_talk.html`

Use the same `slug` and matching permalinks. Minimal English example:

```yaml
---
layout: talk
title: "My Talk — Lorenzo Alvarado"
talk_title: "My Talk"
header_title: "Talks - Details"
nav: talks
lang: en
mathjax: true
slug: my_talk
permalink: /talks/my_talk.html
talk_date: 2026-11-15
date_display: November 2026
location: Mathematics Institute, UNAM
event: Seminar Name
presented_language: es
video: https://www.youtube.com/embed/VIDEO_ID
slides: /assets/pdfs/talks/my_talk_slides.pdf
---

<p>Your talk description goes here. MathJax works: $\zeta(s)$.</p>
```

For Spanish, change `lang`, translated text, and use `permalink: /es/talks/my_talk.html`. If there is no recording, simply omit `video`. If there are no slides, omit `slides`.

**You do not edit `talks.html` or `es/talks.html`.** The new talk appears automatically and is sorted by `talk_date`.

## 2. Add a blog post

Create two files in `_posts/` using Jekyll's required date prefix. Example:

- `_posts/2026-11-20-my-topic-en.html`
- `_posts/2026-11-20-my-topic-es.html`

Minimal English front matter:

```yaml
---
layout: blog_post
title: "My New Post – Lorenzo Alvarado"
post_title: "My New Post"
header_title: Blog
nav: blog
lang: en
mathjax: true
slug: my-topic
date: 2026-11-20
permalink: /blog/posts/my-topic.html
date_display: Nov 20, 2026
read_time: 6
author: Lorenzo Alvarado
tags:
  - label: Number Theory
    class: math
  - label: Problem Solving
    class: puzzle
excerpt_text: "A short description shown on the Blog page."
---

<p>The article begins here.</p>
```

Spanish uses `/es/blog/posts/my-topic.html` and translated metadata/content. Blog cards and previous/next navigation are generated automatically.

## 3. Update Teaching

Edit only `_data/courses.yml`. Each course contains English/Spanish names and one shared semester list:

```yaml
- en: Number Theory I
  es: Teoría de Números I
  semesters: 2023-2, 2026-1, 2027-1
```

To add a semester, append it to `semesters`. To add a course, add one entry under the correct category. Both language pages update from the same file.

## 4. Language behavior

The root page defaults to Spanish for a first-time visitor. When the visitor chooses EN or ES, the choice is stored in `localStorage` and respected on later visits.
