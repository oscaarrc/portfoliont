class ValidadorFormulario {
  constructor(nombre, correo, mensaje) {
    this.nombre = nombre;
    this.correo = correo;
    this.mensaje = mensaje;
  }
 //Valida el nombre
  validarNombre() {
    const span = document.getElementById('nameSpan');
    if (this.nombre.trim() === "") {
      this.setError("Por favor, introduzca un nombre", "name");
      span.innerHTML = "<img class= 'errorSP' src= 'img/error.png' />" //IMAGEN ERROR
      return false;
    }
    this.setValid("¡Correcto!", "name");
    span.innerHTML = "<img class= 'errorSP' src= 'img/correct.png' />" //IMAGEN CORRECTO
    return true;
  }

  //Valida el correo
  validarCorreo() {
    const span = document.getElementById('emailSpan');
    const expresionRegularCorreo = /^[a-zA-Z0-9]{1,50}@[a-zA-Z0-9]{5,7}\.(com|es|org)$/;
    if (!expresionRegularCorreo.test(this.correo)) {
      this.setError("Por favor, introduzca un correo electrónico válido", "email");
      span.innerHTML = "<img class= 'errorSP' src= 'img/error.png' />" //IMAGEN ERROR
      return false;
    }
    this.setValid("¡Correcto!", "email");
    span.innerHTML = "<img class= 'errorSP' src= 'img/correct.png' />" //IMAGEN CORRECTO
    return true;
  }

  //Valida el mensaje
  validarMensaje() {
    const span = document.getElementById('messageSpan');
    if (this.mensaje.length < 20) {
      this.setError("El mensaje debe tener al menos 20 caracteres", "message");
      span.innerHTML = "<img class= 'errorSP' src= 'img/error.png' />" //IMAGEN ERROR
      return false;
    }
    this.setValid("¡Correcto!", "message");
    span.innerHTML = "<img class= 'errorSP' src= 'img/correct.png' />" //IMAGEN CORRECTO
    return true;
  }

  //Si es erróneo, cambia la clase a invalid
  setError(message) {
    const msg = document.getElementById('msg');
    msg.innerHTML = message;
    msg.classList.remove("valid");
    msg.classList.add("invalid");
  }

  //Si es válido, cambia la clase a valid
  setValid(message) {
    const msg = document.getElementById('msg');
    msg.innerHTML = message;
    msg.classList.remove("invalid");
    msg.classList.add("valid");
  }
}

//VALIDACIONES

//NOMBRE
function validarNombre() {
  const nombre = document.getElementById('name').value;
  const validador = new ValidadorFormulario(nombre, '', '');
  validador.validarNombre();
}

//CORREO
function validarCorreo() {
  const correo = document.getElementById('email').value;
  const validador = new ValidadorFormulario('', correo, '');
  validador.validarCorreo();
}

//MENSAJE
function validarMensaje() {
  const mensaje = document.getElementById('message').value;
  const validador = new ValidadorFormulario('', '', mensaje);
  validador.validarMensaje();
}

//ENVIAR FORMULARIO
function enviarFormulario() {
  const nombre = document.getElementById('name').value;
  const correo = document.getElementById('email').value;
  const mensaje = document.getElementById('message').value;

  const validador = new ValidadorFormulario(nombre, correo, mensaje);

  if (validador.validarNombre() && validador.validarCorreo() && validador.validarMensaje()) {
    alert('Se ha enviado correctamente');
    enviarCorreo(nombre, correo, mensaje);
    setTimeout(function() { //SET TIME OUT DE 1 SEGUNDO ANTES DE BORRAR
      document.getElementById("formEmail").reset();
    }, 1000); 
  }
}

//ENVIAR CORREO CON EMAIL.JS
function enviarCorreo(nombre, correo, mensaje) {
  emailjs.send("service_94b49j3", "template_bekpvbj", {
    email: correo,
    message: mensaje,
    from_name: nombre,
  });
  document.getElementById('msg').innerHTML = "";
  document.getElementById('nameSpan').innerHTML = "";
  document.getElementById('emailSpan').innerHTML = "";
  document.getElementById('messageSpan').innerHTML = "";
}

// Agregar evento 'keyup' para validar continuamente
document.getElementById('name').addEventListener('keyup', validarNombre);
document.getElementById('email').addEventListener('keyup', validarCorreo);
document.getElementById('message').addEventListener('keyup', validarMensaje);
