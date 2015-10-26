---
layout: post
title: 'R and other open source tools for Civil Engineering'
categories:
 - R
tags:
 - presentations
---

Open source software has caused a quiet revolution in computing since the release of
the creation of the GPL license by Richard Stallman back in
[1989](https://en.wikipedia.org/wiki/GNU_General_Public_License). Yet it has been slow
to gain ascendency in many areas, including Civil Engineering. This short post discusses this
issue in the context of the uptake of QGIS and R for spatial analysis work, with reference
to a lecture delivered to undergraduate Civil Engineering students at the University of Leeds
(see slides below and as a [stand-alone html page here](http://robinlovelace.net/presentations/pct-pres.html)):

<!--more-->

<iframe src="http://robinlovelace.net/presentations/pct-pres.html" width="900" height="700"></iframe>


What began as a fringe movement within 'hacker' circles has taken over parts of computing the world.
Linux, which provides the backbone of the popular Android smartphone operating system,
is probably the most successful software project ever and owes at least part of its success to its
open source licence. In the world of statistics, there is a clear trend towards open source.
R is outpacing closed source alternatives such as Stata, SPSS and SAS 
[in academic work](http://r4stats.com/2015/03/30/fastest-growing-analytics-2015/) and this
trend looks set to continue in the world of commercial data analysis and 'data science'.

Illustrating this shift in attitude, Hadley Wickham
[recently said](https://www.reddit.com/r/dataisbeautiful/comments/3mp9r7/im_hadley_wickham_chief_scientist_at_rstudio_and/) in response to a question on
whether there was any reason to use SAS or SPSS in the modern world with:
"You have a whole bunch of money you want to get rid of? :)"

Other branches of applied computing have been slower to adopt. Civil Engineering is
one of these areas, in which established products such as
[Bentley's GEOPAK](http://www.bentley.com/en-gb/Products/GEOPAK+Civil+Engineering+Suite/)
[AutoCAD](http://www.autodesk.co.uk/products/autocad-civil-3d/overview) dominating the market.
It is interesting to note that in the Wikipedia page on
[Civil engineering software](https://en.wikipedia.org/wiki/Civil_engineering_software)
there is no mention of open source products, rasing the question: where are they?

In the related field of GIS, the dominance of proprietary software has been challenged by
open source products such as [QGIS](http://www.qgis.org/en/site/), raising the question:
why has this not happened in Civil Engineering. This was one of the questions
that came up in a lecture I delivered at the University of Leeds to 3rd year
Civil Engineering students. I found that although a majority of students had heard of
and used open source software for their everyday life, its update in an academic context was limited.

From a Transport Engineering perspective, there are already options out there in the areas of
general spatial analysis and modelling transport flows. A recently created add-on to
QGIS, [Aequilibrea](http://www.aequilibrae.com/) provides much of the functionality
expected of professional transport planning projects. In addition, an R package I am developing
for transport planning work could be of use to some high-level Transport Engineering applications:
[stplanr](https://github.com/Robinlovelace/stplanr) facilitates the visualisation, analysis and
(via online APIs) network allocation of movement patterns represented by origin-destination
(OD) matrices.

The lack of mainstream software for Civil Engineering creates a huge opportunity for
developers, practitioners and educators in the discipline to be an 'early adopter'
and guide the way forward for making research more accessible and transparent for all.
The list of [Mechanical and Civil Engineering Software](http://sourceforge.net/directory/science-engineering/mechcivileng/os:linux/freshness:recently-updated/)
on the code hosting site SourceForge is an indication of the way things could go.

Furthermore, there are indications that the dynamic and fast-growing users communities
in R and Python could help 'fill the gap' in free software for Engineering.
The [**reservoir**](https://cran.fhcrc.org/web/packages/reservoir/index.html) R package
provides "tools for analysis, design, and operation of water supply storages" while
[strupy](https://pypi.python.org/pypi/strupy/) is a
"structural engineering design python package".

The advantages of these script-based software solutions is their flexibility: learning
a command-line interface such as R provides the potential for taking existing code and
modifying it to your own needs, a common requirement in enginneering applications
of all types. Batch-processing and reproducibility are additional advantages that
allow one's solutions to scale.

In summary, open source software such as R are little-used in Civil Engineering
but have huge potential for growth. Insights from the related realm of GIS
suggest that this may change and that the current crop of products could be
the beginning of a 'phase shift' in software for Civil Engineering.

