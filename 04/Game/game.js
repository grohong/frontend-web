var gameFieldDiv = document.getElementById('gameField');
var scoreSpan = document.getElementById('score');
var levelSpan = document.getElementById('level');
var missSpan = document.getElementById('miss');

function moveBox() {
  var boxDiv = document.getElementById('gameBox');

  var boxLeft = Math.random() * gameFieldDiv.offsetWidth;
  console.log(boxLeft);
  console.log(boxDiv);
  // boxDiv.setAttribute("left", parseInt(boxLeft));
  boxDiv.style.left = parseInt(boxLeft) + "px";

}

moveBox();
