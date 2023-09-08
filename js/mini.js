const searchBox = document.querySelector('.search')
const searchBtn = document.querySelector('.logo-dimension')


async function getWeatherDetails(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=298588574117b32be310f056decfaa4a&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);


    document.querySelector('.city').innerHTML = 'Weather in ' + data.name;
    document.querySelector('.temp').innerHTML = data.main.temp + '°C';
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
    document.querySelector('.cloud').innerHTML = data.weather[0].description;
    document.querySelector('.humidity').innerHTML = 'Humidity:' + data.main.humidity + '%';
    document.querySelector('.wind-speed').innerHTML = 'Wind speed:' + data.wind.speed + 'km/h';


}
// getWeatherDetails()


searchBtn.addEventListener('click', () => {
    getWeatherDetails(searchBox.value);
});
