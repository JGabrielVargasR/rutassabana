var mpio_style = function (feature) {
      if(feature.properties.nombre == 'MADRID'){
        return {fillColor: 'red', fillOpacity: 0.25, color: 'red', weight: 0};
      } else if(feature.properties.nombre == 'MOSQUERA'){
        return {fillColor: 'orange', fillOpacity: 0.25, color: 'orange', weight: 0};
      } else if(feature.properties.nombre == 'BOGOTA D.C.'){
        return {fillColor: 'blue', fillOpacity: 0.25, color: 'blue', weight: 0};
      } else if(feature.properties.nombre == 'FUNZA'){
        return {fillColor: 'green', fillOpacity: 0.25, color: 'green', weight: 0};
      } else if(feature.properties.nombre == 'BOJACA'){
        return {fillColor: 'yellow', fillOpacity: 0.25, color: 'yellow', weight: 0};
      } else if(feature.properties.nombre == 'EL ROSAL'){
        return {fillColor: '#66ff66', fillOpacity: 0.25, color: '#66ff66', weight: 0};
      } else if(feature.properties.nombre == 'SUBACHOQUE'){
        return {fillColor: '#ff00ff', fillOpacity: 0.25, color: '#ff00ff', weight: 0};
      } else if(feature.properties.nombre == 'ZIPACON'){
        return {fillColor: '#33ccff', fillOpacity: 0.25, color: '#33ccff', weight: 0};
      } else if(feature.properties.nombre == 'FACATATIVA'){
        return {fillColor: '#800000', fillOpacity: 0.25, color: '#800000', weight: 0};
      } else {
        return {fillColor: 'gray', fillOpacity: 0.25, color: 'gray', weight: 0};
      }
    };
	
var corredor_style = function (feature) {
      if(feature.properties.id_corredor == '01'){
        return {color: 'red', weight: 2};
      } else if(feature.properties.id_corredor == '02'){
        return {color: 'orange', weight: 2};
      } else if(feature.properties.id_corredor == '03'){
        return {color: 'blue', weight: 2};
      } else if(feature.properties.id_corredor == '04'){
        return {color: 'green', weight: 2};
      } else if(feature.properties.id_corredor == '05'){
        return {color: 'yellow', weight: 2};
      } else if(feature.properties.id_corredor == '06'){
        return {color: '#66ff66', weight: 2};
      } else if(feature.properties.id_corredor == '07'){
        return {color: '#ff00ff', weight: 2};
      } else if(feature.properties.id_corredor == '08'){
        return {color: '#33ccff', weight: 2};
      } else if(feature.properties.id_corredor == '09'){
        return {color: '#800000', weight: 2};
      } else if(feature.properties.id_corredor == '10'){
        return {color: '#ff0066', weight: 2};
      } else if(feature.properties.id_corredor == '11'){
        return {color: '#002266', weight: 2};
      } else {
        return {color: 'gray', weight: 1};
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
    iconAnchor:   [14, 46], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var stop = function (feature) {
        return {icon: stopIcon}
    };

var ruta_style = function (feature) {
        return {color: '#0098DA', weight: 4}
    };