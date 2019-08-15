var mymap = L.map('map').setView([4.816465602901933, -74.23738733732634], 11);

var GoogleStreetMap = L.tileLayer.provider('GoogleMaps').addTo(mymap);

var capas = L.layerGroup().addTo(mymap);

var baseMaps = {
	"Google Maps": GoogleStreetMap,
};
var overlayMaps = {

};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(mymap);

var layers = {};
var db_path = '../sqlite/rutassabana.sqlite';
//Capas Tematicas

var corredores = execute_query(db_path,"select AsGeoJSON(geom), id_corredor, nombre from l_corredor",capas,'Corredores',['#query-output',false],corredor_style);
var municipios = execute_query(db_path,"select AsGeoJSON(geom), nombre as Municipio from p_municipio",capas,'Municipios',['#query-output',false],mpio_style);
var paradas = execute_query(db_path,"select AsGeoJSON(pt_parada.geom),pt_parada.nombre as nombre, pt_parada.direccion, p_municipio.nombre as municipio from p_municipio, pt_parada where pt_parada.id_mpio = p_municipio.id_mpio",capas,'Paraderos',['#query-output',false],stopIcon);

