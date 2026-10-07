---
title: "Social Posts: JavaScript's Type Checker Finally Stopped Using JavaScript"
date: "2026-08-28"
blog_url: "https://salilwalavalkar.github.io/blog/posts/2026-08-28-typescript-7-go-port/"
---

## 🐦 X / Twitter

TypeScript 7 got ~10x faster by porting the compiler to Go. The fastest way to speed up a JavaScript tool: stop writing it in JavaScript. https://salilwalavalkar.github.io/blog/posts/2026-08-28-typescript-7-go-port/

## 🧵 Threads

TypeScript 7 is out: the compiler ported line by line from TypeScript to Go. Often 10x faster, and per the team, "less crashy". When did a major release last promise fewer crashes?

The fun part: the JS tooling world now runs on everything except JS. One fast linter is written in Rust, calls a Go type checker, and runs custom rules written in TypeScript. Three languages to lint one.

The catch: Vue, Angular, Astro and editor plugins wait for the new API in 7.1. Speed now, ecosystem later. https://salilwalavalkar.github.io/blog/posts/2026-08-28-typescript-7-go-port/

## 🐘 Mastodon

Notes on TypeScript 7 from Daniel Rosenwasser on SE Daily. The compiler was ported from TS to Go side by side, file by file, not redesigned. The ~10x speedup comes from native code plus shared-memory parallelism across all cores. The old compiler API "grew very organically", and the new one sits behind an IPC boundary, so Vue, Angular and Astro tooling waits for 7.1. Takeaway: a boring port beats a clever rewrite. https://salilwalavalkar.github.io/blog/posts/2026-08-28-typescript-7-go-port/

#TypeScript #GoLang #JavaScript #DevTools #OpenSource
