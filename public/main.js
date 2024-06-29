// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJK from '../api/promise';

const jokeButton = document.querySelector('#joke-button');
const jokeWrap = document.querySelector('#joke-wrap');

let thisJokeyJoke = '';

jokeButton.addEventListener('click', () => {
  jokeButton.innerHTML = 'I guess the jokes on you';
  getJK().then((data) => {
    jokewrap.innerHTML = data.setup;
    thisJokeyJoke = data.delivery;
  }
});