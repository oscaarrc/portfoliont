//Cambia el idioma de la página de inglés a español (y viceversa) cada vez que se hace click en el slider
function changeLanguage() {
    //Imagen bandera
    imagen = document.getElementById("flag");


    var elementosConTexto = document.querySelectorAll('[data-es], [data-en]');
    elementosConTexto.forEach(function(elemento) {
        var textoEnEspanol = elemento.getAttribute('data-es');
        var textoEnIngles = elemento.getAttribute('data-en');
        var textoActual = elemento.innerText;

        if (textoActual === textoEnEspanol) {
            elemento.innerText = textoEnIngles;
            imagen.src = '../img/UK_flag.png';
        } else {
            elemento.innerText = textoEnEspanol;
            imagen.src = '../img/Spain_flag.png';
        }
    });
}