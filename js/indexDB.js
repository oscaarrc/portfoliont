var bd;

function iniciar() {
    var boton = document.getElementById('boton');
    var borrar = document.getElementById('delete');

    boton.addEventListener('click', agregar, false);
    borrar.addEventListener('click', borrarClave, false);

    var request = indexedDB.open('deusto', 2);

    request.onsuccess = function (e) {
        bd = e.target.result;
        mostrarLibros(); // Mostrar los libros existentes al cargar la página
    }

    request.onupgradeneeded = function (e) {
        bd = e.target.result;
        bd.createObjectStore('libros', { keyPath: 'titulo' });
    }
}

function agregar() {
    var tituloInput = document.getElementById('titulo');
    var isbnInput = document.getElementById('isbn');
    var autorInput = document.getElementById('autor');
    var anoInput = document.getElementById('ano');

    var titulo = tituloInput.value;
    var isbn = isbnInput.value;
    var autor = autorInput.value;
    var ano = anoInput.value;

    // Comprobar si el libro ya existe en la base de datos
    var transaction = bd.transaction(['libros'], 'readonly');
    var objectStore = transaction.objectStore('libros');
    var request = objectStore.get(titulo);

    request.onsuccess = function (e) {
        var existingLibro = e.target.result;

        if (existingLibro) {
            alert('El libro ya existe en la base de datos');
        } else {
            // Si el libro no existe, proceder con la adición
            var nuevoLibro = { titulo: titulo, isbn: isbn, autor: autor, ano: ano };
            
            var transactionAdd = bd.transaction(['libros'], 'readwrite');
            var objectStoreAdd = transactionAdd.objectStore('libros');
            var addRequest = objectStoreAdd.add(nuevoLibro);

            addRequest.onsuccess = function (e) {
                alert('Registro guardado con éxito en la base de datos');
                 // Vaciar los campos de entrada
                 tituloInput.value = '';
                 isbnInput.value = '';
                 autorInput.value = '';
                 anoInput.value = '';
                mostrarLibros(); // Actualizar la lista de libros al agregar uno nuevo
            }

            addRequest.onerror = function (e) {
                alert('Error al intentar guardar el registro en la base de datos');
            }
        }
    }

    request.onerror = function (e) {
        alert('Error al intentar verificar si el libro existe en la base de datos');
    }
}


function mostrarLibros() {
    var transaction = bd.transaction(['libros'], 'readonly');
    var objectStore = transaction.objectStore('libros');
    
    var listaLibros = document.getElementById('listaLibros');
    listaLibros.innerHTML = ''; // Limpiar la lista antes de mostrar los registros

    var cursorRequest = objectStore.openCursor();

    cursorRequest.onsuccess = function (e) {
        var cursor = e.target.result;

        if (cursor) {
            var libro = cursor.value;
            var li = document.createElement('li');
            li.innerHTML= `<h4>Título: ${libro.titulo}</h4><br>- ISBN: ${libro.isbn}<br>- Autor: ${libro.autor}<br>- Año: ${libro.ano}`;
            listaLibros.appendChild(li);

            cursor.continue();
        }    }
}

window.addEventListener('load', iniciar, false);