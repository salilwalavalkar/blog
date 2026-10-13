---
title: "Stop Building God and Go Build Something for Electricians"
description: "A Nobel economist says last year's models were already good enough, and the industry is spending its engineers on the wrong layer."
pubDatetime: 2026-10-07T09:00:00Z
tags: ["ai", "economics", "engineering", "product", "rants"]
draft: true
sourceUrl: "https://www.youtube.com/watch?v=0lsasYuzhL4"
---

Notes on [Silicon Valley Girl: Nobel Economist: Where He Sees the Real Money in AI](https://www.youtube.com/watch?v=0lsasYuzhL4), where [Marina Mogilko](https://marinamogilko.co/) talks to [Daron Acemoglu](https://economics.mit.edu/people/faculty/daron-acemoglu) (MIT economist, 2024 Nobel laureate in Economic Sciences).

## The 30-Second Reality Check

Daron Acemoglu thinks last year's models were already good enough for most useful work. Silicon Valley keeps spending its engineers on bigger models anyway, while nurses, teachers and electricians get nothing.

## Explain With Pictures

```
  Where the engineers go                  Where the value is

  ┌──────────────────────────┐
  │  foundation models       │ ◀── "You live in a different world.
  │  bigger, smarter, AGI    │      We're going to create AGI."
  └────────────┬─────────────┘
               │
               │  (thin pipe)
               ▼
  ┌──────────────────────────┐            nurses: diagnosis, quality control
  │  applications            │ ─ ─ ─ ─ ▶  teachers
  │  that nobody is building │            electricians facing new machinery
  └────────────┬─────────────┘            customer service that works
               │
               ▼
  measured economic impact so far: "basically zero"
```

His point is that the bottleneck sits in the middle box. Making the top box bigger doesn't widen the pipe.

## 3 Hot Takes & Quotes

**1. "Something either runs or doesn't run" is why coding fell first. It's also the most dangerous sentence in the episode.**

His explanation for why coding agents took off before anything else is the cleanest I've heard:

> just like math just like chess coding has rules something either runs or doesn't run. Reinforcement learning is very effective when you have a ground truth that says no that's wrong

Compare customer service, where everyone expected bots to win first and instead got what he calls "a nightmare," because requests are person-specific, phrased a hundred ways, and full of gray areas.

He's right about the training signal. But anyone who's been on call knows that "it runs" and "it's correct" are different things. A billing job can run green every night while rounding every invoice the wrong way, as long as no test checks the rounding. The checker for coding is only as good as your test suite, which is why the agents look so smart on greenfield demos and so much less smart on a ten-year-old codebase where the real spec lives in someone's head.

**2. He did the automation math, and the layoff posts lose.**

Marina brings up the "instead of hiring someone, I deployed an agent" posts on X. His answer is arithmetic:

> Imagine you have 100 employees and I tell you, you can automate 5% of those jobs and reduce the cost by half in those 5%. Or you can make your workers 5% more productive. The latter is going to get you much more.

Halving the cost of 5% of your jobs saves 2.5% of the labor bill. Making everyone 5% more productive gets you 5%. And the first option also requires the automation to actually work, which, he points out, is where companies trip, because they "take the automation plunge" thinking it's easy and then "can't make it work." He also has a good read on the industry's favorite phrase:

> AI has a jagged frontier. I like that image, but it's also a code word for saying, oh, we overestimated AI... we thought we could lay off workers because of AI. No, we can't.

**3. "Go there, get your hands dirty and talk to workers."**

His bet on where the money is: high-quality data and applications. Not foundation models.

> I really don't see how you're going to make trillions of dollars from foundation models... we'll see some failed IPOs.

Fine, that's a forecast and forecasts are cheap. The part I'd tape to the wall is the bit after it, that the tacit knowledge sits with the workers and "you can't just sit in your office in front of a computer... and come up with an application." Software built without watching the people who'll use it tends to lose to a clipboard, because the real constraints (no Wi-Fi at the loading dock, gloves on) never show up in a requirements doc.

## The Post-Mortem / Verdict

This is the third AI episode from this channel in a week, after [Greg Brockman](https://www.youtube.com/watch?v=qy8Gr27yLMk) and [Brian Chesky](https://www.youtube.com/watch?v=iJlyNupMOzA), and it's the only guest who doesn't sell the stuff. You can tell. He admits he's "behind the frontier," does his math by hand, and won't let students who speak English as a second language use AI to write for them, only to check their sentences.

He is blunt about schools, too. He called it "a dangerous huge social experiment to unleash generative AI on schools without any guardrails" in 2023 or 2024 (he isn't sure which), and he thinks the result has come "pretty close" to his worst fears. His career advice is to study math, physics, economics and engineering, and he means it, AI solving hard math problems or not.

Where I'd push back a little. "Even last year's models would have been good enough" is easy to say from outside the build. Getting a model to behave reliably inside a hospital's systems is mostly integration, compliance and data work, which is exactly the slow, unglamorous "diffusion" problem he describes elsewhere. He's right that nobody's doing it. He just makes it sound easier than it is ("such an easy problem," on AI for electricians).

The best line goes to whoever at a tech company told him, after he pitched AI that makes workers more productive, "You live in a different world. We're going to create AGI. What are you talking about?" Somewhere an electrician is still waiting three weeks for a callback.

## Links & References

- [Nobel Economist: Where He Sees the Real Money in AI](https://www.youtube.com/watch?v=0lsasYuzhL4), Silicon Valley Girl on YouTube, 6 Oct 2026
- Daron Acemoglu (guest), MIT economist and 2024 Nobel laureate in Economic Sciences: [MIT Economics](https://economics.mit.edu/people/faculty/daron-acemoglu) · [X](https://x.com/DAcemogluMIT) · [Nobel Prize facts](https://www.nobelprize.org/prizes/economic-sciences/2024/acemoglu/facts/)
- Marina Mogilko (host), Silicon Valley Girl: [Website](https://marinamogilko.co/) · [YouTube](https://www.youtube.com/@SiliconValleyGirl) · [X](https://x.com/siliconvalleymm) · [Instagram](https://www.instagram.com/siliconvalleygirl/)
- [Erik Brynjolfsson](https://digitaleconomy.stanford.edu/person/erik-brynjolfsson/), the Stanford economist whose study Marina cites on AI's muted economic impact so far
- Earlier episodes in the same run: [Greg Brockman](https://www.youtube.com/watch?v=qy8Gr27yLMk) and [Brian Chesky](https://www.youtube.com/watch?v=iJlyNupMOzA)
