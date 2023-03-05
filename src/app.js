// define variables
const p1button = document.querySelector("#p1Button");
const p2button = document.querySelector("#p2Button");
let p1score = 0;
let p2score = 0;
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
let winningScore = 5;
let isGameOver = false;

p1button.addEventListener("click", function () {
  if (p1score !== winningScore) p1score += 1;
  p1Display.textContent = p1score;
});

p2button.addEventListener("click", function () {
  if (p2score !== winningScore) p2score += 1;
  p2Display.textContent = p2score;
});
