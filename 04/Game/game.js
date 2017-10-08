var gameInfoDiv = document.getElementById('gameInfo');
var gameFieldDiv = document.getElementById('gameField');
var scoreSpan = document.getElementById('score');
var levelSpan = document.getElementById('level');
var missSpan = document.getElementById('miss');
var boxDiv = document.getElementById('gameBox');


//게임 속성들
var gameLevel = 1;
var gameScore = 0;
var missBox = 0;
var setMissTime = 2500;


function moveBox() {
  var boxLeft = Math.random() * gameFieldDiv.offsetWidth;
  //게임정보 div 높이를 더하여서 인포 안에 div 못들어 가게
  var boxTop = (Math.random() * (gameFieldDiv.offsetHeight - gameInfoDiv.offsetHeight)) + gameInfoDiv.offsetHeight;

  boxDiv.style.left = parseInt(boxLeft) + "px";
  boxDiv.style.top = parseInt(boxTop) + "px";
  boxDiv.style.backgroundColor = "red";
}

//게임 시작
var missTime = setInterval(missBoxFunction, 1000);
boxDiv.addEventListener('click', function() {
  boxDiv.style.backgroundColor = "blue";
  clearInterval(missTime);
  gameRun();
  setTimeout(moveBox, 500);
  missTime = setInterval(missBoxFunction, setMissTime);
});

function gameRun() {
  gameScore += 1;

  if(gameScore%5 == 0) {
    gameLevel += 1;
    setMissTime -= 1000;
  };

  scoreSpan.innerHTML = gameScore;
  levelSpan.innerHTML = gameLevel;

  //missBox 초기화
  missBox = 0;
  missSpan.innerHTML = missBox;


}

function missBoxFunction() {
  //6개 이상이면 게임 오버
  if(missBox == 6) {
    alert("Game Over");
    missBox = 0;
    missSpan.innerHTML = missBox;
    setMissTime = 2500;
  }

  missBox += 1;
  missSpan.innerHTML = missBox;
  moveBox();
}
