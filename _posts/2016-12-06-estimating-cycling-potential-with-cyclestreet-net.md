---
layout: post
title:  Estimating cycling potential with CycleStreet.net
date: "2016-12-06 01:21:14"
published: true
tags: [example1, example2]
---

Today was released the [paper](https://www.jtlu.org/index.php/jtlu/article/view/862/824) that describes the Propensity to Cycle Tool (PCT) and some of the thinking behind it.

There are many things to say about the PCT, from the methods that underly it to evidence-based policy. This post focusses on just one aspect of the PCT, however: its use of CycleStreets.net to convert straight travel desire lines into wiggly paths on the road network that someone cycling could plausibly take.

Before saying something about the routes themselves it's worth taking a step back to look at the underlying data behind the PCT. The PCT relies on orgin-destination (OD) data. That is simply data in the following form:


| origin| destination|  V1| V2|
|------:|-----------:|---:|--:|
|      1|           2| 100|  3|
|      1|           3|  50|  5|

What this example OD table means is that 100 units of 'V1' and 3 units of V2 travel between zone 1 and zone 2. There is also movement represented between Zone 2 and 3.

Now, imagine that V1 represents the total number of people travelling between the origin and destination and that V2 represents the number who regularly cycle. That is the basic input dataset that we are using as an input into the PCT. We use 2011 OD data on travel to work, because that is the most

