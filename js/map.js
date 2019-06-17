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
var db_path = '../sqlite/prueba.sqlite';
var municipios = execute_query(db_path,"select AsGeoJSON(Geometry), nombre from p_municipio",capas,'Municipios',['#query-output',false],mpio_style);