var wrap = document.getElementById('wrap');


// var blockBlack =
//
//
// var blockWhite = document.createElement('div');
// blockWhite.style.border = "1px solid black"
// blockWhite.style.backgroundColor = "white"
// blockWhite.style.width = "100px"
// blockWhite.style.height = "100px"

var blockBlackList = [8];
var blockWhiteList = [8];

for(var i=0; i<8; i++){
  blockBlackList[i] = document.createElement('div');
  blockBlackList[i].style.border = "1px solid black"
  blockBlackList[i].style.backgroundColor = "black"
  blockBlackList[i].style.width = "100px"
  blockBlackList[i].style.height = "100px"
  blockBlackList[i].style.float = "left"
  blockWhiteList[i] = document.createElement('div');
  blockWhiteList[i].style.border = "1px solid white"
  blockWhiteList[i].style.backgroundColor = "white"
  blockWhiteList[i].style.width = "100px"
  blockWhiteList[i].style.height = "100px"
  blockWhiteList[i].style.float = "left"
}

function changeBg(event) {
  beforeTarget.style.backgroundColor = beforeTargetColor;
  beforeTargetColor = event.currentTarget.style.backgroundColor;
  event.currentTarget.style.backgroundColor = 'red';
  beforeTarget = event.currentTarget;
}

var j=0
for(var i=0; i<16; i++) {
  if((parseInt(j/4))%2 == 0){
    if(i%2==0) {
      wrap.appendChild(blockBlackList[parseInt(i/2)]);
    } else {
      wrap.appendChild(blockWhiteList[parseInt(i/2)]);
    }
  } else {
    if(i%2==0) {
      wrap.appendChild(blockWhiteList[parseInt(i/2)]);
    } else {
      wrap.appendChild(blockBlackList[parseInt(i/2)]);
    }
  }
  j++;
}
