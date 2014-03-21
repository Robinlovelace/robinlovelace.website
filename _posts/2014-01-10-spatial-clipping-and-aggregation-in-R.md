---
layout: post
title: Spatial clipping and aggregation in R
category:
- R
tags:
- spatial data
 - R
- visualisation
- open source
---

A common task in GIS is comparing the spatial extent of one layer with another. 
Say you have a load of points, some of which overlay a polygon layer. You are only interested 
in the points that *intersect* with the points. What do you do? Also, how can you aggregated-up
the values contained in the points to correspond with the polygons. 
These are complex computational problems. In this post 
we will see how recent updates to R's `sp` package make
the solution surprisingly intuitive and incredibly terse.

![Input data for spatial clipping/aggregation](http://robinlovelace.net/figure/Sampling_and_plotting_stations.png)

<!--more-->

# Loading the data

All of the data (and more) for this can be downloaded from the 
tutorial page on [GitHub](https://github.com/Robinlovelace/Creating-maps-in-R).
To make this tutorial reproducible on any computer, we will download each input dataset 
from within R using `download.file`.





```r
library(sp)
download.file("http://robinlovelace.net/data/lnd.RData", destfile = "lnd.RData")
download.file("http://robinlovelace.net/data/stations.RData", destfile = "stations.RData")
load("lnd.RData")
load("stations.RData")
plot(stations[sample(1:nrow(stations), 500), ])
plot(lnd, add = T, col = "red")
```

![plot of chunk Input data](http://robinlovelace.net/figure/Input_data.png) 


# Spatial subsetting (clipping)

As the plot demonstrates, the stations are far more exentsive than polygons of 
central London. We must therefore clip them. Doing this manually would take 
much time - we'd have to interrogate the coordinates of each point to see 
whether or not it falls within one of the polygon boundaries. 

Fortunately with have the `over` function from the `sp` package to make this 
operation more terse:


```r
sel <- over(stations, lnd)
stations <- stations[!is.na(sel[, 1]), ]
```


As if that weren't enough, the developers of `sp` have integrated 
spatial subsetting into R's main index system with the square brackets.
Because this is a common procedure it is actually possible 
to perform it with a single line of code: 


```r
stations <- stations[lnd, ]
plot(stations)
```

![plot of chunk The clipped stations dataset](http://robinlovelace.net/figure/The_clipped_stations_dataset.png) 


As the figure shows, only stations within the London borroughs are now shown.
All that was needed was to place another spatial object in the row 
index of the points (`[lnd, ]`) and R automatically understood that a
subset based on location should be produced. This line of code is an example 
of R's 'terseness' - only a single line of code is needed to perform what 
is in fact quite a complex operation.

The *third* way to acheive the 
same result uses the `rgeos` package. 
This is more complex and not included in this tutorial
(interested readers can see a vignette of this, to accomany the tutorial 
on [RPubs.com/Robinlovelace](http://rpubs.com/RobinLovelace/11796)). 
The next section demonstrates
spatial aggregation, a more advanced version of spatial subsetting.

# Spatial aggregation

As with R's very terse code for spatial subsetting, the base function 
`aggregate` (which provides summaries of variables based on some grouping variable)
also behaves differently when the inputs are spatial objects. 


```r
stations.c <- aggregate(stations, lnd, length)
stations.c@data[, 1]
```

```
##  [1] 48 22 43 18 12 13 25 24 12 46 18 20 28 32 38 19 30 25 31  7 10 38 12
## [24] 16 28 17 16 28  4  6 14 26  5
```


The above code performs a number of steps in just one line:

- `aggregate` identifies which `lnd` polygon (borrough) each `station` is located in and groups them accordingly
- it counts the number of stations in each borrough
- a new spatial object is created and assigned the name `stations.c`, the count of stations

As shown below, the spatial implementation of `aggregate` can provide summary statistics of variables.
In this case we take the variable `NUMBER` and find its mean value for the stations in each ward.


```r
stations.m <- aggregate(stations[c("NUMBER")], by = lnd, FUN = mean)
```


For an optional advanced task, let us analyse and plot the result.


```r
q <- cut(stations.m$NUMBER, breaks = c(quantile(stations.m$NUMBER)), include.lowest = T)
summary(q)
```

```
## [1.82e+04,1.94e+04] (1.94e+04,1.99e+04] (1.99e+04,2.05e+04] 
##                   9                   8                   8 
##  (2.05e+04,2.1e+04] 
##                   8
```

```r
clr <- as.character(factor(q, labels = paste0("grey", seq(20, 80, 20))))
plot(stations.m, col = clr)
legend(legend = paste0("q", 1:4), fill = paste0("grey", seq(20, 80, 20)), "topright")
```

![plot of chunk Choropleth map of mean values of stations in each borrough](http://robinlovelace.net/figure/Choropleth_map_of_mean_values_of_stations_in_each_borrough.png) 

```r
areas <- sapply(stations.m@polygons, function(x) x@area)
```


This results in a simple choropleth map and a new vector containing the area of each
borrough. As an additional step, try comparing the mean area of each borrough with the 
mean value of stations within it: `plot(stations.m$NUMBER, areas)`.

If you'd like to learn more about R's rapidly improving spatial functionality, 
you can download the complete tutorial, in .pdf or .Rmd form, from 
[github.com/Robinlovelace/Creating-maps-in-R/](https://github.com/Robinlovelace/Creating-maps-in-R/).



