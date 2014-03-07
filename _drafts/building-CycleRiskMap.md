


Loading the data into tile mill's [mbtiles](https://www.mapbox.com/developers/mbtiles/)
and onto MapBox's own servers led to the following map:

<iframe width="100%" height="500px" frameBorder="0" src="http://a.tiles.mapbox.com/v3/robinlovelace.2s6l6sea/page.html#14/53.8081/-1.5526"></iframe>

Yet all this information is in raster form which is wasteful: where's the base layer?
It would be much better to serve the data in its original vector format and then style it 
in the client.
