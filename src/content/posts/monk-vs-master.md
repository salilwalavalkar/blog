---
title: "Monk vs Master (Ten Years of Experience, or One Year Ten Times?)"
pubDatetime: 2019-05-15T20:00:00Z
description: "Job-hopper or lifer? Wrong question. Count the distinct mistakes."
tags:
  - senior developer
---

_Originally published in May 2019. Rewritten in October 2026, with more sarcasm and fewer exclamation marks._

## The 30-Second Reality Check

People ask me who's better, the engineer who stayed put for years or the one who hopped jobs. Neither, really. I care how many _different_ mistakes you've made, and a koan from [The Codeless Code](https://thecodelesscode.com/case/100) agrees.

## Explain With Pictures

```mermaid
flowchart LR
  subgraph Monk["The 'experienced' monk"]
    direction TB
    M1["Mistake #1"] --> M2["Mistake #1 again"]
    M2 --> M3["Mistake #1, with confidence"]
    M3 --> M1
  end

  subgraph Master["The master"]
    direction TB
    S1["Mistake #1"] --> L1["Learn"]
    L1 --> S2["New mistake #2"]
    S2 --> L2["Learn"]
    L2 --> S3["...mistake #10,000"]
  end

  Monk ~~~ Master
```

Same number of years on both résumés. Very different engineers.

## 3 Hot Takes & Quotes

**1. Years of experience is a vanity metric.**

> Banzen shook his head sadly. "Ten mistakes, a thousand times each."

That's the engineer with "15 years of experience" who has really had one year of experience fifteen times. The job title says senior. The incident history says the same three outages, rebranded annually.

**2. Avoiding mistakes is the worst mistake.**

> The novice, not understanding, sought to avoid all error. An abbot observed and brought the novice to Banzen for correction.

Teams that punish failure end up with the same number of mistakes, just _hidden_ ones, plus engineers who never touch anything risky. That's why blameless post-mortems exist: the abbot was running one before it was cool.

**3. Even the gods ship bugs.**

> Banzen explained: "I have made ten thousand mistakes; Suku has made ten thousand mistakes; the patriarchs of Open Source have each made ten thousand mistakes."

Every maintainer you admire has a commit history full of reverts. Look up any famous project's "fix the fix" commits. Mastery looks like a long record. A spotless one is a bit suspicious.

## The Post-Mortem / Verdict

Monk vs master was never about tenure versus job-hopping. A lifer can rack up ten thousand distinct mistakes; a hopper can repeat the same ten at every company. In interviews, stop asking "how many years?" and start asking "what's the most interesting thing you broke, and what did you change afterwards?"

## Links & References

- [The Codeless Code, Case 100](https://thecodelesscode.com/case/100), the source of every quote in this post
