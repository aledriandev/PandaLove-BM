var contenedor = document.getElementById('contenedor-imagenes-panda');
var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

for (var i = 0; i < pictures.length; i++) {
	var picture = document.createElement("img");
	picture.src = pictures[i];
	picture.setAttribute('class', 'picture-panda');
	contenedor.appendChild(picture);
}