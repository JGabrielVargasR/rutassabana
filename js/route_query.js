var db_path = "../sqlite/prueba.sqlite";
var thequery = "select id_ruta, nombre, distancia, origen, destino, tiempo_promedio, tarifa from l_ruta";

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
		document.getElementById('routelist').innerHTML += '<button type="button" class="btn btn-info btn-sm btn_ruta">'+name+'</button>';
		}
	}
		
xhr.send();



