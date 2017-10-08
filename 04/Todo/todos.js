var todoList = document.getElementById('todoUl');

function inputFunc() {
  var inputText = document.getElementById('inputText').value;

  var li = generateTodoList(inputText);
  todoList.appendChild(li);

  // 콘솔 로그
  return false;
}

function deleteFunc(buttonElement) {
  var liElement = buttonElement.parentElement;
  liElement.parentElement.removeChild(liElement);

  //콘솔 로그
  return false;
}

function generateTodoList(todo) {

  var todoLi = document.createElement('li');

  //li 속성값
  var cancelButton = document.createElement('button');
  cancelButton.className = "delete";
  cancelButton.setAttribute("onclick", "deleteFunc(this);");
  cancelButton.innerHTML = "x";

  var checkInput = document.createElement('input');
  checkInput.className = "toggle-checked";
  checkInput.setAttribute("type", "checkbox");

  var todoSpan = document.createElement('span');
  todoSpan.className = "text";
  todoSpan.innerHTML = todo;

  todoLi.appendChild(cancelButton);
  todoLi.appendChild(checkInput);
  todoLi.appendChild(todoSpan);

  return todoLi;
}
