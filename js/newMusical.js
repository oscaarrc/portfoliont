//INDEXDB
document.addEventListener('DOMContentLoaded', function() {
    let db;
    const request = window.indexedDB.open('musicalsDB', 1);

    request.onerror = function() {
        console.error('Error al abrir la base de datos.');
    };

    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        const objectStore = db.createObjectStore('musicals', { keyPath: 'id', autoIncrement:true });
        objectStore.createIndex('title', 'title', { unique: false });
        objectStore.createIndex('composer', 'composer', { unique: false });
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        displayMusicals();
    };

    function addMusical(title, composer) {
        const transaction = db.transaction(['musicals'], 'readwrite');
        const objectStore = transaction.objectStore('musicals');
        const newMusical = { title, composer };

        const request = objectStore.add(newMusical);
        request.onsuccess = function() {
            displayMusicals();
        };
    }

    function displayMusicals() {
        const objectStore = db.transaction('musicals').objectStore('musicals');
        const musicalList = document.getElementById('musical-list');
        musicalList.innerHTML = '';
    
        objectStore.openCursor().onsuccess = function(event) {
            const cursor = event.target.result;
            if (cursor) {
                const li = document.createElement('li');
                li.innerHTML = `<span>Título:</span> ${cursor.value.title}<br><span>Compositor:</span> ${cursor.value.composer}`;
                
                // Botón de eliminar
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.onclick = function() {
                    deleteMusical(cursor.key);
                };
                li.appendChild(deleteButton);
    
                musicalList.appendChild(li);
                
                cursor.continue();
            }
        };
    }
    
    function deleteMusical(key) {
        const transaction = db.transaction(['musicals'], 'readwrite');
        const objectStore = transaction.objectStore('musicals');
        const request = objectStore.delete(key);
        
        request.onsuccess = function() {
            displayMusicals();
        };
    }
    

    document.getElementById('musical-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const composer = document.getElementById('composer').value;
        addMusical(title, composer);
        document.getElementById('title').value = '';
        document.getElementById('composer').value = '';
    });

    
});
