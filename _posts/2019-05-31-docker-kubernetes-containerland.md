---
layout: post
title:  "Docker in Containerland™"
date:   2019-05-31 20:00
description: >-
  It's all a simple box
tags: [docker, kubernetes, containers, devops]
---

![Containerland](../../../images/containers.jpg)

Docker recently [turned 6](https://blog.docker.com/2019/02/22757/). I have been using it for a few years now and have followed its evolution. It does take a bit of time to wrap your head around it. But once you get a basic understanding you will start using it for all your future deployments.

#### So, what is Docker?
Docker is a way to put your application and all of its dependencies in a box (or container). Move the box from one machine to another and the app runs since it’s all contained in the box.

Some apps are complex and depend on other apps. For instance, a web server and a database. The web server and all its dependencies are in a box. The database and all its dependencies are in another box. You can either start these boxes independently or more easily use a compose file and start them in a choreographed manner. More complex apps may have 4 or 5 boxes. Using a single command with compose is more consistent and simpler than 5 complex commands.

Imagine now that you have multiple physical servers to run these apps. If a server fails you can go figure out which boxes were running there or you can let the software ([Swarm](https://docs.docker.com/engine/swarm/), [Kubernetes](https://kubernetes.io/), etc) figure it out for you.

Note: box == container == application in this example.

#### What about running in production?
I would recommend to use docker-compose for local development and Swarm/Kubernetes in production. Compose works fine for single machines, and there’s nothing wrong with using it in small scale production but once you move to multiple machines, that’s when you need container orchestration. Docker Swarm does that, but it’s not very sophisticated. It will take a compose file, so it’s an easy move.

[Kubernetes](https://kubernetes.io/) really came before swarm. Google basically took Borg and improved it for Kubernetes. It is a beast, but it’s a glorious beast. You don’t need to use all of it but you are well served in using it and learning it. If you want to translate those docker skills into devops, kubernetes is it.

Rewriting a docker compose file for kubernetes isn’t a big deal. Once you know why every line is there in the compose file, you’ll know how to add them to your kubernetes configs.

#### How do I share the docker images within a secure environment?
You might not be able to push the images to a centralized server in a secure environment. However to test out with colleagues, you can do a docker save/ docker load and transfer via ssh/scp over your internal network or use a subversion repo.