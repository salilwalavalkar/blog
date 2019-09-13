---
layout: post
title:  "Breaking the CAP theorem - Google Spanner"
date:   2019-09-12 20:00
description: >-
  Why Google Spanner is advertised as "breaking the CAP theorem" ?
tags: [google spanner, google, cap theorem]
---


A few days back, I listened to this good podcast episode by [Deepthi Srivastava](https://twitter.com/TheDeepti) on [Google Spanner](https://cloud.google.com/spanner/)   
  
<blockquote class="twitter-tweet"><p lang="et" dir="ltr">Google Spanner with Deepti Srivastava <a href="https://twitter.com/TheDeepti?ref_src=twsrc%5Etfw">@TheDeepti</a> <a href="https://twitter.com/googlecloud?ref_src=twsrc%5Etfw">@GoogleCloud</a> <a href="https://twitter.com/GCPcloud?ref_src=twsrc%5Etfw">@GCPcloud</a> <a href="https://twitter.com/googledevs?ref_src=twsrc%5Etfw">@googledevs</a> <a href="https://t.co/ygoBhUTJ0z">https://t.co/ygoBhUTJ0z</a> <a href="https://t.co/6TjPfsLrOO">pic.twitter.com/6TjPfsLrOO</a></p>&mdash; Software Daily (@software_daily) <a href="https://twitter.com/software_daily/status/1171348845323849728?ref_src=twsrc%5Etfw">September 10, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I had looked into Spanner some time back for a POC where I was trying to find out how it works with the CAP Theorem. Google has some good [whitepapers](https://cloud.google.com/spanner/docs/whitepapers) on the topic.

The [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem) of distributed computing states that there are three guarantees to consider with distributed state systems;

-   **Consistency**: all clients have the same, most recent data view
    
-   **Availability**: all clients can read and write, regardless of data recency
    
-   **Partition Tolerance**: the system's guarantees hold even in the face of network faults between each distributed system node
    

And, more importantly, it's physically impossible for a distributed system to have all three of these; at best a perfectly designed system can have two, and most systems are not perfectly designed.

And, finally: No distributed state store is "safe" from partition tolerance. What the CAP theorem actually means in practice is that a truly distributed state system can choose:

-   CP: In the face of a partition, remain consistent. Return an error instead of trying to read or write.
    
-   AP: In the face of a partition, remain available. Return the most recently written data that the node the client queries knows about. For writes, try to reconcile them best the system can after the partition is resolved.
    

Basic deployments of RDBMS are, usually, CA. So, they're not actually distributed systems, because everything goes out the window in the face of a network partition; you have a master node with slave replicas, and if a partition happens between the master and slaves, the slaves might elect a new master, so your system enters a "split brain" scenario where its not clear which one is right.

Any RDBMS worth its salt has modes it can be deployed in which aren't CA. Depending on the RDBMS you can select CP or AP. This is also how pretty much every other database operates. Mongo is CP; it will prefer consistency. Cassandra is AP; it will prefer availability, and possibly return stale data.

Spanner is a globally distributed SQL database. Well, technically it isn't really SQL due to some minor constraints, but in practice it is SQL.

In some of Google's marketing, Spanner is advertised as "breaking the CAP theorem", because it can reliably offer consistency and availability in the face of network partitions, despite being highly distributed. But they aren't being deceitful; they're upfront about its real technical limitations: It is technically CP, with an availability guarantee in the face of partitions that is so close to 100% that it shouldn't matter even at Google's scale.

The reason for this is less about software and more about hardware. In effect, they say that because Spanner runs on their internal, redundant, global private network, network partitions are exceedingly rare. Moreover, some of the core design decisions of Spanner rely on all nodes having a highly consistent internal clock. So even in the face of true network partitions, there are decisions nodes can make based on the globally consistent clock which push the availability statistics even higher.