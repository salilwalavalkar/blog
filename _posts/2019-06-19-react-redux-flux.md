---
layout: post
title:  "Why Redux won the Flux Wars"
date:   2019-06-19 20:00
description: >-
  A short story on the evolution of Redux for state management.
tags: [react, redux, flux wars, state management]
---
<p align="center"><<img src="../../../images/flux.png" alt="Flux" width="100" height="100"/></p>

A little history lesson first. [React JS](https://reactjs.org/) was introduced in 2014 right in the middle of Flux Wars. The [Flux Pattern](https://facebook.github.io/flux/docs/overview.html) was a recommended pattern for all state management. Obviously, many developers created their own libraries of the pattern and touted them as best. This was in gist the Flux Wars.

<p align="center"><img src="../../../images/redux.png" alt="Redux" width="100" height="100"/></p>

[Redux](https://redux.js.org/) won the war around 2015-2016 due to its simplicity and leadership of [Dan Abramov](https://egghead.io/courses/getting-started-with-redux) and there was peace. Long live the King!!

<p align="center"><img src="../../../images/peace.png" alt="Peace" width="100" height="100"/></p>

In 2017-2018 the new [React Context API](https://reactjs.org/docs/context.html), [Apollo Client](https://www.apollographql.com/docs/react/) and a few alternatives were introduced which started solving problems that Redux was originally built for. Since Redux had gained so much dominance it was an easy target for people to say it was finished.

<p align="center"><img src="../../../images/pitchforks.jpg" alt="Pitchforks" width="640" height="480"/></p>

**So, should I use Redux?**

Redux is a bit overkill for simple data management and UI needs which is the requirement for most of the projects. If you introduce a lot of formal architecture at this level, it will probably just overcomplicate your code and dependencies for no real benefit.

At some point, your data and/or interactions will become complicated enough that you do want to be more systematic about your architecture. At this level, maybe more a formal structure around Redux (or something else) becomes helpful for you.

**But what if I use Redux and it goes out of fashion?**

I remember when the concept of AJAX was up-and-coming. My Subversion account (Github was just gaining steam) had so many JQuery components that were cutting edge in their day.

If you’re serious about building an application that people use don’t worry too much about what’s popular now because it’s inevitably going to change soon—very soon.

If you’re very successful and people care about what you build, you can refactor to whatever’s new later (assuming feature development doesn’t take priority). If you’re not, you’ll learn a lot and use a different toolset for your next project.

Today’s pattern will be different tomorrow. Just focus on building things that people actually care and they won’t mind what technology, pattern, or tool you use.
