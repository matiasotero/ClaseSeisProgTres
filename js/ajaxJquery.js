function jqueryAjax(){
// Invocacion sin parametros.
// Asigna manejadores despues de la peticion
// y recuerda el objeto jqxhr de la solicitud
	var jqxhr = $.ajax("AJAX/ajax_test.php")//$ es un operador que puede contener funciones, etc.
		.done(function() {
			alert("done");
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			alert(jqXHR.responseText + "\n");
			alert(textStatus + ":\n" + errorThrown);
				console.log(errorThrown);
		})
		.always(function() {
			alert("siempre se ejecuta...");
			console.log("always()");
		});
 
// Agregar tarea...
console.log("Esto esta entre los dos always");
 
// Establece otra funci�n de finalizaci�n de la solicitud anterior
	jqxhr.always(function() {
		alert("segunda funcion de finalizacion...");
		console.log("otra always()");
	});

}

function jqueryAjaxConParametros(){

    var pagina = "AJAX/ajax_test.php";
    
	var datoString = "valor="+Math.random()*100;
	var datoObjeto = { valor: Math.random()*100 };
	
    $.ajax({
        type: 'POST',//GET o POST. GET DEFAULT.
        url: pagina,//PAGINA DESTINO DE LA PETICION
        dataType: "text",//INDICA EL TIPO QUE SE ESPERA RECIBIR DESDE EL SERVIDOR (XML, HTML, TEXT, JSON, SCRIPT) 
        data: datoString,//DATO A SER ENVIADO AL SERVIDOR. TIPO: OBJETO, STRING, ARRAY.
        async: true,//ESTABLECE EL MODO DE PETICION. DEFECTO ASINCRONICO.
		statusCode: {//CODIGO NUMERICO DE RESPUESTA HTTP
						200: function(){
							alert("200 - Encontrado!!!");
						},
						404: function(){
							alert("404 - No encontrado!!!");
						}
					}
    })
	.done(function (resultado) {//RECUPERO LA RESPUESTA DEL SERVIDOR EN 'RESULTADO', DE ACUERDO AL DATATYPE.
		$("#divResultado").html(resultado);
		console.log("done()");
	})
	.fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });    
}