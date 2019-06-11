var mymap = L.map('map').setView([4.8119, -74.2341], 11);

var GoogleStreetMap = L.tileLayer.provider('GoogleMaps').addTo(mymap);

var baseMaps = {
	"Google Maps": GoogleStreetMap,
};
var overlayMaps = {
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(mymap);

var layers = {};
var db_path = '../sqlite/prueba.sqlite';
var municipios = execute_query(db_path,"select AsGeoJSON(Geometry), nombre from p_municipio",mymap,'Municipios',['#query-output',false],mpio_style);
