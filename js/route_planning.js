function findRoute(){
	var db_path = "../sqlite/rutassabana.sqlite";
	var origen = document.getElementById('origen').value;
	var destino = document.getElementById('destino').value;
	
	var mpio_origen = $( "#origen option:selected" ).text();
	var mpio_destino = $( "#destino option:selected" ).text();
	
	if (origen == 0 || destino == 0){
		document.getElementById('routelist').innerHTML='';
		document.getElementById('routelist').innerHTML += '<div class="alert alert-info">Elija un origen y un destino para calcular la ruta</div>';
	} else if (origen == destino){
		document.getElementById('routelist').innerHTML='';		
		document.getElementById('routelist').innerHTML += '<div class="alert alert-danger">El origen no puede ser igual al destino, cambie el origen o el destino</div>';
	} else {	
	var thequery = "select distinct l_recorridos.id_recorrido, t_segmentos_recorrido_ruta.opcion, l_recorridos.origen , l_recorridos.destino, sum(t_segmentos_recorrido_ruta.tarifa) as tarifa, l_recorridos.num_trasbordos, l_recorridos.distancia from l_recorridos, l_segmentos, t_segmentos_recorrido_ruta where l_recorridos.id_recorrido = l_segmentos.id_recorrido and l_segmentos.id_segmento = t_segmentos_recorrido_ruta.id_segmento and l_recorridos.id_recorrido = t_segmentos_recorrido_ruta.id_recorrido and l_recorridos.origen = '"+origen+"' and l_recorridos.destino = '"+destino+"' group by l_recorridos.id_recorrido, t_segmentos_recorrido_ruta.opcion order by sum(t_segmentos_recorrido_ruta.tarifa), l_recorridos.distancia limit 5";
	document.getElementById('routelist').innerHTML='';
	var xhr = new XMLHttpRequest();
	xhr.open('GET', db_path, true);
	xhr.responseType = 'arraybuffer';
	var dbfeatures = [];
	xhr.onload = function(e) {
		var uInt8Array = new Uint8Array(this.response);
		var db = new SQL.Database(uInt8Array);
		var contents = db.exec(thequery);
				
		  if (typeof contents[0] === "undefined") {
			document.getElementById('routelist').innerHTML += '<div class="alert alert-warning">No se encontraron recorridos, intente nuevamente</div>';
			}
			
		var elements = contents[0].values;
		
		for (i = 0; i < elements.length; i++) {
			var opcion = elements[i][1];
			var id = elements[i][0];
			var tarifa = elements[i][4];
			var trasbordos = elements[i][5];
			var distancia = elements[i][6];
			var op = i+1;
					
			document.getElementById('routelist').innerHTML += '<button type="button" class="btn btn-success btn-sm btn_ruta" onclick = "loadPlannedRoute('+"'"+id+"',"+opcion+')"><div class = "buttonhead"><img class="img" src="../svg/bus.svg"/></div><div class = "descrip3"><p class="descrip2"><strong>Origen: </strong>'+mpio_origen+'<br/><strong>Destino: </strong>'+mpio_destino+'</p><p class = "descrip"><strong>Tarifa: </strong>$'+tarifa+'&nbsp;&nbsp;&nbsp;&nbsp;<strong>Distancia: </strong>'+distancia+' Km</p></div></button>';
			}
		}
		
	xhr.send();
}

}

function switchRoute(){
	var db_path = "../sqlite/rutassabana.sqlite";
	var origen = document.getElementById('origen').value;
	var destino = document.getElementById('destino').value;
	
	document.getElementById('origen').value = destino;
	document.getElementById('destino').value = origen;
	
	var origen = document.getElementById('origen').value;
	var destino = document.getElementById('destino').value;

	var mpio_origen = $( "#origen option:selected" ).text();
	var mpio_destino = $( "#destino option:selected" ).text();

	if (origen == 0 || destino == 0){
		document.getElementById('routelist').innerHTML='';
		document.getElementById('routelist').innerHTML += '<div class="alert alert-info">Elija un origen y un destino para calcular la ruta</div>';
	} else if (origen == destino){
		document.getElementById('routelist').innerHTML='';		
		document.getElementById('routelist').innerHTML += '<div class="alert alert-danger">El origen no puede ser igual al destino, cambie el origen o el destino</div>';
	} else {	
	var thequery = "select distinct l_recorridos.id_recorrido, t_segmentos_recorrido_ruta.opcion, l_recorridos.origen , l_recorridos.destino, sum(t_segmentos_recorrido_ruta.tarifa) as tarifa, l_recorridos.num_trasbordos, l_recorridos.distancia from l_recorridos, l_segmentos, t_segmentos_recorrido_ruta where l_recorridos.id_recorrido = l_segmentos.id_recorrido and l_segmentos.id_segmento = t_segmentos_recorrido_ruta.id_segmento and l_recorridos.id_recorrido = t_segmentos_recorrido_ruta.id_recorrido and l_recorridos.origen = '"+origen+"' and l_recorridos.destino = '"+destino+"' group by l_recorridos.id_recorrido, t_segmentos_recorrido_ruta.opcion order by sum(t_segmentos_recorrido_ruta.tarifa), l_recorridos.distancia limit 5";
	document.getElementById('routelist').innerHTML='';
	var xhr = new XMLHttpRequest();
	xhr.open('GET', db_path, true);
	xhr.responseType = 'arraybuffer';
	var dbfeatures = [];
	xhr.onload = function(e) {
		var uInt8Array = new Uint8Array(this.response);
		var db = new SQL.Database(uInt8Array);
		var contents = db.exec(thequery);
				
		  if (typeof contents[0] === "undefined") {
			document.getElementById('routelist').innerHTML += '<div class="alert alert-warning">No se encontraron recorridos, intente nuevamente</div>';
			}
			
		var elements = contents[0].values;
		
		for (i = 0; i < elements.length; i++) {
			var opcion = elements[i][1];
			var id = elements[i][0];
			var tarifa = elements[i][4];
			var trasbordos = elements[i][5];
			var distancia = elements[i][6];
			var op = i+1;
					
			document.getElementById('routelist').innerHTML += '<button type="button" class="btn btn-success btn-sm btn_ruta" onclick = "loadPlannedRoute('+"'"+id+"',"+opcion+')"><div class = "buttonhead"><img class="img" src="../svg/bus.svg"/></div><div class = "descrip3"><p class="descrip2"><strong>Origen: </strong>'+mpio_origen+'<br/><strong>Destino: </strong>'+mpio_destino+'</p><p class = "descrip"><strong>Tarifa: </strong>$'+tarifa+'&nbsp;&nbsp;&nbsp;&nbsp;<strong>Distancia: </strong>'+distancia+' Km</p></div></button>';
			}
		}
		
	xhr.send();
}

}
