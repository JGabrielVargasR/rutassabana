var map = L.map('map').setView([4.8119, -74.2341], 11);	
var GoogleStreetMap = L.tileLayer.provider('GoogleMaps').addTo(map);

var capas = L.layerGroup().addTo(map);

function getLocation(){
	capas.clearLayers();
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		});
				
		map.locate({setView: true, maxZoom: 14});
		function onLocationFound(e) {
			var marker = L.marker(e.latlng, {icon: locationIcon}).addTo(capas);
			var lat = e.latlng.lat;
			var lon = e.latlng.lng;
			var circle = L.circle(e.latlng, {fillColor: '#A8CF45', fillOpacity: 0.25, color: '#00A859', weight: 2, radius: 1000}).addTo(capas);
			var closest_stops = execute_query(db_path,"select asGeoJSON(pt_parada.geom), id_parada, pt_parada.nombre as nom_parada, direccion , p_municipio.nombre as nom_mpio from pt_parada, p_municipio where id_mpio = mpio_divipola and st_intersects(pt_parada.geom, st_buffer(makepoint("+lon+","+lat+", 4326), 0.00903568))",capas,'Paradas',['#query-output',false],stopIcon);
			map.setView([lat, lon], 15);
			};
			
		map.on('locationfound', onLocationFound);
		
	}else {
		alert("Geolocation API is not supported in your browser. :(");
	}
}

function loadPoint(id, latitude, longitude){
	capas.clearLayers();
	var parada = execute_query(db_path,"select asGeoJSON(pt_parada.geom), id_parada, pt_parada.nombre as nom_parada, direccion , p_municipio.nombre as nom_mpio from pt_parada, p_municipio where id_mpio = mpio_divipola and id_parada = '"+id+"'",capas,'Parada',['#query-output',false],stopIcon);
	map.setView([latitude, longitude], 18);
	}