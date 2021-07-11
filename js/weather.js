const API_KEY = "c2554c671df904bec3e71cbcef173222";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector(".weather span:first-child");
            const city = document.querySelector(".weather span:last-child");
            weather.innerText = `Weather : ${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = `City : ${data.name}`;
        });
}
function onGeoError(){
    alert("where are you???")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);