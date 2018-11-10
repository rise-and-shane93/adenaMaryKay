var weather = document.querySelector('.weather1');
var weatherDesc = document.querySelector('.weatherDesc');
var zipInput = document.querySelector('.input input');
var zipBtn = document.querySelector('.input button');
var temp = document.createElement('p');
//var humidity = document.createElement('li');
//var pressure = document.createElement('li');
var time = document.createElement('p');

//Fetch API call that returns recent weather data for Adairsville
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Adairsville,us&mode=json&units=imperial&APPID=c3d2c616c7f4d6abccb386c351d3a73d`).then(res => {
    return res.json();
}).then(function(res) {
    var temperature = Math.floor(res.main.temp);
    temp.innerHTML = temperature + '&deg;F';
    //humidity.innerHTML = 'Humidity: ' + res.main.pressure;
    //pressure.innerHTML = 'Pressure: ' + res.main.humidity;
    var hour12 = convertTime12(res.dt);
    var hour24 = convertTime24(res.dt);
    console.log(hour24);
    time.innerHTML = 'Last updated<br>at ' + hour12;
    weatherDesc.appendChild(temp);
    //weatherUl.appendChild(humidity);
    //weatherUl.appendChild(pressure);
    weatherDesc.appendChild(time);
    temp.style.fontSize = '1.5rem';
    temp.style.fontWeight = '900';
    
    //Conditional-ception that sets the background image of the weather1 div based on the weather
    if (hour24 > 18 || hour24 < 6) {
        //nighttime
        if ((res.weather[0].main === 'Rain' || res.weather[0].main === 'Drizzle') && res.main.temp >= 50) {
            //you probably won't have to worry about having the temperature in the condition
            weather.style.backgroundImage = "url('images/weather/night/rainyNight.png')";
            console.log('night');
        } else if ((res.weather[0].main === 'Clear' || res.weather[0].main === 'Clouds' ||
                    res.weather[0].main === 'Smoke' || res.weather[0].main === 'Haze') && res.main.temp >= 50) {
            weather.style.backgroundImage = "url('images/weather/night/night.png')";
        } else if ((res.weather[0].main === 'Clear' || res.weather[0].main === 'Clouds' ||
                    res.weather[0].main === 'Mist' || res.weather[0].main === 'Haze') && res.main.temp < 50) {
            weather.style.backgroundImage = "url('images/weather/night/coldNight.png')";
        } else if (res.weather[0].main === 'Snow') {
            weather.style.backgroundImage = "url('images/weather/night/snowNight.png')";
        }
        //you may have to add more conditions since I don't know how to access the library.
    } else if (hour24 >= 6 && hour24 < 11) {
        //morning
        if ((res.weather[0].main === 'Rain' || res.weather[0].main === 'Drizzle') && res.main.temp >= 50) {
            //you probably won't have to worry about having the temperature in the condition
            weather.style.backgroundImage = "url('images/weather/rainy2.png')";
        } else if (res.weather[0].main === 'Clear' && res.main.temp >= 50) {
            weather.style.backgroundImage = "url('images/weather/morning/morning3.png')";
        } else if ((res.weather[0].main === 'Clear' || res.weather[0].main === 'Clouds' ||
                    res.weather[0].main === 'Mist' || res.weather[0].main === 'Smoke' ||
                    res.weather[0].main === 'Haze') && res.main.temp < 50) {
            weather.style.backgroundImage = "url('images/weather/cold.png')";
        } else if ((res.weather[0].main === 'Clouds' || res.weather[0].main === 'Smoke' ||
                    res.weather[0].main === 'Haze' || res.weather[0].main === 'Mist') && res.main.temp >= 50) {
            weather.style.backgroundImage = "url('images/weather/cloudy.png')";
        } else if (res.weather[0].main === 'Snow') {
            weather.style.backgroundImage = "url('images/weather/snow.png')";
        }
    } else {
        //afternoon
        if ((res.weather[0].main === 'Rain' || res.weather[0].main === 'Drizzle') && res.main.temp >= 50) {
            //you probably won't have to worry about having the temperature in the condition
            weather.style.backgroundImage = "url('images/weather/rainy2.png')";
        } else if (res.weather[0].main === 'Clear' && res.main.temp >= 50) {
            weather.style.backgroundImage = "url('images/weather/afternoon/sunny.png')";
        } else if ((res.weather[0].main === 'Clear' || res.weather[0].main === 'Clouds' ||
                    res.weather[0].main === 'Mist') && res.main.temp < 50) {
            weather.style.backgroundImage = "url('images/weather/cold.png')";
        } else if ((res.weather[0].main === 'Clouds' || res.weather[0].main === 'Smoke' ||
                    res.weather[0].main === 'Haze' || res.weather[0].main === 'Mist') && res.main.temp >= 50) {
            weather.style.backgroundImage = "url('images/weather/cloudy.png')";
        } else if (res.weather[0].main === 'Snow') {
            weather.style.backgroundImage = "url('images/weather/snow.png')";
        }
    }
    weather.style.backgroundSize = 'cover';
});

function convertTime24(timestamp) {
    var date = new Date(timestamp*1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime24 = hours;
    return formattedTime24;
};

function convertTime12(timestamp) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(timestamp*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    var amPm = '';
    
    //sets the time in 12 hour format
    if (hours >= 12) {
        amPm = ' PM';
        if (hours > 13) {
            hours -= 12;
        }
    } else {
        amPm = ' AM';
    }
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Will display time in 10:30:23 format
    var formattedTime12 = hours + ':' + minutes.substr(-2) + amPm;
    return formattedTime12;
};