const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

loginButton.addEventListener("click", () => {
  const value = loginInput.value;
  console.log(value);
});
