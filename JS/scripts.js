


console.log('javascript connected!');

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

/* Part-1
// when the pause button is clicked, pause the carousel
 const carouselPause =  document.getElementById('carouselPause');
carouselPause.addEventListener('click', function() {
    console.log('pausing the carousel');
    carousel.pause();
})

// when the play button is clicked, begin cycling through the images
const carouselPlay = document.getElementById('carouselPlay');
carouselPlay.addEventListener('click', function() {
    console.log('cycle the carousel');
    carousel.cycle();
}) */

// Part-2
const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function() {
    if(faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

// fetching weather from weatherAPI
async function fetchWeather() {
    console.log("hello");
    const apiKey = process.env.OPEN_WEATHER_API_KEY
    let city = "Seattle";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try{
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    }
    catch(error){
        console.log("There was an error!", error);
    }
}
fetchWeather();

function displayWeather(data) {
     const weatherIconDiv = document.querySelector('#weather-icon');
     const description = data["weather"][0].description;
     const icon = data["weather"][0].icon;
     const temperature = data.main.temp;

     const weatherImage = document.createElement('img');
     weatherImage.src = `https://openweathermap.org/img/w/${icon}.png`;
     weatherImage.alt = "weather image";
     weatherIconDiv.appendChild(weatherImage);

     const weatherTempDiv = document.querySelector('#weather-temp');
     const temp = document.createElement('p');
     temp.textContent = temperature + '\u00B0';
     weatherTempDiv.appendChild(temp);

     const weatherDescriptionDiv = document.querySelector('#weather-description');
     const descriptionDiv = document.createElement('p');
     descriptionDiv.textContent = description;
     weatherDescriptionDiv.appendChild(descriptionDiv);
 }