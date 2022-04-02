'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'You Win!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 19;
// document.querySelector('.score').textContent = 16;

// document.querySelector('.guess').value = '23';
// console.log((document.querySelector('.guess').value = '23'));

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When the input is not a number, or blank
  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered';
    // When the person has guessed correctly
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'You Win!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Too high
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high';
      document.querySelector('.score').textContent = score--;
    } else {
      // When the person loses
      document.querySelector('.message').textContent = 'You Lose!';
      document.querySelector('.score').textContent = 0;
    }
    // Tow low
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low';
      document.querySelector('.score').textContent = score--;
    } else {
      // When the person loses
      document.querySelector('.message').textContent = 'You Lose!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
