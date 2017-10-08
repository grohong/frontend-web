var gameInfoDiv = document.getElementById('gameInfo');
var gameFieldDiv = document.getElementById('gameField');
var scoreSpan = document.getElementById('score');
var levelSpan = document.getElementById('level');
var missSpan = document.getElementById('miss');
var boxDiv = document.getElementById('gameBox');


//게임 속성들
var gameLevel = 1
var gameScore = 0
var missBox = 0
// var endBox = 6

function moveBox() {
  var boxLeft = Math.random() * gameFieldDiv.offsetWidth;
  //게임정보 div 높이를 더하여서 인포 안에 div 못들어 가게
  var boxTop = (Math.random() * (gameFieldDiv.offsetHeight - gameInfoDiv.offsetHeight)) + gameInfoDiv.offsetHeight;

  boxDiv.style.left = parseInt(boxLeft) + "px";
  boxDiv.style.top = parseInt(boxTop) + "px";
  boxDiv.style.backgroundColor = "red";
}

boxDiv.addEventListener('click', function() {
  boxDiv.style.backgroundColor = "blue";
  setTimeout(moveBox, 100);
  gameRun();
});

function gameRun() {
  gameScore += 1;
  scoreSpan.innerHTML = gameScore;
  levelSpan.innerHTML = gameLevel;
  missSpan.innerHTML = missBox;
}
