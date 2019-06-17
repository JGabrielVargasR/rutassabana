var db_path = "../sqlite/prueba.sqlite";
var thequery = "select mpio_divip, nombre from p_municipio";

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

		document.getElementsByName('origen').innerHTML += '<option>'+name+'</option>';
		document.getElementsByName('destino').innerHTML += '<option>'+name+'</option>';
		}
	}
		
xhr.send();