---
title: "OpenAI Measures Productivity by How Loud the Outage Gets"
description: "OpenAI's president says the best sign AI is working is that nobody can work without it. SREs have another name for that."
pubDatetime: 2026-10-01T09:00:00Z
tags: ["ai", "engineering", "reliability", "metrics", "rants"]
draft: true
sourceUrl: "https://marinamogilko.co/episode/qy8Gr27yLMk/"
---

Notes on [Silicon Valley Girl: OpenAI Co-Founder: Start Building With AI Before You Feel Ready](https://marinamogilko.co/episode/qy8Gr27yLMk/), where [Marina Mogilko](https://marinamogilko.co/) talks to [Greg Brockman](https://gregbrockman.com/) (OpenAI co-founder and president, formerly CTO of Stripe), the day after OpenAI launched its Dots agents.

## The 30-Second Reality Check

Greg Brockman's best sign that AI boosts productivity is that OpenAI staff can't work through a two-hour model outage. He calls that "so cool." Your on-call rotation calls it a single point of failure.

## Explain With Pictures

```
  How OpenAI reads it                     How an SRE reads it

  6 months ago:  no model                 6 months ago:  no model
                    │                                       │
                    ▼                                       ▼
  today:  model goes down for 2h          today:  model goes down for 2h
                    │                                       │
                    ▼                                       ▼
  "I can't do my work"                    "I can't do my work"
                    │                                       │
                    ▼                                       ▼
  ✓ productivity is up                    ✗ new hard dependency,
    "It's so so cool"                       no fallback, no runbook,
                                            nobody remembers the old way
```

Same data. Which conclusion you draw depends on whether you're selling the model or getting paged for it.

## 3 Hot Takes & Quotes

**1. Vendor lock-in, presented as a KPI.**

Marina asks whether OpenAI has an internal metric for how better models turn into productivity. He mentions proxy metrics, then gives the one he clearly likes:

> if internally people can't get access to a model, how much they feel upset, and everyone's like, "I can't do my work." And you're like, "Okay, six months ago, you had nothing like this, and now you're saying you can't do your work when you don't have it for two hours?"

Then: "It's so so cool."

When GitHub goes down, plenty of engineering teams can't push, pull or review until it's back. Nobody reports that as proof of how much they love Git. For OpenAI, staff depending on the model is the business model, so fine, enjoy it. But if your team has the same dependency on someone else's API, that's a risk to write down, with a fallback plan, before the two hours turn into a day.

**2. The same channel ran two opposite opinions on token leaderboards, one day apart.**

Brockman, on September 30:

> there was this era of token maxing, where it's just like... throw more tokens at it, which is clearly not a primary objective. But it is a good proxy metric... We have leaderboards.

Brian Chesky, on the [next episode of the same show](https://marinamogilko.co/episode/iJlyNupMOzA/), October 1:

> there were like token leaderboards... that was clearly like a long-term strategy that was not going to work.

One of them sells tokens. One of them pays for tokens. Guess which is which. Brockman also mentions that OpenAI's published research correlates token usage with "lines of code or commits and PRs," which is a sentence that would get you laughed out of most engineering-metrics meetings I've been in, proxy or not.

**3. "A week later they would come back with an answer." That week was the review.**

> when I was at Stripe that we had a data team that you would send an email to, and then a week later they would come back with an answer to that query. And now I just ask the AI

The agent now "issue[s] queries into our data warehouse" for retention curves and market growth. I believe it's faster. But retention queries are exactly where a confident-looking join quietly double-counts users who changed plans, and the usual safety net is an analyst who asks why churn suddenly halved. Some of that week was queueing. Some of it was a person who knew where the bodies were buried in the schema. Brockman doesn't say who checks the agent's SQL.

## The Post-Mortem / Verdict

The practical advice is better than the pitch. His rule for when to automate is the same one he's used for software forever: do it by hand until "you've done it five times," then automate, because that way "that way you keep your finger on the pulse of the problem." He also says small business owners keep the accountability ("the customer either signs up or doesn't"). And the part about durability is right. Products built on "working around limitations in the model" die with the next model, and products built on knowing an industry's stakeholders get better when the model does. That's the most useful thing a model vendor has said about wrapper startups in a while.

Then there's the rest. "You don't want an interface that has buttons and sliders and model pickers... That's not the AI we were promised," from the company whose lineup this month includes GPT-6 Astra, Sol and Luna. "Pretty good at writing software. I don't write software anymore." And for anyone with one free hour this weekend, step one is "sign up for ChatGPT Dots," the agent product his company launched the day before, which needs a Pro or Business Premium plan.

Meanwhile Marina mentions every episode still takes her team at least 40 hours. He suggests an app that handles everything after the interview. Nobody points out that the interview prep app she demoed was already an app that handles everything before it.

## Links & References

- [OpenAI Co-Founder: Start Building With AI Before You Feel Ready | Greg Brockman](https://marinamogilko.co/episode/qy8Gr27yLMk/), Silicon Valley Girl Podcast, 30 Sep 2026
- Greg Brockman (guest), OpenAI co-founder and president: [Website](https://gregbrockman.com/) · [X](https://x.com/gdb) · [GitHub](https://github.com/gdb)
- Marina Mogilko (host), Silicon Valley Girl: [Website](https://marinamogilko.co/) · [YouTube](https://www.youtube.com/@SiliconValleyGirl) · [X](https://x.com/siliconvalleymm) · [Instagram](https://www.instagram.com/siliconvalleygirl/)
- [Brian Chesky: People Who Know What to Build With AI Will Pull Ahead](https://marinamogilko.co/episode/iJlyNupMOzA/), the next day's episode with the opposite take on token leaderboards
- [OpenAI launches Dots, its bubbly agentic avatar](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/), TechCrunch, 29 Sep 2026
