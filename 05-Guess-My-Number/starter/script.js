'use strict';

var number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When the input is not a number, or blank
  if (!guess) {
    displayMessage('Please enter a number');
    // When the person has guessed correctly
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    displayMessage('You Win!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high' : 'Too low');
      document.querySelector('.score').textContent = score--;
    } else {
      // When the person loses
      displayMessage('You Lose!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '??';
  document.querySelector('.score').textContent = score;
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
  number = Math.trunc(Math.random() * 20) + 1;
});
