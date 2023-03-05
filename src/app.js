// define variables
const p1button = document.querySelector("#p1Button");
const p2button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector('#Reset');
let p1score = 0;
let p2score = 0;
let winningScore = 5;
let gameOver = false;

p1button.addEventListener("click", function () {
    if (!gameOver)
  p1score += 1;
  if (p1score === winningScore){
    gameOver = true;
}
  p1Display.textContent = p1score;
});

p2button.addEventListener("click", function () {
   if (!gameOver) p2score += 1;
   if (p2score === winningScore) {
     gameOver = true;
   }
   p2Display.textContent = p2score;
});
