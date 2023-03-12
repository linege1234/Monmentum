const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function todoSbumit(event) {
  event.preventDefault();
  const newTodo = toInput.value;
  toInput.value = "";
  toDos.push(newTodo);
  paindToDo(newTodo);
  saveToDos();
}

function deleteToDo(event) {
  //delete
  //parentelement는 어떤 리스트인지 확인해주는거야 진짜 중요 !!!!!
  const li = event.target.parentElement;
  li.remove();
}

function paindToDo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo); //이건 이벤트가 나오기를 기다리고 있는 함수
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", todoSbumit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //json.parse 모두 오브젝트화 시켜줌/오브젝트는 foreach 가능
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paindToDo);
}
