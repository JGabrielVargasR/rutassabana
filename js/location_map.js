var map = L.map('map').setView([4.8119, -74.2341], 11);	
var GoogleStreetMap = L.tileLayer.provider('GoogleMaps').addTo(map);

function getLocation(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		});
				
		map.locate({setView: true, maxZoom: 18});
		function onLocationFound(e) {
			var marker = L.marker(e.latlng).addTo(map);
			}
		map.on('locationfound', onLocationFound);
	}else {
		alert("Geolocation API is not supported in your browser. :(");
	}
}
