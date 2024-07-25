import Tweet from './Tweet.js';
import {
  listaTweetElement,
  tweetInputElement,
  formularioElement
} from './elemetos.js';
import {
  generarId,
  mostrarAlerta,
  validarTweet
} from './funciones.js';

// Funcion que inicializa la aplicacion
function init(e) {
  e.preventDefault();

  // Capturar el valor del input
  const tituloTweet = tweetInputElement.value.trim();

  // Verificar tweet
  const esTweetValido = validarTweet(tituloTweet);


  // Mostrar mensaje de error si el tweet no es valido
  if (!esTweetValido) {
    mostrarAlerta('El tweet no puede estar vacio');
    return;
  }

  // Crear tweet
  const tweet = new Tweet(tituloTweet, generarId());

}


// Eventos
document.addEventListener('DOMContentLoaded', () => {
  formularioElement.addEventListener('submit', init);
});

