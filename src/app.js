// define variables
const p1button = document.querySelector("#p1Button");
const p2button = document.querySelector("#p2Button");
let p1score = 0;
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector('#p2Display');


p1button.addEventListener('click', function(){
    p1score += 1;
})

