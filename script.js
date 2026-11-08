
// MENU PARA CELULARES
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("activo");
});

// CERRAR MENU AL SELECCIONAR UNA OPCION
const enlaces = document.querySelectorAll("#menu a");

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("activo");
    });
});

// MOSTRAR ANIO ACTUAL
document.getElementById("anio").textContent =
    new Date().getFullYear();

// VALIDAR FORMULARIO
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() === "" ||
        correo.trim() === "" ||
        mensaje.trim() === "") {

        alert("Completa todos los campos");
        return;
    }

    document.getElementById("respuesta").textContent =
        "Gracias " + nombre +
        ", tu formulario fue validado correctamente.";

    formulario.reset();
});
