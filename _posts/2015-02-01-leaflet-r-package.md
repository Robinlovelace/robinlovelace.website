---
layout: post
title: The leaflet package for online mapping in R
categories:
 - R
tags:
 - open source
 - GIS
 - maps
---

It has been possible for some years to launch a web map from within R.
A number of packages for doing this are available, including:

- [**RgoogleMaps**](http://cran.r-project.org/web/packages/RgoogleMaps/index.html), an interface to the Google Maps api
- [**leafletR**](http://cran.r-project.org/web/packages/leafletR/index.html), an early package for creating Leaflet maps with R
- [**rCharts**](http://rcharts.io/viewer/?6735051#.VM1vpWOS8QE),
which can be used as a basis for webmaps

In this tutorial we use the new RStudio-supported
[**leaflet**](https://github.com/rstudio/leaflet) R package.
We use this package, an R interface to the
[JavaScript mapping library of the same name](http://leafletjs.com/) because:

- **leaflet** is supported by RStudio, who have a track strong track record of creating amazing
R packages
- **leaflet** appears to provide the simplest, fastest way to host interactive maps
online in R, requiring only 2 lines of code for one web map! (as you'll see below)
- **leaflet** is **shiny**. Shiny in the literal sense of the word
(a new and fresh approach to web mapping in R)
but also in the sense that it works well with the R package **shiny**.

<!--more-->

The best tutorial resource I have found on **leaflet** is this
[vignette](https://github.com/rstudio/leaflet/blob/master/vignettes/leaflet.Rmd)
by Joe Cheng and Yihui Xie. Building on their excellent description, this
article explains some of the fundamentals of the package.

# Installing leaflet

Because **leaflet** is new, it's not yet on CRAN. Even when it does appear,
installing from github may be a good idea, to ensure you have access to the
latest features and bug fixes. Here's how:


<script src="https://gist.github.com/Robinlovelace/e6683569cef916bb377b.js"></script>


{% highlight r %}
# Install leaflet package
if(!require(leaflet)) install_github("rstudio/leaflet") 
{% endhighlight %}

# A first web map with leaflet

To create an interactive web map with **leaflet** is incredibly easy.
Having installed the package try this single line of code:



{% highlight r %}
# Plot a default web map (brackets display the result)
(m <- leaflet() %>% addTiles()) 
{% endhighlight %}


{% highlight r %}
img <- readPNG("~/repos/Creating-maps-in-R/figure//shiny_world.png")
grid.raster(img)
{% endhighlight %}

![Basic leaflet map in R](http://robinlovelace.net/img/shiny_world.png) 


# Adding basic features with %>%

Adding basic features to your webmap is easy. The `%>%` 'pipe' operator
used extensively in [**dplyr**](https://github.com/hadley/dplyr)
and developed for the
[**maggrittr** package](http://www.r-statistics.com/2014/08/simpler-r-coding-with-pipes-the-present-and-future-of-the-magrittr-package/)
means we can finally escape from dozens of nested bracketted commands.
(If you use RStudio, I suggest trying the
[new shortcut](http://www.rstudio.com/products/rstudio/release-notes/)
`Ctl+Shift+M` to produce this wonderful operator.)
**leaflet** settings and functionality can thus be added sequentially, without
requiring any additional brackets!

To add a location to the map `m`, for example, we can simply pipe `m` into
the function `setView()`:


{% highlight r %}
m %>% setView(lng = -1.5, lat = 53.4, zoom = 10) # set centre and extent of map
{% endhighlight %}

This way we can gradually add elements to our map, one-by-one:


{% highlight r %}
(m2 <- m %>%
  setView(-1.5, 53.4, 10) %>% # map location
  addMarkers(-1.4, 53.5) %>% # add a marker
  addPopups(-1.6, 53.3, popup = "Hello Sheffield!") %>% # popup
  # add som circles:
  addCircles(color = "black", runif(90, -2, -1), runif(90, 53, 54), runif(90, 10, 500)))
{% endhighlight %}

<iframe src="https://robinlovelace.shinyapps.io/leaflet-demo/" style="border: none; width: 600px; height: 400px"></iframe>

# Adding data

In the previous example, we added some random data that we created
locally, inside the function call. How do we use real, large datasets
in leaflet? The package provides 3 options:

- Data from base R: lat/long matrix or data.frame
- Data from [**sp**](http://cran.r-project.org/web/packages/sp/index.html) such as SpatialPoints and SpatialPolygons
- Data from [**maps**](http://cran.rstudio.com/web/packages/maps/index.html)

Let's try adding a bicycle route, one that 
[I followed with some friends
to move from Sheffield to my current home of Leeds](http://robinlovelace.net/ecotech/2013/10/13/bicycle-trailer-move.html). First download some data:


{% highlight r %}
url = "https://github.com/Robinlovelace/sdvwR/raw/master/data/gps-trace.gpx"
download.file(url, destfile = "shef2leeds.gpx", method = "wget")
{% endhighlight %}

Now we can load this as a `SpatialLinesDataFrame` and display in leaflet:

{% highlight r %}
library(rgdal)
shef2leeds <- readOGR("shef2leeds.gpx", layer = "tracks")
{% endhighlight %}

{% highlight r %}
m2 %>%
  setView(-1.5, 53.4, 9) %>% # map location
  addPolylines(data = shef2leeds, color = "red", weight = 4)
{% endhighlight %}

<iframe src="https://robinlovelace.shinyapps.io/shef-2-leeds-demo/" style="border: none; width: 600px; height: 400px"></iframe>

Note in the above example that we had to use the argument `data =` to
refer to our spatial object: it cannot simply be inserted without specifying
what it is. The `data` argument can also be placed inside the initial
`leaflet()` function call.

That was quite a painless process that would many more lines of code if you
were to use JavaScript. But not as painless as the bicycle trip itself, which
involved fewer lines of code still: 0! This can be seen in the following video.

<iframe width="420" height="315" src="//www.youtube.com/embed/6a8QLiC4LV8" frameborder="0" allowfullscreen></iframe>

# Shiny integration

**leaflet** is developed by the same team who develop **shiny** so the two
are well integrated. Below is a very simple example, modified slightly
from the package's [vignette](https://github.com/rstudio/leaflet/blob/master/vignettes/leaflet.Rmd):


{% highlight r %}
library(shiny)
shinyApp(
  ui = fluidPage(leafletOutput('myMap')),
  server = function(input, output) {
    
    # download and load data
    url = "https://github.com/Robinlovelace/sdvwR/raw/master/data/gps-trace.gpx"
    download.file(url, destfile = "shef2leeds.gpx", method = "wget", )
    library(rgdal)
    shef2leeds <- readOGR("shef2leeds.gpx", layer = "tracks")
    
    map = leaflet() %>% addTiles() %>% setView(-1.5, 53.4, 9) %>% 
      addPolylines(data = shef2leeds, color = "red", weight = 4)
    output$myMap = renderLeaflet(map)
  }
)
{% endhighlight %}

# Applications

Clearly `leaflet` is a powerful and flexible R package. If I were to offer
one critique, it would be that I could find no easy way to allow the user
to query the data objects loaded. **plotly**, for example, provides a
description of any visual object the user clicks on.
The [datashine commuter visualisation](http://commute.datashine.org.uk/),
for example allows users to click on any point, resulting in a burst of lines
emenating from it. This would also be possible in **leaflet/shiny**, but the
best implementation is not immediately clear, to me at least!

The wider context of this article is the pressing need for better transport
planning decision making, to enable a transition away from fossil fuels.
To this end, the ['propensity to cycle' project](https://github.com/Robinlovelace/pct),
funded by the UK's [Department for Transport](https://www.gov.uk/government/organisations/department-for-transport),
seeks to create an interactive tool to identify where new bicycle paths are most
needed. There are clearly many other uses for R's **leaflet** package: what
will you use it for? Let me know at [@robinlovelace](https://twitter.com/robinlovelace).

