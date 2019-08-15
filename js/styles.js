var mpio_style = function (feature) {
      if(feature.properties.Municipio == 'MADRID'){
        return {fillColor: 'red', fillOpacity: 0.25, color: 'red', weight: 1};
      } else if(feature.properties.Municipio == 'MOSQUERA'){
        return {fillColor: 'orange', fillOpacity: 0.25, color: 'orange', weight: 1};
      } else if(feature.properties.Municipio == 'BOGOTA D.C.'){
        return {fillColor: 'blue', fillOpacity: 0.25, color: 'blue', weight: 1};
      } else if(feature.properties.Municipio == 'FUNZA'){
        return {fillColor: 'green', fillOpacity: 0.25, color: 'green', weight: 1};
      } else if(feature.properties.Municipio == 'BOJACA'){
        return {fillColor: 'yellow', fillOpacity: 0.25, color: 'yellow', weight: 1};
      } else if(feature.properties.Municipio == 'EL ROSAL'){
        return {fillColor: '#66ff66', fillOpacity: 0.25, color: '#66ff66', weight: 1};
      } else if(feature.properties.Municipio == 'SUBACHOQUE'){
        return {fillColor: '#ff00ff', fillOpacity: 0.25, color: '#ff00ff', weight: 1};
      } else if(feature.properties.Municipio == 'ZIPACON'){
        return {fillColor: '#33ccff', fillOpacity: 0.25, color: '#33ccff', weight: 1};
      } else if(feature.properties.Municipio == 'FACATATIVA'){
        return {fillColor: '#800000', fillOpacity: 0.25, color: '#800000', weight: 1};
      } else {
        return {fillColor: 'gray', fillOpacity: 0.25, color: 'gray', weight: 1};
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
	
var ruta_planeada_style = function (feature) {
	if(feature.properties.id_ruta == '00'){return {color: 'black', weight: 4, dashArray: '5, 10'}};
	if(feature.properties.id_ruta == '01'){return {color: '#C06CA2', weight: 4}};
	if(feature.properties.id_ruta == '02'){return {color: '#489D9F', weight: 4}};
	if(feature.properties.id_ruta == '03'){return {color: '#A0D252', weight: 4}};
	if(feature.properties.id_ruta == '04'){return {color: '#D72044', weight: 4}};
	if(feature.properties.id_ruta == '05'){return {color: '#7933BD', weight: 4}};
	if(feature.properties.id_ruta == '06'){return {color: '#8D94BF', weight: 4}};
	if(feature.properties.id_ruta == '07'){return {color: '#3C53DE', weight: 4}};
	if(feature.properties.id_ruta == '08'){return {color: '#41556C', weight: 4}};
	if(feature.properties.id_ruta == '09'){return {color: '#D98F14', weight: 4}};
	if(feature.properties.id_ruta == '10'){return {color: '#BE8E7D', weight: 4}};
	if(feature.properties.id_ruta == '11'){return {color: '#B76E64', weight: 4}};
	if(feature.properties.id_ruta == '12'){return {color: '#123217', weight: 4}};
	if(feature.properties.id_ruta == '13'){return {color: '#31B915', weight: 4}};
	if(feature.properties.id_ruta == '14'){return {color: '#D97ED1', weight: 4}};
	if(feature.properties.id_ruta == '15'){return {color: '#CEA066', weight: 4}};
	if(feature.properties.id_ruta == '16'){return {color: '#E0BC26', weight: 4}};
	if(feature.properties.id_ruta == '17'){return {color: '#9A9487', weight: 4}};
	if(feature.properties.id_ruta == '18'){return {color: '#31621B', weight: 4}};
	if(feature.properties.id_ruta == '19'){return {color: '#DE0FA5', weight: 4}};
	if(feature.properties.id_ruta == '20'){return {color: '#0B2F7B', weight: 4}};
	if(feature.properties.id_ruta == '21'){return {color: '#4FC011', weight: 4}};
	if(feature.properties.id_ruta == '22'){return {color: '#F8CEBB', weight: 4}};
	if(feature.properties.id_ruta == '23'){return {color: '#CABD55', weight: 4}};
	if(feature.properties.id_ruta == '24'){return {color: '#EEFECF', weight: 4}};
	if(feature.properties.id_ruta == '25'){return {color: '#FDCBD0', weight: 4}};
	if(feature.properties.id_ruta == '26'){return {color: '#860CD5', weight: 4}};
	if(feature.properties.id_ruta == '27'){return {color: '#0E2D2D', weight: 4}};
	if(feature.properties.id_ruta == '28'){return {color: '#2207CF', weight: 4}};
	if(feature.properties.id_ruta == '29'){return {color: '#A83153', weight: 4}};
	if(feature.properties.id_ruta == '30'){return {color: '#A14424', weight: 4}};
	if(feature.properties.id_ruta == '31'){return {color: '#286FC8', weight: 4}};
	if(feature.properties.id_ruta == '32'){return {color: '#DDBA26', weight: 4}};
	if(feature.properties.id_ruta == '33'){return {color: '#FBCB67', weight: 4}};
	if(feature.properties.id_ruta == '34'){return {color: '#44A4B7', weight: 4}};
	if(feature.properties.id_ruta == '35'){return {color: '#151A87', weight: 4}};
	if(feature.properties.id_ruta == '36'){return {color: '#29F1B6', weight: 4}};
	if(feature.properties.id_ruta == '37'){return {color: '#A64281', weight: 4}};
	if(feature.properties.id_ruta == '38'){return {color: '#95CF43', weight: 4}};
	if(feature.properties.id_ruta == '39'){return {color: '#CB1F57', weight: 4}};
	if(feature.properties.id_ruta == '40'){return {color: '#D396FD', weight: 4}};
	if(feature.properties.id_ruta == '41'){return {color: '#31732E', weight: 4}};
	if(feature.properties.id_ruta == '42'){return {color: '#0CB470', weight: 4}};
	if(feature.properties.id_ruta == '43'){return {color: '#856A44', weight: 4}};
	if(feature.properties.id_ruta == '44'){return {color: '#65DBBA', weight: 4}};
	if(feature.properties.id_ruta == '45'){return {color: '#FBBB85', weight: 4}};
	if(feature.properties.id_ruta == '46'){return {color: '#B8137D', weight: 4}};
    };
	
