const input = document.querySelector('input');
const btn = document.querySelector('button');

const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');

const weather = document.querySelector('.weather');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure')


const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=c7c889a2270afdd479b015a9a0c03353';
const units = '&units=metric';

let $city;
let url;

const getWeather = () => {
    $city = 'Warszawa';
    url = apiLink + $city + apiKey + units;

    axios.get(url)
    .then(res => {
        console.log(res)
        temp.innerText = Math.floor(res.data.main.temp) + " °C";
        humidity.innerText = res.data.main.humidity;
        pressure.innerText = res.data.main.pressure;
        cityName.textContent = res.data.name;
        weather.innerText = res.data.weather[0].main;
        } )
}

getWeather();
