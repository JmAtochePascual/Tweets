import { eliminarTweet } from "./app.js";
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

  // Limpiar html
  limpiarHtml();

  tweets.forEach(tweet => {
    const { titulo, id } = tweet;

    // Crear elementos 
    const li = document.createElement('li');
    li.classList.add('li');

    const tituloTweet = document.createElement('p');
    tituloTweet.textContent = titulo;


    const btnEliminar = document.createElement('p');
    btnEliminar.textContent = 'x';
    btnEliminar.classList.add('borrar-tweet');
    btnEliminar.href = '#';
    btnEliminar.onclick = () => {
      eliminarTweet(id);
    };


    // Agregar contenido al li
    li.appendChild(tituloTweet);
    li.appendChild(btnEliminar);

    // Agregar al ul
    listaTweetElement.appendChild(li);
  });
};


// Limpiar html
const limpiarHtml = () => {
  while (listaTweetElement.firstChild) {
    listaTweetElement.removeChild(listaTweetElement.firstChild);
  }
};

export {
  validarTweet,
  mostrarAlerta,
  generarId,
  listarTweets
}