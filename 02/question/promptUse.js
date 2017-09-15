var inputNumList = new Array(100);

function getNum() {
  var inputNum = prompt("더할 숫자를 넣어주세요~!");
  return inputNum
}

function setInputNumList() {
  var index = 0

  while(true) {
    var num = getNum();
    if (num !== null) {
      var parseNum = parseInt(num);
      inputNumList[index] = parseNum;
    } else if (num === null) {
      break;
    }

    index += 1;
  }
}

function showResultNum() {
  var result = 0;
  for(var i=0; i<inputNumList.length; i++) {
    if(inputNumList[i] === undefined) {break;}
    result += inputNumList[i];
  }

  alert('모두 더한값은 '+result+'');
}

(function() {
  setInputNumList()
  showResultNum()
})();
