'use strict';

//NOTE: returns a random number
const randNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = randNumber();
let score = 20;
let highscore = 0;

document.querySelector('.btn-check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  //NOTE: when there's no input
  if (!guessNumber) {
    displayMessage('Please enter a number!');

    //NOTE: when guess is correct
  } else if (guessNumber === secretNumber) {
    displayMessage('Correct!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNumber > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('Loser! Try Again');
    }
  }
});

//NOTE: reset the game
document.querySelector('.btn-again').addEventListener('click', function () {
  score = 20;
  secretNumber = randNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#171717';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
