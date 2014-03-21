---
layout: post
title: Mapping for the masses with geojson.io 
category:
- maps
tags:
- open source
- GIS
- map
- software
---
Finally, after weeks of deliberation and numerous conversations, [on-line](http://gis.stackexchange.com/questions/77734/can-osms-id-editor-be-used-on-custom-maps)
and off, I think I've found 
a satisfactory solution to my long-standing question: how do you build collaborative maps online 
in realtime using open source software? The one word answer, [geojson.io](http://geojson.io), is contained in the map below. A 
more detailed answer is provided below.

<iframe frameborder="0" width="100%" height="300" src="http://bl.ocks.org/d/d7defc8f828f444b5e25"></iframe>


<!--more-->

This problem emerged for me when I move to a new city and wanted to help out their equivalent of [Abundance](http://growsheffield.com/abundance/).
Now, if you plan on collecting food in a city, even if you think you know it well, you will need maps.
Fine you say, just edit Google Maps or create your own paper one. Unfortunately neither solution is acceptable: one's too
social (and the data is controlled instantly by Google) and the other is too antisocial. We want collaboration!

## Various alternatives
After a while of searching I [narrowed-down](http://gis.stackexchange.com/questions/74600/whats-the-most-appropriate-toolset-for-creating-a-community-map)
my options to the following:
- Do it in [GeoServer](http://geoserver.org/display/GEOS/Welcome),
the open source multi-purpose map server. This would be blatant overkill for small community solutions 
(although it's one to bear in mind if community maps ever need to join up and scale).
- Use some kind of 3rd party to host the data, such as [MangoMap](http://blog.mangomap.com/) or QGIS cloud. Each of 
these solutions were attractive in one way or another but didn't offer the mass editing or horizontal organisational 
structure I was after.
- Manage the geodata files in my favourite version control software Github, taking advantages of the recently 
added [ability to display `.geojson` files](https://github.com/blog/1541-geojson-rendering-improvements)
in an overview map. This would be great if I was working with a team of crack coders, but it's simply too tricky to expect people
to edit these files then upload them back up to github from the command line.

Weeks after asking this question to the OSGEO community, I returned to rediscover the following little comment under my 
original question: 
> Would add Tilemill to the list
At the time this seemed like one option too many, so I gave up. But when I actually found out who was behind TileMill, 
the web mapping wizard outfit [MapBox](https://www.mapbox.com/), I decided to try again.

## Discovering geojson.io
It was thanks to direct communications with MapBox developers, not the TileMill solution itself
that led me to geojson.io. This software has only been available for a month or so: still rough 
around the edges. Yet it offers speed, stability and, crucially, the ability to visually edit
`.geojson` files online and save them to existing GitHub accounts. 
To make the mapping a community project, all that's needed is a Github team, and anyone in that 
team can add to the map. If it needs to be private, that can happen too, via bitbucket

## Polishing it in  MapBox
This is the final stage, to be approached after the map has actually been completed.
But given that MapBox specialize in making beautiful maps this should be the easy part.

<iframe src="http://infoamazonia.org/embed/?map_id=6731&width=600&height=400" width="600" height="400" frameborder="0"></iframe>



