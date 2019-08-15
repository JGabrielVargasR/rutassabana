var db_path = "../sqlite/rutassabana.sqlite";
var thequery = "select id_ruta, nombre, origen, destino, distancia_km, tiempo_min, tarifa, ST_MaxX(extent(geom)) as maxx, ST_MaxY(extent(geom)) as maxy, ST_MinX(extent(geom)) as minx, ST_MinY(extent(geom)) as miny, origen, destino from l_ruta where id_ruta not in ('00') group by id_ruta order by id_ruta";

var xhr = new XMLHttpRequest();
xhr.open('GET', db_path, true);
xhr.responseType = 'arraybuffer';
var dbfeatures = [];
xhr.onload = function(e) {
	var uInt8Array = new Uint8Array(this.response);
	var db = new SQL.Database(uInt8Array);
	var contents = db.exec(thequery);
	var elements = contents[0].values;
	
	for (i = 0; i < elements.length; i++) {
		var name = elements[i][1];
		var id = elements[i][0];
		var minx = elements[i][9];
		var miny = elements[i][10];
		var maxx = elements[i][7];
		var maxy = elements[i][8];
		var bounds = "[["+miny+","+minx+"],["+maxy+","+maxx+"]]";
		var origen = elements[i][11]
		var destino = elements[i][12]
		
		document.getElementById('routelist').innerHTML += '<button type="button" class="btn btn-info btn-sm btn_ruta" onclick = "loadRoute('+"'"+id+"',"+bounds+')"><div class = "buttonhead"><img class="img" src="../svg/bus.svg"/></div><div class="descrip3"><p class="h0">'+name+'</p><p class = "descrip"><strong>Origen: </strong>'+origen+'&nbsp;&nbsp;&nbsp;&nbsp;<strong>Destino: </strong>'+destino+'</p></div></button>';
		}
	}
		
xhr.send();



