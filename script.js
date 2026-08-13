// ====================================
// MENSAJE DE BIENVENIDA
// ====================================

console.log("¡Bienvenido/a a mi página web personal!");


// ====================================
// BOTÓN DE INICIO
// ====================================

const boton = document.querySelector(".boton");

if (boton) {

    boton.addEventListener("click", function () {

        console.log("Visitando la sección Sobre mí");

    });

}


// ====================================
// EFECTO EN LAS IMÁGENES
// ====================================

const imagenes = document.querySelectorAll(".imagen-galeria img");

imagenes.forEach(function(imagen) {

    imagen.addEventListener("click", function() {

        alert("Has seleccionado una imagen de mi galería.");

    });

});