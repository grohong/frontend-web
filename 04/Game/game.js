var gameFieldDiv = document.getElementById('gameField');
var scoreSpan = document.getElementById('score');
var levelSpan = document.getElementById('level');
var missSpan = document.getElementById('miss');

function createBox() {
  var boxDiv = document.createElement('div');
  boxDiv.setAttribute("id", "gameBox")

  return boxDiv
}

var box = createBox();
gameFieldDiv.appendChild(box)
