// Variables
const tweetInputElement = document.querySelector('#tweet');
const listaTweetElement = document.querySelector('#lista-tweets');
const formularioElement = document.querySelector('#formulario');


// Funciones
// Obtener tweets del local storage
const obtenerTweetsStorage = () => {
  const tweetsStorage = JSON.parse(localStorage.getItem('tweets')) || [];
  return tweetsStorage;
};


// Lista los tweets
const listarTweets = () => {
  limpiarHtml();

  const tweetsStorage = obtenerTweetsStorage();

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

  if (!validarTweet(tweet)) {
    mostarAlert('El tweet no puede estar vacío');
    return;
  }

  eliminarAlerta();

  enviarTweetsLocalStorage(tweet);

  limpiarInput();

  listarTweets();
};


// Valida que el tweet no esté vacío
const validarTweet = (tweet) => {
  return tweet.trim() != '' ? true : false;
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


//  Enviar tweets a Local Storage
const enviarTweetsLocalStorage = (tweet) => {
  const tweetsStorage = obtenerTweetsStorage();
  const newTweetsStorage = [...tweetsStorage, tweet];
  localStorage.setItem('tweets', JSON.stringify(newTweetsStorage));
};


// Limpia el html de los tweets mostrados en pantalla
const limpiarHtml = () => {
  while (listaTweetElement.firstChild) {
    listaTweetElement.firstChild.remove();
  }
};


//  Limpia el input de los tweets
const limpiarInput = () => {
  tweetInputElement.value = '';
};


// Elimina un tweet
const eliminarTweet = (event) => {
  if (event.target.className === 'borrar-tweet') {
    const tweet = event.target.parentElement.textContent.slice(0, -1);
    const newTweetsStorage = obtenerTweetsStorage().filter((tweetName) => tweetName !== tweet);

    localStorage.setItem('tweets', JSON.stringify(newTweetsStorage));

    listarTweets();
  }
};


// Carga los eventos
document.addEventListener('DOMContentLoaded', () => {

  listarTweets();
  formularioElement.addEventListener('submit', agregarTweet);
  listaTweetElement.addEventListener('click', eliminarTweet);
});

