'use strict';
// Grab dom elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initialize game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Dice Rolling functions
btnRoll.addEventListener('click', function () {
  // Generate random number between 1-6 for dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display the result
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // Check if the number was 1 or other
  if (dice !== 1) {
    // add dice to currentScore
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // reset currentScore to 0 for current player
    // switch to next player
  }
});
