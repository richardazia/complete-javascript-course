'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'You Win!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 19;
// document.querySelector('.score').textContent = 16;

// document.querySelector('.guess').value = '23';
// console.log((document.querySelector('.guess').value = '23'));

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered';
  }
});
