---
layout: masterLeaf
title: Trip to work - danger map
---

 <script src="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.js"></script>
 <script src="https://raw.github.com/MassAtLeeds/RouteFactor/master/tr.js"></script>
 
  <div id="map" style="width: 100%, height: 400px"></div>
  
  
<script>
		var map = L.map('map').setView([53.8, -1.55], 13);
		L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://cloudmade.com">CloudMade</a>'
		}).addTo(map);
		var gj = new L.geoJson(tr, {
        //some options
       }).addTo(map);
		
		
</script>
