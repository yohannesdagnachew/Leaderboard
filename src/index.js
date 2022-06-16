import './style/main.css';
import { getPost } from './js/createlement.js';
import { generate } from './js/generate';

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ljmGTCiQ0bLn1cM60koG/scores';
const add = document.querySelector('#submit');
const refbtn = document.querySelector('#refresh');

generate();

const newFunc = () => {
  const user = document.querySelector('#name');
  const score = document.querySelector('#score');
  const inputFile = {
    user: user.value,
    score: score.value,
  };
  getPost(inputFile);
};

add.addEventListener('click', (e) => {
  e.preventDefault();
  newFunc();
});

refbtn.addEventListener('click', (e) => {
  e.preventDefault();
  generate();
});
