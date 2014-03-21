---
layout: post
title: Mapping on Google Maps
categories: maps
tags: 
 - open
 - FOSS4G
 - map
---

Below is a map made by uploading my data to Google Fusion Tables using an online tool called [shpescape](http://www.shpescape.com/). It shows the average energy costs of commuting to work in England, at the Ward level. 

<iframe width="600" height="600" scrolling="no" frameborder="no" src="https://www.google.com/fusiontables/embedviz?q=select+col2+from+1b37Wal1u5VWBne_uOpEjyNfyA1_Rk_5BprLTQbg&amp;viz=MAP&amp;h=false&amp;lat=52.93871655962058&amp;lng=-2.3290743055849816&amp;t=1&amp;z=5&amp;l=col2"> </iframe>

Alasdaiar Rae has created a [basic tutorial](http://undertheraedar.blogspot.co.uk/2011/10/mapping-methods.html) on the use of Google Fusion Tables for hosting geographical information. The polygons in the above map were drastically simplified using the rgeos command gSimplify, to cut down on size. However, the zones are no longer contiguous. An alternative online tool for shapefile simplification is [mapshaper](http://mapshaper.org/).
