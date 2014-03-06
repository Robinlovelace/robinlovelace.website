---
layout: webmapOL3-basic
title: OL3 implementation
---

<div id="mapOL3" style="width: 100%, height: 400px"></div>

<script>
  new ol.Map({
    layers: [
      new ol.layer.Tile({source: new ol.source.OSM()}),
      
      new ol.layer.Tile({source: new ol.source.GeoJSON({
	  projection: 'EPSG:4326',
      url: '/data/tpoints.geojson'
  })
  })
    
    ],
    view: new ol.View2D({
      center: ol.proj.transform([-1.55, 53.8], 'EPSG:4326', 'EPSG:3857'),
          zoom: 12
    }),
    target: 'mapOL3'
  }); 
</script>

<!-- new e.g. var vectorLayer = new ol.layer.Vector({
  source: new ol.source.GeoJSON({
    projection: 'EPSG:3857',
    url: 'data/geojson/countries.geojson'
  }),

<!-- old e.g.  
            })
        }); -->
