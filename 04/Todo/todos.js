function testfunc() {

  var inputText = document.getElementById('inputText').value;
  console.log(inputText);

  // 콘솔 로그
  return false;
}

function deletefunc(buttonElement) {
  console.log(buttonElement);
  var liElement = buttonElement.parentElement;
  liElement.parentElement.removeChild(liElement);

  //콘솔 로그
  return false;
}
