# Salil Overflow

Source for [salilwalavalkar.github.io/blog](https://salilwalavalkar.github.io/blog/), built with [Astro](https://astro.build/) and the [AstroPaper](https://github.com/satnaing/astro-paper) theme.

## Writing a post

Add a Markdown file to `src/content/posts/`. The file name becomes the URL slug (`/blog/posts/<file-name>/`).

```md
---
title: "Post title"
pubDatetime: 2026-10-06T09:00:00Z
description: "One-line summary shown in listings and previews."
tags:
  - some-tag
---
```

Images: put them in `src/assets/images/` and reference them as `![alt](@/assets/images/file.jpg)` so Astro optimizes them.

## Commands

| Command        | Action                               |
| :------------- | :----------------------------------- |
| `pnpm install` | Install dependencies                 |
| `pnpm dev`     | Dev server at `localhost:4321/blog/` |
| `pnpm build`   | Production build to `./dist/`        |
| `pnpm preview` | Preview the production build         |

Pushing to `master` deploys the site via `.github/workflows/deploy.yml`.

Site settings (title, socials, etc.) live in `astro-paper.config.ts`.
