// Variables
const tweetInputElement = document.querySelector('#tweet');
const listaTweetElement = document.querySelector('#lista-tweets');
const formularioElement = document.querySelector('#formulario');
let tweetsLocal = [];




// Funciones
// Obtener tweets del local storage
const obtenerTweetsStorage = () => {
  const tweetsStorage = localStorage.getItem('tweets') || [];

  listarTweets(tweetsStorage);
};





// Lista los tweets
const listarTweets = (tweetsStorage) => {

  if (tweetsStorage.length) {

    tweetsStorage.forEach((tweet) => {
      const botonEliminar = document.createElement('p');
      botonEliminar.classList.add('borrar-tweet');
      botonEliminar.innerText = 'X';

      const li = document.createElement('li');
      li.innerText = tweet;
      li.appendChild(botonEliminar);

      listaTweetElement.appendChild(li);
    });

    return;
  }

  const mensaje = document.createElement('p');
  mensaje.innerText = 'No hay tweets para mostrar';
  listaTweetElement.appendChild(mensaje);
};





// agregar tweet a Local Storage
const agregarTweet = (event) => {

  event.preventDefault();

  const tweet = tweetInputElement.value;

  if (tweet.trim() === '') {
    mostarAlert('El tweet no puede estar vacío');
    return;
  }

  eliminarAlerta();
};





// Muestra un mensaje de error
const mostarAlert = (mensaje) => {

  const alerta = document.createElement('p');
  alerta.classList.add('error');
  alerta.textContent = mensaje;

  formularioElement.appendChild(alerta);
};





// Elimina el mensaje de error
const eliminarAlerta = () => {

  const alerta = document.querySelector('.error');

  if (alerta) alerta.remove();
};




// Eventos
document.addEventListener('DOMContentLoaded', () => {

  obtenerTweetsStorage();

  formularioElement.addEventListener('submit', agregarTweet);

});

