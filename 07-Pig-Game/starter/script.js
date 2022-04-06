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
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Dice Rolling functions
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});
// Reset function
btnNew.addEventListener('click', function () {
  playing = true;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner');
  switchPlayer();
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add currentScore to  player score
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    // 2 Check if player >= 100
    // Winning condition
    if (scores[currentPlayer] >= 15) {
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
