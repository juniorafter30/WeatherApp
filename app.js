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
    $city = (!input.value) ? 'New York' : input.value;
    url = apiLink + $city + apiKey + units;

    axios.get(url)
    .then(res => {
        temp.innerText = Math.floor(res.data.main.temp) + " °C";
        humidity.innerText = res.data.main.humidity + '%';
        pressure.innerText = res.data.main.pressure + ' hPa';
        cityName.textContent = res.data.name;
        weather.innerText = res.data.weather[0].main;
        input.value = '';
        warning.textContent = '';

        const imageId = res.data.weather[0].id;
        
        if(imageId >= 200 && imageId <= 299){
            photo.setAttribute('src', 'images/thunderstorm.png')
        } else if(imageId >= 300 && imageId <= 399) {
            photo.setAttribute('src', 'images/drizle.png')
        }else if (imageId >= 500 && imageId <= 599) {
            photo.setAttribute('src', 'images/rain.png')
        }else if (imageId >= 600 && imageId <= 699) {
            photo.setAttribute('src', 'images/ice.png')
        }else if (imageId >= 700 && imageId <= 799) {
            photo.setAttribute('src', 'images/fog.png')
        }else if (imageId = 800 ){
            photo.setAttribute('src', 'images/sun.png')  
        }else if (imageIf >= 801 && imageId <= 899) {
             photo.setAttribute('src', 'images/cloud.png')
        }else {
            photo.setAttribute('src', 'images/unknown.png')
        };
        
        
        
        })
        


    
};
getWeather();
btn.addEventListener('click', getWeather);

