var mymap = L.map('map').setView([4.8119, -74.2341], 11);

var GoogleStreetMap = L.tileLayer.provider('GoogleMaps').addTo(mymap);

var baseMaps = {
	"Google Maps": GoogleStreetMap,
};
var overlayMaps = {
};

var layers = {};
var db_path = '../sqlite/prueba.sqlite';

function loadRoute(id, name){
	var ruta = execute_query(db_path,"select AsGeoJSON(geom), id_ruta, nombre, distancia, origen, destino, tiempo_promedio, tarifa from l_ruta where id_ruta = '"+id+"'",mymap,'Ruta',['#query-output',false],ruta_style);
	}