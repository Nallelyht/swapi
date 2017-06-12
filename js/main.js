var cargarPagina= function() {
	cargarPersonajes();
};

var cargarPersonajes = function(){
	$.ajax("http://swapi.co/api/people/",{
		method: "GET",
		dataType: "json",
		success: function (response) {
			var personajes = response.results;
			var total = response.count;
			mostrarTotal(total);
			
			var $ul = $("#personajes");
			personajes.forEach(function(personaje){
				var $li = $("<li/>");
				$li.text(personaje.name + "-" + personaje.height + " cm");
				$ul.append($li);
				console.log(personaje.name);
			})
		},
		error: function (error) {
			console.log("error", error);
		}
	});
};

var mostrarTotal = function(total){
	$("#total").text(total);
}
$(document).ready(cargarPagina);