---
layout: post
title:  Using CycleStreets.net in the Propensity to Cycle Tool
date: "2016-12-19 10:35:48"
published: false
tags: [R, maps]
bibliography: ~/repos/foss4t/references.bib
---

Today was released the [paper](https://www.jtlu.org/index.php/jtlu/article/view/862/824) that describes the Propensity to Cycle Tool (PCT) and some of the thinking behind it [@lovelace_propensity_2016].

## What is the Propensity to Cycle Tool?

For those new to the PCT, it's an online tool for helping to decide where to prioritise cycling policies such as new cycle paths. It lives at http://www.pct.bike and the context of its development is explained in the accompanying video on that page. This article reports how the tool itself works and how it uses data from CycleStreets.net.

The PCT is best understood by using it to explore current cycling levels, at regional, area, desire line, route and route network levels. We will take a look at how the PCT works at each of these levels, after a brief look at the scenario results at the regional level (the senarios are described in more detail in the [paper](https://www.jtlu.org/index.php/jtlu/article/view/862/824)).

Under the 2011 Census scenario, the PCT represents levels of cycling to work based on the Census. This is a reasonable proxy for levels of utility cycling overall. We used origin-destination (OD) data from the Census as the basis of the PCT as this is best publicly available dataset on English travel patterns. The input data is described in the [paper](https://www.jtlu.org/index.php/jtlu/article/view/862) and can be freely downloaded from the official http://wicid.ukdataservice.ac.uk/ website.

### The regional picture and scenarios

The first thing the user sees on the front page is a map of England, broken into 44 regions:

![plot of chunk unnamed-chunk-1](//home/robin/Pictures/regions1.png)

We used deliberately large regions because successful cycling plans should be strategic and joined up, covering both large areas and large spans of time. This discourages the stop-start investment plans that have typified funding for active travel.

By hovering over different regions, the user can see what the current level of cycling to work is. We can discover that West Yorkshire has a low current level of cycling to work, 1.3% in the 2011 census, and that Cambridgeshire has a relatively high (but low by Dutch standards) level of cycling of 9.7%.

An exciting feature of the PCT is its ability to allow the user to imagine 'cycling futures'. This can be seen on the front page map by clicking on the different scenarios (set to Census 2011 by default). We can see, for example, that under the Government Target to double cycling levels by 2025, West Yorkshire's level would rise to 3.3% (more than a doubling) whereas Cambridgeshire would see cycling levels grow to 13.7% (a larger rise in absolute terms):

<img src="//home/robin/npct/pct/figures/regions2.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" width="50%" /><img src="//home/robin/npct/pct/figures/regions3.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" width="50%" />

Under the Go Dutch scenarios, these regions would see 23.1 and 13.5% of people cycling to work, respectively. This represents a huge leveling-out of cycling levels across the country, but still highlights the fact that some regions have higher cycling potentials than others, due to average trip distances and levels of hilliness.

## Cycling levels at the area level

To launch the PCT for a region, click on it.  Try clicking on West Yorkshire. You should be presented with the following image, which shows the area-based level of cycling to work from the 2011 Census. (When using the PCT, it is worth remembering that the visualisations work for every scenario.)

![plot of chunk unnamed-chunk-3](//home/robin/npct/pct/figures/west-yorkshire-front.png)

This shows that West Yorkshire has very low levels of cycling to work, hovering around 1% to 2% in most places. This suggests strongly that the region has low levels of utility cycling overall (despite the successes of the region's sport cyclists). There is a cluster of zones with a higher level of cycling to the north of Leeds city centre (around Headingly) but even there the percentage of people cycling as their main mode of travel to work does not exceed 5%.

## Cycling potential at the desire line level

This is all useful information, especially when we look at how the cycling potential could shift in the future. However, it provides little information about where current and future cyclists actually go. This is where the desire line level can be useful. This can be selected by clicking on the Straight Lines option from the Cycling Flows dropdown menu. The results (zoomed in for Leeds) are shown in the figures below (see Figure 3 in the paper).

![plot of chunk unnamed-chunk-4](//home/robin/npct/pct/flow-model/od-data-leeds.png)

![plot of chunk unnamed-chunk-5](//home/robin/npct/pct/figures/leeds-desire-godutch.png)

What the above figures show is that as the level of cycling increases in a city, the spatial distribution of cycling can be expected to change. Under current conditions (be they related to socio-demographics or infrastructure or other factors), cycling in Leeds is dominated by the travel corridor to the north of the city centre. Yet there are clearly many short trips taking place from the south into the centre, as illustrated by the high cycling potential south of the city under the Go Dutch scenario.

## Allocating cycling potential to the route network

This is where CycleStreets.net comes into play...
