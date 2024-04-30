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




const listarTweets = (tweetsStorage) => {

  tweetsStorage.forEach((tweet) => {
    const botonEliminar = document.createElement('p');
    botonEliminar.classList.add('borrar-tweet');
    botonEliminar.innerText = 'X';

    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonEliminar);

    listaTweetElement.appendChild(li);
  });

}



document.addEventListener('DOMContentLoaded', () => {

  obtenerTweetsStorage();

});

