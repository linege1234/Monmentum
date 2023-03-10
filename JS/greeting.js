const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const link = document.querySelector("a");

link.addEventListener("click", (info) => {
  info.preventDefault(); //이벤트 함수의 파라미터는 이벤트의 정보를 가지고 있기떄문에 default 함수 즉 브라우저가 직접 해야하는 함수 실행을 막을수가 있어
  console.dir(info);
});

//보통 이벤트리스너에서 나오는 파라미터는 이벤트의 정보를 담겨져 있어
function onLogin(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintgreetings(username);
}

function paintgreetings(username) {
  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLogin);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintgreetings(savedName);
}
