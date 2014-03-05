---
layout: webmapost
title: Testing web map APIs - Google vs OpenLayers vs Leaflet
category: software
tags:
 - GIS
 - visualisation
 - web maps
 - map
---

The use of web maps has rocketed over the last decade. Back in 2005, 
Google Maps [was released](http://en.wikipedia.org/wiki/Web_mapping#History_of_web_mapping), 
facilitating the use of online maps by the masses for everyday life. 
Initially, web mapping was the domain of a few large companies like 
Google, ESRI and NASA. However, with the explosion of open source 
mapping projects under the banner of [FOSS4G](http://foss4g.org/) (short for free open 
source software for geo-applications) and affiliated with the umbrella 
body of the Open Source Geospatial Foundation ([OSGeo](http://www.osgeo.org/)), 
web mapping can now be undertaken by anyone with a computer and an internet connection.

Inspired by a [web mapping course](http://www.sigte.udg.edu/summerschool2014/) at the 
University of Girona's [SIGTE](http://www.sigte.udg.edu/) service - much of which can now be done online via 
[UNIGIS](http://www.unigis.es/Oferta-Formativa/Cursos-Especializacion/Programacion-Aplicaciones-Web-Map-ce) -
I decided to test out three of the major options, Google Maps, 
OpenLayers and Leaflet.
Thanks to such software, it has never been easier to make and communicate a map. 
To illustrate the empowering potential of this, take a look at the 
recently implemented [City Connect](http://www.cyclecityconnect.co.uk/participate.php)
consultation map:

[![City Connect consultation map](/figure/cconnect.png)](http://www.cyclecityconnect.co.uk/participate.php)

This map is frankly amazing: it is democratic, lowering the barrier to entrance 
to spatial planning by making it accessible to anyone who has a computer and (I've not 
tested it) perhaps even just a smartphone. The rating of comments by other people
mitigates against abuse, and the option to show exactly where your issue lies 
enables planners to make better use of local knowledge. The map, interestingly, 
was custom built using Leaflet, the 'new kid on the block' in web mapping.

For me this in many ways represents the ideal web map towards which 
we should strive. It is:

- user friendly
- open source
- useful

With the myriad of free options available to to public, it can seem 
very hard to get involved in web mapping. That's why the rest of this 
post provides a brief overview of three of the main options for building 
and online web map. In order of completion date, these are:

1. Google Maps (version 1, with basic API deployed in 2005)
2. OpenLayers (large JavaScript library initiated in 2005)
3. Leaflet (small JavaScript library initiated in 
[September 2009](https://github.com/Leaflet/Leaflet/commit/eb5b7d706b9f439863172c522add77a0193dbda8) 
by [Vladamir Agafonkin](https://github.com/mourner))

These are the three main [client side](http://en.wikipedia.org/wiki/Client-side)
web mapping tools, but there are many more. More that 44 according to 
[one article dating from 2012](http://geotux.tuxfamily.org/index.php/es/geo-blogs/item/291-comparacion-clientes-web-v6)!
You may also want to consider map servers such as GeoServer if you
are dealing with large applications but, for small application, an updated 
[.geojson file](http://geojson.org/) hosted for free can work work just fine. 
This is amazing. It means that you, me or anyone can take control of our 
geographic information and communicate it to the world how we want.

<!--more-->

## Google maps

Google maps is the oldest and easiest to use web mapping tool of the three. 
After you have set up a unique [API key](https://developers.google.com/maps/documentation/javascript/tutorial#api_key), 
putting the below map on your site is as simple as placing the following code into the
header of you web page (see this page's source to see what I mean):

```{js}
<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyAjf6ex59KmJHfkHMpevYAKjKWoSXj-FP8&sensor=true"></script>
<script type="text/javascript">
  function initialize() {
    var latlng = new google.maps.LatLng(54, -2);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), 
myOptions);
  }
</script>
```

After that, you just add a single line of html in the page's body:

```{html}
<div id="map_canvas" style="width: 600px; height: 200px"></div> 
```

<div id="map_canvas" style="width: 600px; height: 200px"></div> 

All the variables are quite intuitive and quick to implement. Also, 
with the brute force of 
[Google's vast server infrastructure](http://www.wired.com/wiredenterprise/2012/10/ff-inside-google-data-center/all/), 
Google maps are guaranteed to load quickly. The same applies to the code base:
with some of the 
[best payed junior programmers in the world](http://www.forbes.com/sites/robinferracone/2013/12/19/larry-vs-larry-oracle-ceo-pay-vs-google-ceo-pay/), 
it is unlikely that bugs in Google maps survive more than a couple of days. See below an image of Google's relatively 
flat pay structure compared with the quite unequal one of Oracle.

<p><a href="http://b-i.forbesimg.com/robinferracone/files/2013/12/oracle-google_updated.png"><img class="alignnone size-large wp-image-593" alt="oracle-google_updated" src="http://b-i.forbesimg.com/robinferracone/files/2014/01/oracle-google_updated-1024x716.png" width="800" height="500" /></a></p> 

Google maps also has a surprising range of functionalities, although you
are pretty much restricted to Google's way of doing things (you cannot, 
for example change the background map to be based on Open Street Map). 
This includes:

- Slick routing (as highlighted in 
[this example](https://embed-dot-more-than-a-map.appspot.com/demos/routing/cycling)): 
this is something that the other APIs struggle with.
- [Street view](https://embed-dot-more-than-a-map.appspot.com/demos/streetview/underwater).
- A wide range of [static and dynamic visualisations](https://embed-dot-more-than-a-map.appspot.com/demos/visualization/flights).
- Integration with Google Earth.

These are useful, but for Google's way of doing things may not be the 
way you want to do it: it lacks the flexibility of open source options, 
where literally anything can be modified (not that this is for the faint hearted).
If you want complete control over your data and like the idea 
of supporting open source mapping then one of the open source options 
may be better for you.

## OpenLayers
OpenLayers is the most mature open source client side web mapping 
tool on the internet and probably the most 
widely used. It is a JavaScript library, meaning it will come naturally
to anyone used to building general purpose application in that language, 
which is ubiquitous on the internet. OpenLayers has 
a very wide range of functions, and it pays the price in terms of 
size, occupying [almost 1 Mb](http://gis.stackexchange.com/questions/33918/should-i-use-openlayers-or-leaflet)
of digital space: not ideal for mobile applications. 

Partly because of this 'bulkiness' (less of a problem as devices become faster)
the OpenLayers developers are gearing up to release a major new version:
[OpenLayers3](http://ol3js.org/) which offers major improvements 
in performance with less code than OpenLayers2
([113 vs 126 thousand lines](http://ol3js.org/)). For this reason 
the example below uses OpenLayers3. It is not the pretiest of maps, 
but this is not the code's fault it is the user's (that's me!).
Take a look at the [list of examples](http://ol3js.org/en/master/examples/)
for more beautiful and advanced maps written in OpenLayers3. 

For the record, the below map was created with even fewer lines than the 
Google Maps example. The following code, taken from the 
[OpenLayers3 Quickstart](http://ol3js.org/en/master/doc/quickstart.html) goes in the html head:

```{js}
<link rel="stylesheet" href="http://ol3js.org/en/master/css/ol.css" type="text/css">
<script src="http://ol3js.org/en/master/build/ol.js" type="text/javascript"></script>
```

And then the following goes in the body:

```
<div id="mapOL3" style="width: 100%, height: 400px"></div>
<script>
  new ol.Map({
    layers: [
      new ol.layer.Tile({source: new ol.source.OSM()})
    ],
    view: new ol.View2D({
      center: [0, 0],
      zoom: 2
    }),
    target: 'mapOL3'
  });
</script>
```

<div id="mapOL3" style="width: 100%, height: 400px"></div>

<script>
  new ol.Map({
    layers: [
      new ol.layer.Tile({source: new ol.source.OSM()})
    ],
    view: new ol.View2D({
      center: [0, 0],
      zoom: 2
    }),
    target: 'mapOL3'
  });
</script>
<script src="ol3.js"></script>

One improvement over OpenLayers2 is that when adding an OpenLayers map, you
no longer need to initialise it in the 
`body` tag, as is for the Google Maps version. 
Hence, to load the Google Map, one needs to add this to the page's 
body: `<body onload="initialize()">`.
This is not needed for Leaflet maps either.

## Leaflet
Leaflet is in fashion at the moment as a fast moving, lightweight and 
relatively intuitive JavaScript library that aims to be light on 
computer and programmer resouces. It allows you to get maps up quickly. 

Don't let that make you suppose that the library lacks functionality, however.
The cycle path consultation map mentioned in the introduction was built in 
Leaflet, and its functionality is ever growing, not least via a growing number 
of [plugins](http://mapbbcode.org/leaflet.html). 

This modular way of doing things intuitively makes sense to me, 
meaning that the core Leaflet developers can focus on getting the basics
as good as possible, keeping the Leaflet.js library small enough to 
load rapidly on a mobile device. This is why Leaflet is probably the 
API of choice for open source mobile application developers and why 
it is used by GitHub, a central hub in the open source software movement. 

Interestingly, Leaflet does not require initialisation in the body.
It still requires a couple of scripts, shown below, in the head.

```
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.js"></script>
```

For the main map description, instead asking for the script to be added in the html,
Leaflet asks for it to be called *after* the 
map object is called, like so:

```{js}
<div id="map" style="width: 600px; height: 400px"></div>
 
<script>
		var map = L.map('map').setView([51.505, -0.09], 13);

		L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://cloudmade.com">CloudMade</a>'
		}).addTo(map);
</script>
```

<div id="map" style="width: 600px; height: 400px"></div>
 
<script>

		var map = L.map('map').setView([51.505, -0.09], 13);

		L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://cloudmade.com">CloudMade</a>'
		}).addTo(map);
		
				L.marker([51.5, -0.09]).addTo(map)
			.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

		L.circle([51.508, -0.11], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(map).bindPopup("I am a circle.");

		L.polygon([
			[51.509, -0.08],
			[51.503, -0.06],
			[51.51, -0.047]
		]).addTo(map).bindPopup("I am a polygon.");


		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng.toString())
				.openOn(map);
		}

		map.on('click', onMapClick);

</script>

In fact the actual code used for the above map has a few more lines 
of code, to add the point, the blog and the triangle. 
But the snippet shown still works as a stand-alone map. 
The example can be found [here](http://leafletjs.com/examples/quick-start.html).

## Conclusion

We have seen three common ways to build maps into html pages and 
these offer amazing opportunities for displaying our geographical data
in new ways. The example of cycle path planning shows the potential for 
democratic empowerment that such technologies offer. However, 
for such potential to be realised, and not just gobbled by massive 
corporations like Google, we need diversity.
The importance of this for our online future is well described in an 
[article by Serge Wroclawski](http://www.theguardian.com/technology/2014/jan/14/why-the-world-needs-openstreetmap).
Google, for example, 
can easily insert adverts into its maps without us knowing. 
Leaflet and OpenLayers, being open source, cannot. 
That said, if your aim is just to get attractive 'off the shelf' maps
up quickly, Google Maps is a good option.

OpenLayers is mature and big and works well with servers.
Leaflet, as the new kid on the block is the most exciting for me and 
encapsulates many of the benefits of open source software in general:
speed of development, flexibility, efficiency. All three can probably 
do 80% of the web mapping applications that are commonly required so the 
choice should, in many cases, depend more on what you enjoy than on what it can 
and can't do. Lightness considered, for me that would mean Leaflet for 
many applications, but watch this space for the final version of 
OpenLayers3 (due very soon) and perhaps even better web mapping options.
