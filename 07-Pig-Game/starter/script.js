'use strict';
// Grab dom elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

const scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let scoreHold = 0;

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
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
    // Use Hold button
  } else {
    // reset currentScore to 0 for current player
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentScore = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    scoreHold = scoreHold === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
  // Reset function
  btnNew.addEventListener('click', function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
  });

  // Winning condition
  if (current0El.textContent >= 100) {
    alert('Player 1 wins!');
  } else if (current1El.textContent >= 100) {
    alert('Player 2 wins!');
  }
});

btnHold.addEventListener('click', function () {
  // add currentScore to player's score

  if (scoreHold !== 0) {
    document.getElementById(`score--${currentPlayer}`).textContent = Number(
      currentScore + `${scoreHold}`
    );
  } else {
    currentScore = scoreHold;
    document.getElementById(`score--${currentPlayer}`).textContent = scoreHold;
  }
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  // reset currentScore to 0 for current player
  // switch to next player
});
