var mymap = L.map('map').setView([4.8119, -74.2341], 11);

var OpenStreetMap = L.tileLayer.provider('OpenStreetMap').addTo(mymap);

var baseMaps = {
	"OpenStreetMap": OpenStreetMap
};
var overlayMaps = {
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(mymap);

var layers = {};
var db_path = '../sqlite/rutassabana.sqlite';
var municipios = execute_query(db_path,"select AsGeoJSON(geometry), nombre from p_municipio",mymap,'Municipios',['#query-output',false],mpio_style);



