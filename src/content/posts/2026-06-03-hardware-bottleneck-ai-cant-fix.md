---
title: "The Hardware Bottleneck AI Can't Fix: You Can't Unit Test a Rocket"
description: "Your coding agent iterates in seconds. A rocket iterates when the hard drive gets back from the desert."
pubDatetime: 2026-06-03T09:00:00Z
tags: ["hardware", "observability", "ai", "data", "rants"]
draft: false
sourceUrl: "https://softwareengineeringdaily.com/podcasts/the-hardware-bottleneck-ai-cant-fix/"
---

Notes on [Software Engineering Daily: The Hardware Bottleneck AI Can't Fix](https://softwareengineeringdaily.com/podcasts/the-hardware-bottleneck-ai-cant-fix/), with [Jason Hoch](https://x.com/jrshoch) (co-founder of [Nominal](https://nominal.io/)) talking to [Kevin Ball](https://www.kball.llc/).

## The 30-Second Reality Check

AI agents are rewriting software because code can be tested in seconds, thousands of times, for free. Hardware can't: every test means building something, wiring it up, maybe driving it to a desert, and then physically fetching a hard drive to see what happened. No model makes that loop faster. Better data plumbing might.

## Explain With Pictures

```
  Software feedback loop                 Hardware feedback loop
  (seconds, basically free)              (days to months, $$$$$$)

  +-------------+                        +---------------------------+
  | agent edits |<---------+             | design                    |
  |    code     |          |             +-------------+-------------+
  +------+------+          |                           |
         |                 |             +-------------v-------------+
  +------v------+          |             | supply chain (months)     |
  | unit tests  |          |             +-------------+-------------+
  |   (2 sec)   |          |                           |
  +------+------+          |             +-------------v-------------+
         |                 |             | build + wire the test bed |
  +------v------+          |             | ($1M table, you have two) |
  | pass/fail   +----------+             +-------------+-------------+
  +-------------+                                      |
                                         +-------------v-------------+
  Repeat 10,000 times                    | fly it / fire it (8 sec)  |
  before lunch.                          +-------------+-------------+
                                                       |
                                         +-------------v-------------+
                                         | pull the hard drive,      |
                                         | hope the config matched   |
                                         +-------------+-------------+
                                                       |
                                         +-------------v-------------+
                                         | "what happened?"          |
                                         | (a day or two later)      |
                                         +---------------------------+
```

You can give an agent a test suite. You can't give it a wind tunnel.

## 3 Hot Takes & Quotes

**1. Software observability is built to forget. Hardware can't afford to.**

> I always joked that as a software engineer, I was trained to think of my infrastructure like cattle, not pets. But for our customers, everything is a pet.

A rocket startup might spend years and tens of millions of dollars to get to an eight-second engine test, and that data is "your entire company". Meanwhile, standard software observability is:

> super different from software observability, where you tend to forget everything a week later.

We built a whole industry around P99s, 15-second buckets and retention policies. Then we act surprised when that playbook doesn't work for people who can't afford to drop a single sample. Downsampling is a luxury of things you can redeploy.

**2. LLMs don't know physics. They know people writing about physics.**

> it's not thinking in terms of physics. It's thinking in terms of humans who have translated physics into English

Code is the native language of a coding model, so it can check its own work. Ask it how a jet will behave and you get a well-written summary of other people's summaries, which you then have to go and physically test anyway. And even a perfect design still waits on the real-world queue:

> A lot of times, the supply chain is the supply chain in the world of hardware and you can't shave off these months

No amount of tokens makes a part arrive faster. The bottleneck isn't intelligence. It's atoms.

**3. Zoomed-out charts lie, and AI-built dashboards could lie with confidence.**

> How do you make sure that those zoomed out plots don't tell a lie and don't hide a data point that could be critical?

A multi-hour flight squeezed into one chart can hide the split second that matters. Nominal's founder worries that AI-generated UIs lack that paranoia, leading to "compounding misunderstandings". His safety bar is refreshingly clear:

> I just think we're willing to be pretty YOLO with OpenClaw, but we not want to with a rocket fire, or especially any flight that has a person inside the vehicle.

Vibe-code your to-do app. Leave the flight test dashboards to people who lose sleep over a missing data point.

## The Post-Mortem / Verdict

The honest pitch here isn't "AI for hardware". It's the boring stuff software solved years ago: catalogs, tagging, data lineage, hot and cold storage that tell the same story, and config that updates itself so a tired technician doesn't garble a test flight. One customer thought all its data landed in network storage; Nominal found "only 10% of it even got to that point."

Hardware's AI moment will come after it has clean, labelled data to learn from, not before. Until then, the most useful thing software engineers can bring to rockets is a good data pipeline. As for letting agents design the rocket itself:

> Not yet. Not yet. But let's start with video games and then we can move on to physical systems. — Jason Hoch

## Links & References

- **The episode:** [The Hardware Bottleneck AI Can't Fix](https://softwareengineeringdaily.com/podcasts/the-hardware-bottleneck-ai-cant-fix/), Software Engineering Daily, 2 Jun 2026 ([transcript](https://softwareengineeringdaily.com/wp-content/uploads/2026/06/SED1937-Jason-Hoch.txt))
- **Jason Hoch** (guest), co-founder of Nominal: [X](https://x.com/jrshoch)
- **Kevin Ball** (host), VP of Engineering at Mento: [Website](https://www.kball.llc/) · [X](https://x.com/kbal11) · [LinkedIn](https://www.linkedin.com/in/kbal11/)
- [Nominal](https://nominal.io/), the hardware test data platform discussed in the episode
