---
title: "Docker in Containerland™ Is Still Just a Box"
pubDatetime: 2019-05-31T20:00:00Z
description: "Docker puts your app in a box. Kubernetes moves the boxes. Everything else is YAML."
tags:
  - docker
  - kubernetes
  - containers
  - devops
---

_Originally published in May 2019. Rewritten in October 2026, with more sarcasm and fewer exclamation marks._

![Containerland](@/assets/images/containers.jpg)

## The 30-Second Reality Check

Docker puts your app and its dependencies in a box that runs the same anywhere. [Kubernetes](https://kubernetes.io/) moves the boxes when a machine dies. Most of the rest of "cloud native" is YAML, conference talks and a wall of logos.

## Explain With Pictures

```
  One machine (docker compose)        Many machines (Kubernetes)

  +---------------------------+       +---------+  +---------+  +---------+
  |  [ web ]  [ db ]  [cache] |       | [web]   |  | [web]   |  |  [db]   |
  |                           |       | [cache] |  |         |  |   ^     |
  |  "docker compose up"      |       +---------+  +----X----+  +---|-----+
  +---------------------------+                         |           |
                                          node dies --> +-- [web] --+
  Your laptop. Happy.                   Kubernetes moves the box. You sleep.
```

The box is easy. The hard part is everything about _where the boxes run_, and that's the part you pay for in complexity.

## 3 Hot Takes & Quotes

**1. Half of my 2019 advice aged well.**

> I would recommend to use docker-compose for local development and Swarm/Kubernetes in production. (me, 2019)

Compose for local dev: still right. "Swarm/Kubernetes" in production: the industry has since voted, and it wasn't for the slash. [Swarm](https://docs.docker.com/engine/swarm/) still exists, but Kubernetes became the default for orchestration. Hedging between two tools in a recommendation is how you know it was written before the war ended.

**2. Kubernetes is still a beast. You just don't need to ride all of it.**

> It is a beast, but it's a glorious beast. You don't need to use all of it but you are well served in using it and learning it. (me, 2019)

Still true, with one upgrade: most teams don't need to _run_ the beast at all. If your whole product is three containers and a database, a managed platform beats a hand-rolled cluster. You don't get extra credit for operating your own control plane.

**3. The sneakernet never dies.**

> you can do a docker save/ docker load and transfer via ssh/scp over your internal network (me, 2019)

In locked-down networks, the most advanced container workflow in the world still ends with someone copying a tarball over SSH. Every "secure environment" eventually rediscovers the floppy disk.

## The Post-Mortem / Verdict

Docker turned "works on my machine" into "ships my machine", which turned out to be good enough to change the industry. Learn the box first. Reach for Kubernetes when you have more boxes than you can babysit, not because a job ad said so.

## Links & References

- [Docker turns 6](https://web.archive.org/web/20190917071245/https://blog.docker.com/2019/02/22757/), Docker blog, 2019 (archived copy; the original link is gone)
- [Docker Compose documentation](https://docs.docker.com/compose/)
- [Docker Swarm mode documentation](https://docs.docker.com/engine/swarm/)
- [Kubernetes](https://kubernetes.io/)
