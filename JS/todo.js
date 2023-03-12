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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paindToDo(newTodoObj);
  saveToDos();
}

function deleteToDo(event) {
  //delete
  //parentelement는 어떤 리스트인지 확인해주는거야 진짜 중요 !!!!!
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paindToDo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
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
  parsedToDos.forEach(paindToDo); //foreach 는 array에서 모든 요소들을 파라미터로 어떤함수를 계속실행하는거야
}
