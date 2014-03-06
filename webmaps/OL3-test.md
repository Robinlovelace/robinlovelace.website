---
layout: webmapOL3-basic
title: OL3 implementation
---

<div id="mapOL3" style="width: 100%, height: 400px"></div>

<script>
  new ol.Map({
    layers: [
      new ol.layer.Tile({source: new ol.source.OSM()})
    ],
    view: new ol.View2D({
      center: ol.proj.transform([-1.55, 53.8], 'EPSG:4326', 'EPSG:3857'),
          zoom: 12
    }),
    target: 'mapOL3'
  }); 
</script>
