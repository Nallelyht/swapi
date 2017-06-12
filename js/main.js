var cargarPagina = function() {
	cargarPersonajes();
};

var cargarPersonajes = function(){
	var url = 'http://swapi.co/api/people/'
	$.getJSON(url, function(response){
		console.log(response);
		var personajes = response.results;
		var total = response.count;
		mostraTotalPersonajes(total);
		mostrarPersonajes(personajes);
	});
}

	var mostrarPersonajes = function (personajes){
		var $ul = $("#personajes");
		personajes.forEach(function(personaje){
			var $li = $("<li/>");
			$li.text(personaje.name + "-" + personaje.height + " cm");
			$ul.append($li);
		});
	};


	var mostraTotalPersonajes = function(total){
		$("#total").text(total);
	};
	$(document).ready(cargarPagina);