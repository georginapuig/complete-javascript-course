'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// rolling dice functionality
btnRoll.addEventListener('click', function() {
  // 1. generating a random dice roll
  let diceNum = Math.trunc((Math.random() * 6) + 1);
  console.log(diceNum);
  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src=`dice-${diceNum}.png`;
  // 3. checked for rolled 1: if true, switch to next player
});
