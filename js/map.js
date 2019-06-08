var mymap = L.map('map').setView([4.8119, -74.2341], 11);

var OpenStreetMap = L.tileLayer.provider('OpenStreetMap').addTo(mymap);
var GoogleStreetMap = L.tileLayer.provider('GoogleMaps').addTo(mymap);
var GoogleTrafficMap = L.tileLayer.provider('GoogleTraffic').addTo(mymap);

var baseMaps = {
	"OpenStreetMap": OpenStreetMap,
	"Google Maps": GoogleStreetMap,
	"Google Traffic": GoogleTrafficMap,
};
var overlayMaps = {
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(mymap);