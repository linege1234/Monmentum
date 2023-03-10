const images = ["1.PNG", "2.PNG", "3.PNG", "4.PNG", "5.PNG"];

const chosenimg = images[Math.floor(Math.random() * images.length)];
//중요함!!
const bg = document.createElement("img");
bg.src = `img/${chosenimg}`;
console.log(bg);
document.body.appendChild(bg);
