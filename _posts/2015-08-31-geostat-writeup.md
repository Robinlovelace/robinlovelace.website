---
layout: post
title: 'GEOSTAT 2015: a write-up'
categories:
 - R
tags:
 - open source
 - GIS
 - maps
---

The week before last I attended the [GEOSTAT](http://geostat-course.org) summer school in Lancaster. GEOSTAT is an annual week-long meeting devoted to 'geostatistics' (or 'spatial statistics' - we'll come on to the difference subsequently).

Having seen the impressive range of materials from previous 'GEOSTATs', I was greatly looking forward to the event as a hub of learning, research and community-building, organised by people at the cutting edge of the field. I was not disappointed. The purpose of this post is to say 'heads up' to people who are interested, not only in the field of geostatistics but also in free and open source software for geospatial applications ('[FOSS4G](http://foss4g.org/)') and research-focussed communities using and developing R more widely. For educators, this post also serves to highlight a cache of frankly amazing teaching materials that lie, largely undiscovered, online free for all to use.

<!--more-->

Geostatistics vs Spatial Statistics
-----------------------------------

The introductory talk was by Professor Pete Diggle from the host institution of the University of Lancaster. He delivered a sweeping overview of the field, tracing the development of spatial statistics from its historical antecedents such as [Buffon's needle](https://en.wikipedia.org/wiki/Buffon's_needle) through agricultural field trials at the famous [Rothamsted](https://en.wikipedia.org/wiki/Rothamsted_Research) site to its eventual merging with geostatistical methods developed by the mining industry. The final stage of this fascinating story was the incorporation of spatial statistics into wider statistical theory. The entire roller-coaster ride can be heard in an audio recording that I made of the lecture and read in chapter 1 of *The Handbook of Spatial Statists* which can be [read online](https://books.google.co.uk/books?id=Xf4leslPDzsC&printsec=frontcover#v=onepage&q&f=false) (although nothing beats the physical book) (Gelfand et al. 2010).

The evolving landscape of R's spatial ecosystem
-----------------------------------------------

The next wide-ranging and agenda-setting introductory lecture was by Roger Bivand, a veteran R developer and author of the seminal Applied Spatial Data Analysis with R (Bivand, Pebesma, and Gómez-Rubio 2013). His [slides](http://geostat-course.org/system/files/geostat_talk_150817.pdf) provide the best up-to-date overview of the state of R's spatial capabilities available, to the best of my knowledge. Roger has a deep understanding not only of R's spatial technology but also of its politics. This was illustrated by his commentary on the shifting attitude of ESRI towards R's spatial capabilities, with reference to [`r-bridge`](https://github.com/R-ArcGIS/r-bridge), a mostly open source project allowing ArcMap users to call R scripts from within this popular proprietary GIS. Dangers for the future are fragmentation within R's spatial community and the heavy reliance on a few veteran programmers while much of R's core code-base is older than the latest generation R users!

Geostatistical models in R
--------------------------

Despite not attending this side of the parallel stream during day 2 I can recommend the [resources that were provided](http://geostat-course.org/node/1284). Patrick Brown is an expert in spatial statistics and his tutorials and [worked examples](http://pbrown.ca/teaching/geostat2015/) could be gold dust for anyone who wants to use Bayesian inference to understand spatial processes.

Brown (2015) provides a well-written academic companion to these excellent teaching materials, from the academic literature.

The spacetime package
---------------------

This session described methods for representing, processing and visualising spatio-temporal data, i.e. that has space and time dimensions. In addition to the 'core' **spacetime package** developed by the lecturer Edzer Pebesma, the online tutorial described a number of packages that interact with spacetime to provide an impressive range of functionality. The following command, for example, subsets all the data in the spacetime object that from 2005 to 2011:

    rural[sel,"2005::2011"]

This and many other examples of spacetime's functionality are provided for free on [Edzer's GitHub repository](https://github.com/edzer/geostat/blob/master/Lancaster.Rmd).

Area data with R
----------------

Theresa Smith provided a fantastic introduction to areal data, whereby each unit - typically administrative zones - represents a contiguous tract of land. The discussion moved swiftly from the theory into practical application using **spdep** and **INLA** packages. The materials associated with this session are [online](http://geostat-course.org/node/1287), providing a valuable resource to people struggling to make sense of areal data.

Reproducible geography
----------------------

Chris Brunsdon provided an off-the-cuff tutorial on **knitr** for making geographical research more accessible and easy to replicate. This reproducible ethic can be seen in his [teaching materials on Geographically Weighted Regression (GWR)](http://geostat-course.org/node/1288) and a recently published [academic paper (Brunsdon 2015)](http://phg.sagepub.com/cgi/doi/10.1177/0309132515599625).

The summer school vibe
----------------------

There were many other highlights to the conference, many of which were not related to R. The conference had an excellent vibe and everyone to my knowledge had a great time. There were several social events (including an orienteering challenge around Lancaster!) which were fantastic, not to mention the provision of sufficient food, drink and caffeine to keep us all working hard. Instead of trying to do justice to all these things I'll focus on two: the GEOSTAT *challenges* and the ride home.

### Challenges

To test our newly acquired skills the lecturers set a couple of challenges for the students: the *spatial prediction* and *visualisation* challenges. The spatial prediction challenge was to estimate the rainfall at specific points at specific times, based on a training dataset. The visualisation challenge was to visualise the data in a way that showed patterns in the data in space, time and altitude.

A highlight for me was winning the visualisation challenge this this entry (thanks to assistance from Chris Brunsdon):

<iframe src="http://geo8.webarch.net/robin/vizcomp/" height="800" width="800">
</iframe>
More information on this entry can be seen in [this mini article](http://rpubs.com/RobinLovelace/102391), which describes the use of the excellent **RcppRoll** package with reference to the following image.

[![](https://dl.dropboxusercontent.com/u/15008199/img/rollmean.png)](http://rpubs.com/RobinLovelace/102391).

The ride home
-------------

Another highlight was the bicycle ride home back to Leeds, which passed through the glorious [Bowland Forest AONB](http://forestofbowland.com/). It even passed through [Dunsop Bridge](https://en.wikipedia.org/wiki/Dunsop_Bridge), which (according to BT at least!) is the centroid of Great Britain. Here's an R challenge: test BT's assertion ([illustrated here](https://plus.google.com/+RobinLovelace/posts/U9zz8F14ACH))that this really is the geographic centroid of Great Britain, using only R code.

Following the R fervour, I even planned this route in R, using the following code and which uses the [**stplanr**](https://github.com/Robinlovelace/stplanr) I'm developing, leading to the map illustrated below:

    devtools::install_github("robinlovelace/stplanr")
    library(stplanr)
    r <- route_graphhopper(from = "Lancaster University", to = "Leeds")
    library(leaflet)
    leaflet() %>% addTiles() %>% addPolylines(data = r)

<iframe src="http://rpubs.com/RobinLovelace/106222" width="600" height="400">
</iframe>
Resources
---------

Other than the links provided above, there are a number of additional excellent resources for teaching R as a free and open source command-line Geographical Information System (GIS). In addition to the highly recommended [GEOSTAT website](http://www.geostat-course.org/2015), [gis.stackexchange](http://gis.stackexchange.com/) and the [r-sig-geo](https://stat.ethz.ch/mailman/listinfo/r-sig-geo) mailing group, these are, in roughly increasing order of difficulty:

-   [*Introduction to visualising spatial data*](https://github.com/Robinlovelace/Creating-maps-in-R) is an introductory tutorial by myself, James Cheshire and others (Lovelace and Cheshire 2014) which aims to help people who are just getting started with R and spatial data. It has numerous challenges for all abilities and covers a range of approaches for creating maps in R, including R's base graphics, [ggmap](https://github.com/dkahle/ggmap), [tmap](https://github.com/mtennekes/tmap) and [leaflet](https://github.com/rstudio/leaflet) for creating online interactive maps, such [this](http://geo8.webarch.net/robin/vizcomp/) (described subsequently).

-   [A Practical Guide to Geostatistical Mapping](http://www.lulu.com/shop/tomislav-hengl/a-practical-guide-to-geostatistical-mapping/ebook/product-17389015.html) by GEOSTAT lecturer Tom Hengl is free E-Book outlining powerful geostatistical methods and visualisation techniques (focussed Google Earth), primarily in R.

-   [Analysis of spatial data in R](ftp://ftp.bgc-jena.mpg.de/pub/outgoing/mforkel/Rcourse/) provides an up-to-date overview of spatial data analysis in R from a Biogeochemistry perspective. It contains worked examples, challenges and solutions.

-   The [Handbook of Spatial Analysis Using R, 2nd Edition](https://cran.r-project.org/web/packages/HSAUR2/) is a comprehensive yet seemingly little-known textbook and R package dedicated to using R for a wide range of spatial applications. It contains a number of example datasets that may be of interest.

-   [CRAN's Spatial Task View](https://cran.r-project.org/web/views/Spatial.html), maintained by Roger Bivand, provides a wealth of links and information about R's incredible and growing range of spatial packages.

Acknowledgements
----------------

I would like to thank everyone involved for making GEOSTAT 2015 happen and really look forward to GEOSTAT 2016. Barry Rowlingson was central to making it happen so I salute him and Tom Hengl for herding all us cats towards Geo R Spatial Enlightenment. Until next year!

References
----------

Bivand, Roger S, Edzer J Pebesma, and Virgilio Gómez-Rubio. 2013. *Applied spatial data analysis with R*. Vol. 747248717. Springer.

Brown, Patrick E. 2015. “Model-Based Geostatistics the Easy Way.” *Journal of Statistical Software* 63 (12): ??—–?? <http://www.jstatsoft.org/v63/i12>.

Brunsdon, C. 2015. “Quantitative methods I: Reproducible research and quantitative geography.” *Progress in Human Geography*. doi:[10.1177/0309132515599625](http://dx.doi.org/10.1177/0309132515599625).

Gelfand, Alan E, Peter Diggle, Peter Guttorp, and Montserrat Fuentes. 2010. *Handbook of spatial statistics*. CRC press.

Lovelace, Robin, and James Cheshire. 2014. “Introduction to visualising spatial data in R.” *National Centre for Research Methods Working Papers* 14 (03). London: National Centre for Research Methods; Comprehensive R Archive Network. [https://github.com/Robinlovelace/Creating-maps-in-R http://eprints.ncrm.ac.uk/3295/](https://github.com/Robinlovelace/Creating-maps-in-R http://eprints.ncrm.ac.uk/3295/).
