const API_KEY = "ec65ab8374ed35e710a62942f2d129cf";

function onGeoOk(pos) {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const nameContainer = document.querySelector("#weather span:first-child");
      const weatherContainer = document.querySelector(
        "#weather span:last-child"
      );
      nameContainer.innerText = data.name;
      weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you, no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //위치를 알려줌
