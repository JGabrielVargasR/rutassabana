var mymap = L.map('map').setView([4.816465602901933, -74.23738733732634], 11);

var GoogleStreetMap = L.tileLayer.provider('GoogleMaps').addTo(mymap);
var capas = L.layerGroup().addTo(mymap);

var baseMaps = {
	"GoogleMaps": GoogleStreetMap,
};
var overlayMaps = {
};

var layers = {};
var db_path = '../sqlite/rutassabana.sqlite';

function loadRoute(id, boundary){
	capas.clearLayers();
	var ruta = execute_query(db_path,"select AsGeoJSON(geom), id_ruta, nombre, origen, destino, distancia_km, tiempo_min, tarifa from l_ruta where id_ruta = '"+id+"'",capas,'Ruta',['#query-output',false],ruta_style);
	
	var paradas = execute_query(db_path,"select AsGeoJSON(pt_parada.geom), pt_parada.id_parada as id_parada, pt_parada.nombre as nombre, direccion, p_municipio.nombre as municipio from pt_parada, p_municipio, t_ruta_parada where pt_parada.id_parada = t_ruta_parada.id_parada and id_mpio = mpio_divipola and  t_ruta_parada.id_ruta= '"+id+"'",capas,'Paradas',['#query-output',false],stop);
	
	mymap.fitBounds(boundary);
		
	};