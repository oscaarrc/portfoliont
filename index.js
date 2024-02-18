// Inicializa Typed.js para crear la animación de typing en el section "index"
var type;
type= new Typed('.typed', {
    stringsElement: "#txt-variations",
    typeSpeed: 70,
    backSpeed: 100,
    backDelay:2000,
    loop: true,
    showCursor: false
    });

// Crear la animación de typing para los tres puntos en el section "projects"
var typedDots = new Typed('#viewMore-dots', {
    strings:["View more..."],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay:2000,
    loop: true,
    showCursor: true
    });





// Inicializa vanilla-tilt.js para poder crear la animación de la tarjeta en el section "About me"
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,
    speed: 1000,
    "max-glare": 0.9,
});

//Cambia el idioma de la página de inglés a español (y viceversa) cada vez que se hace click en el slider
function changeLanguage() {
    //Imagen bandera
    imagen = document.getElementById("flag");

    //Imagen titulo de proyectos
    imgProjects = document.getElementById("imgProject");
    imgProjects_REFLECT = document.getElementById("imgProject_REFLECT");

    //Imagen titulo de contacto
    imgContact = document.getElementById("imgContact");
    imgContact_REFLECT = document.getElementById("imgContact_REFLECT");

    var elementosConTexto = document.querySelectorAll('[data-es], [data-en]');
    elementosConTexto.forEach(function(elemento) {
        var textoEnEspanol = elemento.getAttribute('data-es');
        var textoEnIngles = elemento.getAttribute('data-en');
        var textoActual = elemento.innerText;

        if (textoActual === textoEnEspanol) {
            elemento.innerText = textoEnIngles;
            imagen.src = 'img/UK_flag.png';
            imgProjects.src = 'img/projects_TITLE.png';
            imgContact.src= 'img/contact_TITLE.png';
            changeText("en")
        } else {
            elemento.innerText = textoEnEspanol;
            imagen.src = 'img/Spain_flag.png';
            imgProjects.src = 'img/proyectos_TITLE.png';
            imgContact.src= 'img/contacto_TITLE.png';
            changeText("es")
        }
        imgProjects_REFLECT.src = imgProjects.src;
        imgContact_REFLECT.src = imgContact.src;
    });
}

// Modifica el contenido de #txt-variations en tiempo real
function changeText(language) {

    if(language=="es"){
        var newTextVariations = [
            "<h1>DESARROLLADOR</h1>",
            "<h1>PROGRAMADOR</h1>",
            "<h1>FULLSTACK</h1>"
        ];
        var text = "Ver más..."
        
    }
    if(language=="en"){
        var newTextVariations = [
            "<h1>DEVELOPER</h1>",
            "<h1>PROGRAMMER</h1>",
            "<h1>FULLSTACK</h1>"
        ];
        var text = "View more..."
    }
    
    document.getElementById("txt-variations").innerHTML = newTextVariations.join("");

// Destruye la instancia actual y crea una nueva con los nuevos valores
    type.destroy();
    typedDots.destroy();
    type = new Typed('.typed', {
        stringsElement: "#txt-variations",
        typeSpeed: 70,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
        showCursor: false
    });
    typedDots = new Typed('#viewMore-dots', {
        strings:[text],
        typeSpeed: 150,
        backSpeed: 150,
        backDelay:2000,
        loop: true,
        showCursor: true
        });
}

document.getElementById('submitForm').addEventListener('click', function(){
  
    let menu = document.getElementById('menu'),
        button = this;
    menu.classList.toggle('animar');
    button.classList.toggle('menu-active');
    
  });

//Comprobar que el navegador es compatible con js

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        alert('Tu navegador no es compatible con JavaScript.');
    }
});
