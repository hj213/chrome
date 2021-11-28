const API_KEY = "18652cc969c8eef2aa6f22a2fde8d4d7"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const weather= document.querySelector(".weather span:last-child");
        const city= document.querySelector(".weather span:first-child");
        city.innerText = data.name;
        weather.innerText =  `, ${data.weather[0].main} ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you ! ")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);