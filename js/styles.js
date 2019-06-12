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

var markerIcon = L.icon({
    iconUrl: '../css/images/marker-icon.png',
    shadowUrl: '../css/images/marker-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var stopIcon = L.icon({
    iconUrl: '../css/images/stop-icon.png',
    shadowUrl: '../css/images/marker-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var ruta_style = function (feature) {
      if(feature.properties.origen == 'MADRID'){
        return {color: 'red', weight: 4};
      } else if(feature.properties.origen == 'MOSQUERA'){
        return {color: 'orange', weight: 4};
      } else if(feature.properties.origen == 'BOGOTÁ D.C.'){
        return {color: 'blue', weight: 4};
      } else if(feature.properties.origen == 'FUNZA'){
        return {color: 'green', weight: 4};
      } else if(feature.properties.origen == 'BOJACÁ'){
        return {color: 'yellow', weight: 4};
      } else if(feature.properties.origen == 'EL ROSAL'){
        return {color: '#66ff66', weight: 4};
      } else if(feature.properties.origen == 'SUBACHOQUE'){
        return {color: '#ff00ff', weight: 4};
      } else if(feature.properties.origen == 'ZIPACÓN'){
        return {color: '#33ccff', weight: 4};
      } else if(feature.properties.origen == 'FACATATIVÁ'){
        return {color: '#800000', weight: 4};
      } else {
        return {color: 'gray', weight: 4};
      }
    };