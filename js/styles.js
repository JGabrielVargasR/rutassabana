var mpio_style = function (feature) {
      if(feature.properties.nombre == 'MADRID'){
        return {fillColor: 'red', fillOpacity: 0.5, color: 'red', weight: 2};
      } else if(feature.properties.nombre == 'MOSQUERA'){
        return {fillColor: 'orange', fillOpacity: 0.5, color: 'orange', weight: 2};
      } else if(feature.properties.nombre == 'BOGOTÁ D.C.'){
        return {fillColor: 'blue', fillOpacity: 0.5, color: 'blue', weight: 2};
      } else if(feature.properties.nombre == 'FUNZA'){
        return {fillColor: 'green', fillOpacity: 0.5, color: 'green', weight: 2};
      } else if(feature.properties.nombre == 'COTA'){
        return {fillColor: 'cyan', fillOpacity: 0.5, color: 'cyan', weight: 2};
      } else if(feature.properties.nombre == 'BOJACÁ'){
        return {fillColor: 'yellow', fillOpacity: 0.5, color: 'yellow', weight: 2};
      } else if(feature.properties.nombre == 'EL ROSAL'){
        return {fillColor: '#66ff66', fillOpacity: 0.5, color: '#66ff66', weight: 2};
      } else if(feature.properties.nombre == 'SUBACHOQUE'){
        return {fillColor: '#ff00ff', fillOpacity: 0.5, color: '#ff00ff', weight: 2};
      } else if(feature.properties.nombre == 'ZIPACÓN'){
        return {fillColor: '#33ccff', fillOpacity: 0.5, color: '#33ccff', weight: 2};
      } else if(feature.properties.nombre == 'TENJO'){
        return {fillColor: '#9933ff', fillOpacity: 0.5, color: '#9933ff', weight: 2};
      } else if(feature.properties.nombre == 'FACATATIVÁ'){
        return {fillColor: '#800000', fillOpacity: 0.5, color: '#800000', weight: 2};
      } else {
        return {fillColor: 'gray', fillOpacity: 0.5, color: 'gray', weight: 2};
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

var ruta_style(
	color: blue, weight: 2
)