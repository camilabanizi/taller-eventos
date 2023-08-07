// Al tocar el div(solo lo verde) sale una alerta
const div = document.querySelector("div"); // selecciona al primer div que encuentre (como solo es uno selecciona el unico que hay)
div.addEventListener("click", function () {
	alert("Hola! Soy el div");
});

function random(event) {
	event.stopPropagation();
}
