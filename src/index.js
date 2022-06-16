import './style/main.css';
import { getPost } from './js/createlement.js';
import { generate } from './js/generate';

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
  user.value = ''
  score.value= ''
};

add.addEventListener('click', (e) => {
  e.preventDefault();
  newFunc();
});

refbtn.addEventListener('click', (e) => {
  e.preventDefault();
  generate();
});




    
