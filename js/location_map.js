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
			var closest_stops = execute_query(db_path,"select asGeoJSON(pt_parada.geom), id_parada, pt_parada.nombre as nom_parada, direccion , p_municipio.nombre as municipio from pt_parada, p_municipio where pt_parada.id_mpio = p_municipio.id_mpio and st_intersects(pt_parada.geom, st_buffer(makepoint("+lon+","+lat+", 4326), 0.00903568))",capas,'Paradas',['#query-output',false],stopIcon);
			map.setView([lat, lon], 15);
			};
			
		map.on('locationfound', onLocationFound);
		
	}else {
		alert("Geolocation API is not supported in your browser. :(");
	}
}

function loadPoint(id, latitude, longitude){
	capas.clearLayers();
	var parada = execute_query(db_path,"select asGeoJSON(pt_parada.geom), id_parada, pt_parada.nombre as nom_parada, direccion , p_municipio.nombre as municipio from pt_parada, p_municipio where pt_parada.id_mpio = p_municipio.id_mpio and id_parada = '"+id+"'",capas,'Parada',['#query-output',false],stopIcon);
	map.setView([latitude, longitude], 18);
	}
	
function loadPlannedRoute(id, opcion){
	capas.clearLayers();
	var db_path = "../sqlite/rutassabana.sqlite";
	var ruta = execute_query(db_path,"select AsGeoJSON(l_segmentos.geom), t_segmentos_recorrido_ruta.id_ruta, l_ruta.nombre, t_segmentos_recorrido_ruta.tarifa from l_segmentos,  t_segmentos_recorrido_ruta, l_ruta where t_segmentos_recorrido_ruta.id_ruta = l_ruta.id_ruta and l_segmentos.id_recorrido = '"+id+"' and t_segmentos_recorrido_ruta.opcion = "+opcion+" and l_segmentos.id_recorrido = t_segmentos_recorrido_ruta.id_recorrido and l_segmentos.id_segmento = t_segmentos_recorrido_ruta.id_segmento order by l_segmentos.id_segmento",capas,'Ruta',['#query-output',false],ruta_planeada_style);

	var paradas = execute_query(db_path,"select distinct AsGeoJSON(pt_parada.geom), pt_parada.id_parada, pt_parada.nombre, pt_parada.direccion, p_municipio.nombre as municipio from pt_parada, p_municipio, l_recorridos where p_municipio.mpio_divipola = pt_parada.id_mpio and st_intersects(st_buffer(l_recorridos.geom, 0.000001), pt_parada.geom) and l_recorridos.id_recorrido = '"+id+"'",capas,'Ruta',['#query-output',false],stopIcon);

	};