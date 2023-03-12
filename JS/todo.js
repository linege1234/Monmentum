const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toInput = toDoList.querySelector("input");
function todoSbumit(event) {
  event.preventDefault();
  const newTodo = toInput.value;
  toInput.value = "";
  paindToDo(newTodo);
}

function paindToDo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todo;
  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", todoSbumit);
