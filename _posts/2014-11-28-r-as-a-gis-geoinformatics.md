---
layout: post
title: R, an Integrated Statistical Programming Environment and GIS 
categories:
 - R
tags:
 - open source
 - GIS
 - data
---

This article was originally published in [Geoinformatics](http://www.geoinformatics.com/blog/in-the-spotlight/r-an-integrated-statistical-programming-environment) magazine.

[R](http://cran.r-project.org/) is well known as a powerful, extensible and relatively fast statistical programming language and open software project with a command line interface (CLI). What is less well known is that R also has cutting edge spatial packages that allow it to behave as a fully featured Geographical Information System in the full sense of the word. In fact, some of cutting edge algorithms for image processing and spatial statistics are implemented in R before any other widely available software product ([Bivand et al. 2013](http://robinlovelace.net/r/books/2014/09/09/asdar-review.html)). Sophisticated techniques such as geographically weighted regression and spatial interaction models can be custom built around your spatial data in R. But R also works as a general purpose GIS, with mature functions for performing all established techniques of spatial analysis such as spatial selections, buffers and clipping. What is unique about R is that all these capabilities are found in a single programme: R provides a truly integrated modelling environment.

<!--more-->

## The advantages and drawbacks of R as a GIS

Despite being able to perform the same operations as dedicated GIS software such as ArcGIS and QGIS, R is fundamentally different in the way that the user interacts with it. Not only are most operations complete by typing (e.g. you type “plot(map1)” to plot the data contained in the map1 object), the visualisation stage is different. There is no dynamic canvas which can be used to pan and zoom: instead R only produces visual or other types of output when commanded to do so, using functions such as plot.

Table 1: A summary of the relative merits of R compared with more traditional GIS software.



|Attribute                |Advantages of R                                                                 |Drawbacks of R                                   |
|:------------------------|:-------------------------------------------------------------------------------|:------------------------------------------------|
|User interface           |Command line interface allows rapid description of workflow and reproducibility |Steep learning curve (eased by RStudio)          |
|Visualising data         |Sophisticated and customisable graphics                                         |No dynamic zoomable canvas                       |
|Selecting data           |Concise and consistent method using square brackets (e.g. “map1[x > y,]”)       |Difficult to dynamically select objects from map |
|Manipulating data        |Very wide range of functions through additional packages                        |Only single core processing                      |
|Analysing/modelling data |Integrated processing, analysis, and modelling framework                        |Sometimes more than one solution available       |

## How to get started with spatial data in R

Here is not the place to go into the details of spatial data analysis in R. Instead, we provide a number of resources that will enable rapidly getting up to speed with both R and its spatial packages. Note that when we say “packages” for R, we are referring to specific add-ons, analogous to extentions in ArcGIS and QGIS. The range of add ons is truly vast, as can be seen on the R website: http://cran.r-project.org/web/views/Spatial.html. This diversity can be daunting and it is certainly frustrating when you know that a problem can be solved in several different ways: R teaches you to think about your data and analysis carefully. The most commonly used packages for spatial analysis are probably [**sp**](http://cran.r-project.org/web/packages/sp/index.html) (the basis of spatial functionality in R), **rgdal** (for loading spatial file formats such as shapefiles) and **rgeos** (for spatial analysis). Each is installed and loaded in the same way: **rgeos**, for example, is installed and loaded by typing:

<pre><code>
    install.packages(“rgeos”)
    library(rgeos)
</code></pre>


An introductory tutorial on R as a GIS is the working paper “Introduction to visualising spatial data in R” ([Lovelace and Cheshire, 2014](https://github.com/Robinlovelace/Creating-maps-in-R)). This document, along with sample code and data, is available free online. It contains links to many other spatial R resources, so is a good starting point for further explorations of R as a GIS.

## R in action as a GIS

To demonstrate where R's flexibility comes into its own, imagine you have a large number of points that you would like to analyse. These are heavily clustered in a few area, and you would like to a) know where these clusters are; b) remove the points in these clusters and create single points in their place, which summarise the information contained in the clustered points; c) visualise the output.

![clustering](https://github.com/Robinlovelace/Creating-maps-in-R/raw/master/vignettes/figure/Aggregated_data_for_culters.png)

We will not actually run through all the steps needed to do this in R. Suffice to know that it is possible in R and very difficult to do in other GIS packages such as [QGIS](http://www.qgis.org/en/site/), ArcGIS or even [PostGIS](http://postgis.net/) (another command line GIS that is based on the database language Postgres, a type of SQL): I was asked to tackle this problem by the Spanish GIS service SIGTE after other solutions had been tried.

All of the steps needed to solve the problem, including provision of example data, are provided [online](http://robinlovelace.net/r/2014/03/21/clustering-points-R.html). Here I provide an overview of the processes involved and some of the key functions to provide insight into the R way of thinking about spatial data. 

First the data must be loaded and converted into yet another spatial data class. This is done using the `readOGR` function from the **rgdal** package mentioned above and then using the command `as(SpatialPoints(stations), "ppp")` to convert the spatial object stations into the ppp class from the spatstat package. 

Next the data is converted into a density raster. The value of each pixel corresponds to the interpolated density of points in that area. This is visualised using the `plot` and `contour` functions to ensure that the conversion has worked properly.

The raster image is converted into smooth lines using the `contourLines`. The lines, one for each cluster zone, must then be converted into polygons using the command `gPolygonize(SLDF[5, ])`. `gPolygonize` is a very useful function from the rgeos package which automates the conversion of lines into polygons.

The results are plotted using the rather lengthy set of commands shown below. This results in the figure displayed above (notice the `red` argument creates the red fill of the zones):


<pre><code>
    plot(Dens, main = "")
    plot(lnd, border = "grey", lwd = 2, add = T)
    plot(SLDF, col = terrain.colors(8), add = T)
    plot(cAg, col = "red", border = "white", add = T)
    graphics::text(coordinates(cAg) + 1000, labels = cAg$CODE)
</code></pre>


Finally the points inside the cluster polygons are extracted using R's very concise spatial subsetting syntax:

<pre><code>
    sIn <- stations[cAg, ]  # select the stations inside the clusters
</code></pre>


The code above, translated into English, means “take all the station points within the cluster polygon called cAg and save them as a new object call sIn”.

## Conclusion

The purpose of the article has been to introduce the idea that GIS software can take many forms, including the rather unusual command line interface of the statistical programming language R. Hopefully any preconceptions about poor performance have been dispelled by the examples of converting text into spatial objects and of clustering points. Both examples would be difficult to undertake in more traditional GIS software packages. R has a steep learning curve and should probably be seen more as a powerful tool to use in harmony with other GIS packages for dealing with particularly tricky/unconventional tasks rather than a standalone GIS package in its own right form most users. R interfaces to QGIS and ArcGIS should make this easier, although this solution is not yet mature. In addition to new functionalities, R should also provide a new way of thinking about spatial data for many GIS users (Lovelace and Cheshire, 2014). Yes it has a steep learning curve, but it's a fun curve to be on whether you are on the beginning of the ascent or in the near vertical phase of the exponential function!

## References

Bivand, R. S., Pebesma, E. J., & Gómez-Rubio, V. (2013). Applied spatial data analysis with R (Vol. 747248717). Springer.

Lovelace, R., & Cheshire, J. (2014). Introduction to visualising spatial data in R. National Centre for Research Methods, 1403. Retrieved from http://eprints.ncrm.ac.uk/3295/

Wickham, H. (2014). Tidy data. The Journal of Statistical Software, 14(5). Retrieved from http://vita.had.co.nz/papers/tidy-data.html
