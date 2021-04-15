//get the enemy value
const enemy = document.querySelector('.enemy');
//get the player value
const player = document.querySelector('.player');
//const btn = document.querySelector('.btn');
const a = document.querySelector('.left');
const b = document.querySelector('.right');
const timer = document.querySelector('.time');
const score = document.querySelector('.score');
const level = document.querySelector('.level');

let scoreCounter = 0;
let timeCounter = 0;

let x = setInterval(function () {
  timeCounter++;
  timer.innerHTML = timeCounter;
}, 1000);

a.addEventListener("click", function () {
  moveLeft()
});

b.addEventListener("click", function () {
  moveRight()
});


// left move function

function moveLeft() {
  let left =
    parseInt(window.getComputedStyle(player).getPropertyValue('left'));
  left -= 50;
  if (left >= 0) {
    player.style.left = `${left}px`;
  }

}

// right move function
function moveRight() {
  let left =
    parseInt(window.getComputedStyle(player).getPropertyValue('left'));
  left += 50;
  if (left < 240) {
    player.style.left = `${left}px`;
  }

}
// to iterate a random value

const start = document.querySelector(".start");

window.addEventListener('animationiteration', function () {
  let random = Math.floor(Math.random() * 4);
  let randomValue = random * 25;
  enemy.style.left = randomValue + '%';
  scoreCounter++;
  if (scoreCounter > 10) {
    enemy.style.animationDuration = 1.6 + "s";
    level.innerHTML = 2;
  }
  if (scoreCounter > 20) {
    enemy.style.animationDuration = 1.2 + "s";
    level.innerHTML = 3;
  }
  if (scoreCounter > 30) {
    enemy.style.animationDuration = 0.8 + "s";
    level.innerHTML = 4;
  }

  if (scoreCounter > timeCounter) {
    level.innerHTML = 5;
    enemy.style.animationDuration = 0.6 + "s";
    level.style.color = 'red';
  }
  score.innerHTML = scoreCounter;

});




setInterval(function () {
  let playerLeft =
    parseInt(window.getComputedStyle(player).getPropertyValue('left'));
  let enemyLeft =
    parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));
  let enemyTop =
    parseInt(window.getComputedStyle(enemy).getPropertyValue('top'));
  if (playerLeft == enemyLeft && enemyTop > 300 && enemyTop < 350) {
    enemy.style.animation = 'none';
    clearInterval(x);
    alert(`Game Over!!!\n Results \n Score: ${scoreCounter} \n Time: ${timeCounter}s`);
    alert("Refresh Browser to Restart!!");
  }

}, 10);