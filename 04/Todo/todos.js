function inputFunc() {
  var todoList = document.getElementById('todoUl');
  var inputText = document.getElementById('inputText').value;
  console.log(inputText);

  var todoList = generateTodoList(inputText);

  // 콘솔 로그
  return false;
}

function deleteFunc(buttonElement) {
  console.log(buttonElement);
  var liElement = buttonElement.parentElement;
  liElement.parentElement.removeChild(liElement);

  //콘솔 로그
  return false;
}

function generateTodoList(todo) {

  var todoLi = document.createElement('li');

  //li 속성값
  var cancleButton = document.createElement('button');
  cancleButton.className = "delete";
  cancleButton.setAttribute(onclick, "deleteFunc(this);");
  cancleButton.innerHTML = "x";

  var checkInput = document.createElement('input');
  checkInput.className = "toggle-checked";
  checkInput.setAttribute(type, "checkbox");

  var todoSpan = document.createElement('span');
  todoSpan.className = "text";
  todoSpan.innerHTML = todo;

  todoLi.appendChild(cancleButton);
  todoLi.appendChild(checkInput);
  todoLi.appendChild(todoSpan);

  return todoLi
}
