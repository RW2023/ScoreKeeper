// define variables
const p1button = document.querySelector("#p1Button");
const p2button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
let p1score = 0;
let p2score = 0;
let winningScore = 25;
let gameOver = false;
// end of variable declaration

// add click function to player 1 button
p1button.addEventListener("click", function () {
  if (!gameOver) p1score += 1;
  if (p1score === winningScore) {
    gameOver = true;
  }
  p1Display.textContent = p1score;
});

// add click function to player 2 button
p2button.addEventListener("click", function () {
  if (!gameOver) p2score += 1;
  if (p2score === winningScore) {
    gameOver = true;
  }
  p2Display.textContent = p2score;
});

// add click function to reset button
resetButton.addEventListener("click", function () {
  gameOver = false;
  p1score = 0;
  p2score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
});

// add select function to selector
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt (this.value);
});
