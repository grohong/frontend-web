var gameInfoDiv = document.getElementById('gameInfo');
var gameFieldDiv = document.getElementById('gameField');
var scoreSpan = document.getElementById('score');
var levelSpan = document.getElementById('level');
var missSpan = document.getElementById('miss');
var boxDiv = document.getElementById('gameBox');

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
  console.log("click");
  setTimeout(moveBox, 100);
});
