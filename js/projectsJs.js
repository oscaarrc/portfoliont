function filtrarProyectos(lenguaje) {
    var proyectos = document.getElementsByClassName('product');

    for (var i = 0; i < proyectos.length; i++) {
        var proyecto = proyectos[i];
        var proyectoLenguaje = proyecto.getAttribute('data-lenguaje');

        if (lenguaje === 'todos' || proyectoLenguaje === lenguaje) {
            proyecto.style.display = 'inline-block';
        } else {
            proyecto.style.display = 'none';
        }
    }
}

document.getElementById('button').addEventListener('click', function(){
  
  let menu = document.getElementById('menu'),
      button = this;
  menu.classList.toggle('animar');
  button.classList.toggle('menu-active');
  
});