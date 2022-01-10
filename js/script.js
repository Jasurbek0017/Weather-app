const api = {
    key: '44e67184ee433bc4ae93fb597f0efaee',
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');



searchBox.addEventListener('keypress', setQuery) 

function setQuery(e) {
    if(e.keyCode == 13) {
        getResults(searchBox.value);
        console.log(searchBox.value);   
    }
}

function getResults(query) {
    fetch(`${api.baseUrl}weather?q=${query}&units=metrics&APPID=${api.key}`)
    .then((weather) => {
        return weather.json();
    })
    .then(displayResults);
}
function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.date');
    date.innerHTML = dateBuilder(now);
}


function dateBuilder(s) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    let days = [ 'Sunday', 'Monday, Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.geMonth()];        
    let year = s.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}


