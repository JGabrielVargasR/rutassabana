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

function loadPoint(id, latitude, longitude){
	var ruta = execute_query(db_path,"select asGeoJSON(geom), id_parada, pt_parada.nombre as nom_parada, direccion , p_municipio.nombre as nom_mpio from pt_parada, p_municipio where id_mpio = mpio_divip and id_parada = '"+id+"'",map,'Parada',['#query-output',false],markerIcon);
	map.setView([latitude, longitude], 18);
	}