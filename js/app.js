import {
  listaTweetElement,
  tweetInputElement,
  formularioElement
} from './elemetos.js';
import { validarTweet } from './funciones.js';

// Funcion que inicializa la aplicacion
function init(e) {
  e.preventDefault();

  // Capturar el valor del input
  const tituloTweet = tweetInputElement.value.trim();

  // Verificar tweet
  const esTweetValido = validarTweet(tituloTweet);

}

document.addEventListener('DOMContentLoaded', () => {
  formularioElement.addEventListener('submit', init);
});

