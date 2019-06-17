var mpio_style = function (feature) {
      if(feature.properties.nombre == 'MADRID'){
        return {fillColor: 'red', fillOpacity: 0.25, color: 'red', weight: 0};
      } else if(feature.properties.nombre == 'MOSQUERA'){
        return {fillColor: 'orange', fillOpacity: 0.25, color: 'orange', weight: 0};
      } else if(feature.properties.nombre == 'BOGOTÁ D.C.'){
        return {fillColor: 'blue', fillOpacity: 0.25, color: 'blue', weight: 0};
      } else if(feature.properties.nombre == 'FUNZA'){
        return {fillColor: 'green', fillOpacity: 0.25, color: 'green', weight: 0};
      } else if(feature.properties.nombre == 'BOJACÁ'){
        return {fillColor: 'yellow', fillOpacity: 0.25, color: 'yellow', weight: 0};
      } else if(feature.properties.nombre == 'EL ROSAL'){
        return {fillColor: '#66ff66', fillOpacity: 0.25, color: '#66ff66', weight: 0};
      } else if(feature.properties.nombre == 'SUBACHOQUE'){
        return {fillColor: '#ff00ff', fillOpacity: 0.25, color: '#ff00ff', weight: 0};
      } else if(feature.properties.nombre == 'ZIPACÓN'){
        return {fillColor: '#33ccff', fillOpacity: 0.25, color: '#33ccff', weight: 0};
      } else if(feature.properties.nombre == 'FACATATIVÁ'){
        return {fillColor: '#800000', fillOpacity: 0.25, color: '#800000', weight: 0};
      } else {
        return {fillColor: 'gray', fillOpacity: 0.25, color: 'gray', weight: 0};
      }
    };

var stopIcon = L.icon({
    iconUrl: '../../vendor/leaflet/images/stop-icon.png',

    iconSize:     [29, 74], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});

var locationIcon = L.icon({
    iconUrl: '../vendor/leaflet/images/location-icon.png',

    iconSize:     [29, 47], // size of the icon
    iconAnchor:   [22, 46], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var stop = function (feature) {
        return {icon: stopIcon}
    };

var ruta_style = function (feature) {
        return {color: '#0098DA', weight: 4}
    };