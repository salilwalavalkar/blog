---
title: "Token Leaderboards Are Dead. Long Live the Feature Count."
description: "Airbnb's CEO retired the dumbest AI metric of the year and replaced it with the second dumbest."
pubDatetime: 2026-10-02T09:00:00Z
tags: ["ai", "engineering", "metrics", "product", "rants"]
draft: true
sourceUrl: "https://www.youtube.com/watch?v=iJlyNupMOzA"
---

Notes on [Silicon Valley Girl: Brian Chesky: People Who Know What to Build With AI Will Pull Ahead](https://www.youtube.com/watch?v=iJlyNupMOzA), where [Marina Mogilko](https://marinamogilko.co/) finally gets [Brian Chesky](https://x.com/bchesky) (co-founder and CEO of Airbnb) on the podcast, seven years after chasing him down at LAX.

## The 30-Second Reality Check

Brian Chesky says chat is the wrong interface for AI and token leaderboards were a mistake. Both points are true. His replacement metric, 80% more features shipped, is the same mistake with a nicer dashboard.

## Explain With Pictures

```
  Start of 2026              Then                           Now
  ─────────────              ────                           ───
  "You got to use AI"   ──▶  "Wait, why are we        ──▶  "We look at product
                              spending so much              velocity"
  token leaderboards          money on AI?"
  (shame the low                                            features shipped: +80%
   token users)                                             "are they high quality
                                                             and successful?"
                                                                    │
                                                                    ▼
                                                          "we have metrics for that"
                                                          (not shown on screen)

  measure inputs ──▶ people inflate inputs
  measure outputs ──▶ people inflate outputs   (Goodhart has entered the chat)
```

## 3 Hot Takes & Quotes

**1. Counting features is token maxing with extra steps.**

Chesky gets the first half exactly right:

> there were like token leaderboards. That might have been a good thing to do for a couple months just to make sure people were using AI, but that was clearly like a long-term strategy that was not going to work.

Then the new number: "we're shipping 80% more features than a year ago. Most of it's because of AI." Things that used to take a year now take weeks.

This is Goodhart's law with a fresh coat of paint. Measure a team on tickets closed and the tickets get smaller. Nobody has to lie, they just split the work, because that's what the number asks for. Count features and you will get more features, and some of them will be laundry pickup in a city where nobody wanted laundry pickup. To be fair, he does add "are they high quality and are they successful?" and says Airbnb has metrics for that. I'd have liked to hear those metrics instead of the 80%.

**2. "A jet engine on the back of a bicycle" is the best description of chat UIs I've heard.**

> a lot of entrepreneurs are trying to fit this technology that's the most powerful technology in human history into a messaging platform. It's like putting a jet engine on the back of a bicycle.

His reasoning holds up for travel. The average booking is three people. You're comparing ten homes, one has a pool, one has a barbecue, one's cheaper, and you want to toggle a filter and watch the results change. A text box that answers in paragraphs is bad at all of that. He also separates the two ideas people keep mashing together:

> A chatbot is a user interface... because most agents are chatbots, we conflate the two.

Airbnb's own answer is an AI search toggle that is, in his words, "an interface that wasn't a chatbot, but that felt chat-like." So, a chatbot. With filters. That's actually fine, and it's more honest product thinking than most AI launch decks I've seen.

**3. "The ultimate democracy" and "the gap is getting bigger" were said about the same tools, about forty seconds apart.**

> AI is the ultimate democracy. The tools that Airbnb has is the tools every company in the world has.

Then:

> AI is like an amplifier. It makes the good people better and the people that weren't as good, it's less of a multiplier for them.

Both are probably true, and he doesn't seem bothered that they pull in opposite directions. Everyone gets the same Codex and Claude Code. The people who already had taste, judgment and a sense of "should we even build this" get much further with it. That's a democracy the way a public gym is a democracy. Same equipment for everyone, and the strong people get stronger fastest.

## The Post-Mortem / Verdict

The bit the video's timestamp points at is the idea-volume stuff, and it's the most useful part. Linus Pauling's line, "the best way to have a good idea is to have a lot of ideas." A notebook, about a thousand words a day, no editing. At the end of each day he bolds the five to ten lines that jump out, and once a month an AI reads only the bolded lines and looks for patterns. Good ideas "haunt you like ghosts" and keep coming back. That's a real workflow you could copy tomorrow.

The numbers get loose, though. "A hundred thousand ideas a year, and I think 99,000 are really bad" becomes 30,000 a year about a minute later, once he does the arithmetic out loud. And "technology doubles every year for 10 years, that's a thousand X" turns into "the beginning of a thousand-year cycle" two sentences later, on the way to "there's going to be 50 more Anthropics, maybe 100." Thousand-x and thousand years are different units, Brian.

Also in the episode: attention span is "commensurate with screen size," which is why you don't leave an IMAX for the bathroom. And a new Airbnb feature that shows where all your friends are traveling this summer. Some of us would call that a threat model.

The nicest moment is the last one. The CEO of a $95 billion company admits he was "intimidated to try Claude code" and got an employee to tutor him. Every engineer who has sat with an exec and walked them through their first terminal session is nodding.

## Links & References

- [Brian Chesky: People Who Know What to Build With AI Will Pull Ahead](https://www.youtube.com/watch?v=iJlyNupMOzA), Silicon Valley Girl on YouTube, 1 Oct 2026
- Brian Chesky (guest), co-founder and CEO of Airbnb: [X](https://x.com/bchesky) · [LinkedIn](https://www.linkedin.com/in/brianchesky/) · [Instagram](https://www.instagram.com/bchesky/)
- Marina Mogilko (host), Silicon Valley Girl: [Website](https://marinamogilko.co/) · [YouTube](https://www.youtube.com/@SiliconValleyGirl) · [Instagram](https://www.instagram.com/siliconvalleygirl/)
- [Airbnb Newsroom](https://news.airbnb.com/), for the AI search, services and travel-graph announcements
