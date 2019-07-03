var db_path = "../sqlite/rutassabana.sqlite";
var thequery = "select id_parada, pt_parada.nombre as nom_parada, direccion , p_municipio.nombre as nom_mpio, ST_X(pt_parada.geom) as longitude, ST_Y(pt_parada.geom) as latitude from pt_parada, p_municipio  where id_mpio = mpio_divipola order by id_parada";

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
		var mpio = elements[i][3];
		var latitude = elements[i][5];
		var longitude = elements[i][4];
		
		document.getElementById('routelist').innerHTML += '<button type="button" class="btn btn-warning btn-sm btn_parada" onclick="loadPoint('+"'"+id+"',"+latitude+","+longitude+')">'+'<p class="h0">'+name+'</p>'+'<p class="descrip">Municipio: '+mpio+'</p>'+'</button>';
		}
	}
		
xhr.send();



