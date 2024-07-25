import Tweet from './Tweet.js';
import {
  tweetInputElement,
  formularioElement
} from './elemetos.js';
import {
  generarId,
  listarTweets,
  mostrarAlerta,
  validarTweet
} from './funciones.js';

// Variables
let tweets = [];


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


  // Agregar tweet al array de tweets
  tweets = [...tweets, tweet.getTweet()];


  // listar tweets
  listarTweets(tweets);

  // Formatear el formulario
  formularioElement.reset();
}

// Eliminar tweet
function eliminarTweet(id) {
  tweets = tweets.filter(tweet => tweet.id !== id);
  listarTweets(tweets);
}


// Eventos
document.addEventListener('DOMContentLoaded', () => {
  formularioElement.addEventListener('submit', init);
  listarTweets(tweets);
});

export {
  eliminarTweet
};