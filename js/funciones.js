import { formularioElement, listaTweetElement } from "./elemetos.js";


// Verificar tweet
const validarTweet = (titulo) => titulo !== '' ? true : false;


// Mostrar mensaje de error
const mostrarAlerta = (mensaje) => {

  // Verificar si ya existe un mensaje de error
  const existemMensajeDeError = document.querySelector('.error');
  if (existemMensajeDeError) return;

  // Crear mensaje de error
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('error');

  // Insertar mensaje de error
  formularioElement.appendChild(mensajeError);

  // Eliminar mensaje de error
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
};

// Generar un id unico
const generarId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

// Listar tweets en pantalla
const listarTweets = (tweets) => {

};


export {
  validarTweet,
  mostrarAlerta,
  generarId
}