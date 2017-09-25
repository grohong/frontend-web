var wrapDiv = document.createElement('div');
wrapDiv.style.border = "1px solid black";
wrapDiv.style.width = "400px";
wrapDiv.style.height = "400px";

document.body.appendChild(wrapDiv);


var blockDivs = [16];

for(var i=0; i<16; i++){
  blockDivs[i] = document.createElement('div');
  blockDivs[i].style.width = "100px";
  blockDivs[i].style.height = "100px";
  blockDivs[i].style.float = "left"
}

var beforeTarget = blockDivs[0];
var beforeTargetColor = 'white';

function changeColor(event) {
  console.log('changeBy')
  console.log(event.currentTarget);
  beforeTarget.style.backgroundColor = beforeTargetColor;
  beforeTargetColor = event.currentTarget.style.backgroundColor;
  event.currentTarget.style.backgroundColor = 'red';
  beforeTarget = event.currentTarget;
}

var j=0
for(var i=0; i<16; i++) {
  if((parseInt(j/4))%2 == 0){
    if(i%2==0) {
      blockDivs[i].style.backgroundColor = "white";
      wrapDiv.appendChild(blockDivs[i]);
    } else {
      blockDivs[i].style.backgroundColor = "black";
      wrapDiv.appendChild(blockDivs[i]);
    }
  } else {
    if(i%2==0) {
      blockDivs[i].style.backgroundColor = "black";
      wrapDiv.appendChild(blockDivs[i]);
    } else {
      blockDivs[i].style.backgroundColor = "white";
      wrapDiv.appendChild(blockDivs[i]);
    }
  }
  j++;

  blockDivs[i].addEventListener('click', changeColor)
}
