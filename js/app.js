import Tweets from './Tweets.js';

const tweetInputElement = document.querySelector('#tweet');
const listaTweetElement = document.querySelector('#lista-tweets');
const formularioElement = document.querySelector('#formulario');
const tweets = new Tweets();

function addTweet(event) {
  event.preventDefault();

  const text = tweetInputElement.value.trim();

  if (!text) {
    showError('El tweet no puede estar vacio');
    return;
  };

  tweets.addTweet({ id: generateID(), text, });

  resetForm();

  showTweetsInHTML();
};

const showError = (mesasge) => {

  const errorElementExist = document.querySelector('.error');

  if (errorElementExist) return;

  const errorElement = document.createElement('p');
  errorElement.textContent = mesasge;
  errorElement.classList.add('error');
  formularioElement.appendChild(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, 3000);
};

const showTweetsInHTML = () => {

  cleanListTweetsHTML();

  tweets.tweets.forEach(tweet => {

    const li = document.createElement('li');
    li.classList.add('li');

    const textTweetElement = document.createElement('p');
    textTweetElement.textContent = tweet.text;

    const btnDeleteElement = document.createElement('p');
    btnDeleteElement.textContent = 'x';
    btnDeleteElement.classList.add('borrar-tweet');
    btnDeleteElement.href = '#';
    btnDeleteElement.onclick = (event) => {
      event.preventDefault();
      tweets.removeTweet(tweet.id);
      showTweetsInHTML();
    }

    li.appendChild(textTweetElement);
    li.appendChild(btnDeleteElement);

    listaTweetElement.appendChild(li);
  });

  updateLocalStorage();
};

const cleanListTweetsHTML = () => {
  while (listaTweetElement.firstChild) {
    listaTweetElement.removeChild(listaTweetElement.firstChild);
  };
};

const updateLocalStorage = () => localStorage.setItem('tweets', JSON.stringify(tweets.tweets));

const generateID = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

const resetForm = () => {
  tweetInputElement.value = '';
  tweetInputElement.focus();
};

document.addEventListener('DOMContentLoaded', () => {
  showTweetsInHTML();
  formularioElement.addEventListener('submit', addTweet);
});