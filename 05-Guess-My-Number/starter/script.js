'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'You Win!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 19;
document.querySelector('.score').textContent = 16;

document.querySelector('.guess').value = '23';
console.log((document.querySelector('.guess').value = '23'));
