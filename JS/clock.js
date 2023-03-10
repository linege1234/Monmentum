const clock = document.querySelector("h2#clock");

function getClcock() {
  const date = new Date();
  //padstart는 string에서만 쓰는 함수이며 padstart(맥시멈 글자길이를몇으로 할것인지, 만약 글자수가 안맞다면 뭘로 하고싶은지 쓰는 함수)
  clock.innerText = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}

getClcock();
setInterval(getClcock, 1000);
