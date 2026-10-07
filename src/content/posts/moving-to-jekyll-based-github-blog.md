---
title: "Moving to Jekyll, a Migration Post That Aged Like Milk"
pubDatetime: 2019-05-14T10:00:00Z
description: "In 2019 I moved this blog to Jekyll. You're reading it on Astro."
tags:
  - jekyll
  - blog
  - github
---

_Originally published in May 2019. Rewritten in October 2026, with more sarcasm and fewer exclamation marks._

## The 30-Second Reality Check

In 2019 I moved this blog from [Blogger](https://salilwalavalkar.blogspot.com/) to [Jekyll](https://jekyllrb.com/) on GitHub Pages. In 2026 I moved it again, to [Astro](https://astro.build/). My requirements from back then held up fine, seven years on. The tool I picked to meet them didn't.

## Explain With Pictures

```mermaid
flowchart LR
  A["Blogger<br/>(HTML, WYSIWYG)"] -- "2019: 'I want Markdown'" --> B["Jekyll<br/>(Ruby, GitHub Pages)"]
  B -- "2026: 'I want a nicer theme'" --> C["Astro + AstroPaper<br/>(Node, GitHub Actions)"]
  C -. "20XX: inevitable" .-> D["Whatever's next"]
```

Every blog platform migration is followed by exactly one post: the one about the migration.

## 3 Hot Takes & Quotes

**1. The requirements were the real architecture.**

> Ability to manage blog data on Github (Command line FTW). (me, 2019)

> Switch from HTML based to Markdown (Improve my markdown in the process). (me, 2019)

This is the part I got right. Because every post was plain Markdown in a git repo, moving to Astro took an afternoon, not a rewrite. Pick formats, not frameworks. Frameworks rotate; Markdown is forever (or at least longer than Ruby gem compatibility).

**2. "Static site for better performance" is right, and also the least important reason.**

> Static site for better performance. (me, 2019)

Six posts. The server was never going to be the bottleneck. I was.

**3. "Customizations I will discover along the way" is the biggest lie in software.**

> It has a lot of customizations which hopefully I will discover along the way.. (me, 2019)

Number of Jekyll customizations discovered along the way: zero. This is the developer version of buying a gym membership. You don't pick a tool for the features you'll explore "someday". You pick it for the one thing you need today.

## The Post-Mortem / Verdict

The 2019 decision was fine, and so was Jekyll. Blog engines are disposable. Your content shouldn't be. Keep the posts in Markdown, keep them in git, and the next migration post writes itself. Which, apparently, this one did.

## Links & References

- [My old Blogger blog](https://salilwalavalkar.blogspot.com/)
- [Jekyll](https://jekyllrb.com/)
- [Astro](https://astro.build/) and the [AstroPaper theme](https://github.com/satnaing/astro-paper), which this blog now runs on
