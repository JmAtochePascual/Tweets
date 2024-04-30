// Variables
const tweetInputElement = document.querySelector('#tweet');
const listaTweetElement = document.querySelector('#lista-tweets');
const formularioElement = document.querySelector('#formulario');
let tweetsLocal = [];




// Funciones
const obtenerTweetsStorage = () => {
  const tweetsStorage = localStorage.getItem('tweets') || [];
};





document.addEventListener('DOMContentLoaded', () => {

  obtenerTweetsStorage();

});

