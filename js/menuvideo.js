$(document).ready(function() {
    var video = document.getElementById('video');
    var volumeControl = document.getElementById('volume');
    var progressBar = document.getElementById('progressBar');

    var menuvideo = $('#menuvideo');
    var pausa = $('#pausa');
    var controles = $('#controles');
    var inicio = $('#inicio');
    var retroceder = $('#retroceder');
    var avanzar = $('#avanzar');
    var fin = $('#fin');
    var fullscreen = $('#fullscreen');
    var hamiltonn = $('#hamilton');
    var lalalandd = $('#lalaland');
    var dearEvanHansenn = $('#dearEvanHansen');

    $(menuvideo).on('mouseover', mostrarMenu);
    $(menuvideo).on('mouseout', ocultarMenu);
    $(pausa).on("click", pausarVideo);
    $(inicio).on("click", iniciovideo);
    $(fin).on("click", finvideo);
    $(retroceder).on("click", retrocederVideo);
    $(avanzar).on("click", avanzarVideo);
    $(fullscreen).on("click", toggleFullscreen);
    $(hamiltonn).on("click", hamilton);
    $(lalalandd).on("click", lalaland);
    $(dearEvanHansenn).on("click", dearEvanHansen);


    //Controlar volumen
    volumeControl.oninput = function() {
        video.volume = volumeControl.value;
    };

    //Barra que indica en que segundo se encuentra el vídeo (progress bar)
    video.addEventListener('timeupdate', function() {
        var value = (video.currentTime / video.duration) * 100;
        progressBar.value = value;
    });

    //Ocultar menú del vídeo
    function ocultarMenu() {
        $(controles).css('animation', 'animacion1 1s forwards');
    }
    //Mostrar menú del vídeo
    function mostrarMenu() {
        $(controles).css('animation', 'animacion2 1s forwards');
    }

    //Pausar vídeo
    function pausarVideo() {
        if (video.paused) {
            video.play();
            $(pausa).html(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            </svg>`);
        } else {
            video.pause();
            $(pausa).html(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 4v16l13 -8z" />
            </svg>`);
        }
    }

    function retrocederVideo() {
        video.currentTime -= 10;
    }

    function avanzarVideo() {
        video.currentTime += 10;
    }


    function iniciovideo() {
        video.currentTime = 0;
    }

    function finvideo() {
        video.currentTime = video.duration;
        $(pausa).html(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 4v16l13 -8z" />
            </svg>`);
    }

    //Cambia al vídeo lalaland
    function lalaland() {
        video.src = "../img/musical_lalaland.mp4";
        $(pausa).html(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            </svg>`);
        video.play();
    }
    //Cambia al vídeo dearEvanHansen
    function dearEvanHansen() {
        video.src = "../img/musical_dearEvanHansen.mp4";
        $(pausa).html(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            </svg>`);
        video.play();
    }

    //Cambia al vídeo de hamilton
    function hamilton(){
        video.src = "../img/musical_hamilton.mp4";
        $(pausa).html(`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            </svg>`);
        
        video.play();
    }


      // Función para poner el vídeo en pantalla completa
    function toggleFullscreen() {
        if (video.requestFullscreen) {
        video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari & Opera
        video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
        }
    }
});