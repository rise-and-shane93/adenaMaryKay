var weather = document.querySelector('.weather');
var weatherUl = document.querySelector('.weatherUl');
var zipInput = document.querySelector('.input input');
var zipBtn = document.querySelector('.input button');
var temp = document.createElement('li');
var humidity = document.createElement('li');
var pressure = document.createElement('li');
var time = document.createElement('li');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Adairsville,us&mode=json&units=imperial&APPID=c3d2c616c7f4d6abccb386c351d3a73d`).then(res => {
    return res.json();
}).then(function(res) {
    // var degree = 40;
    temp.innerHTML = 'Temp: ' + res.main.temp + '&deg;F';
    humidity.innerHTML = 'Humidity: ' + res.main.pressure;
    pressure.innerHTML = 'Pressure: ' + res.main.humidity;
    var hour12 = convertTime12(res.dt);
    var hour24 = convertTime24(res.dt);
    console.log(hour24);
    time.innerHTML = 'Last updated at ' + hour12;
    weatherUl.appendChild(temp);
    weatherUl.appendChild(humidity);
    weatherUl.appendChild(pressure);
    weatherUl.appendChild(time);
    //weather.style.backgroundImage = "url('" +  + "')'";
    var imagePath;
    var weatherBackgroundImage = "url('" + imagePath + "')";
    /*
    if (res.weather[0].main === 'Clear' && res.main.temp >= 50 && hour24 > 18) {
        weather.style.backgroundImage = 'url(images/weather/night.png)';
    } else if (res.weather[0].main === 'Clear' && res.main.temp < 50) {
        weather.style.backgroundImage = 'url(images/weather/coldNight.png)';
    }*/
    
    if (hour24 > 18 || hour24 < 6) {
        imagePath += 'images/weather/night';
        if (res.weather[0].main === 'Clear' && res.main.temp >= 50) {
            imagePath += 'night.png';
        }
    } else if (hour24 >= 6 && hour24 < 11) {
        imagePath += 'images/weather/morning';
    } else {
        imagePath += 'images/weather/morning';
    }
    
    /*
    if (hour24 > 18) {
        weather.style.backgroundImage = 'images/weather/night.png';
        if (res.weather[0].main === 'Clear' && res.main.temp >= 50 && hour24 > 18) {
            weather.style.backgroundImage = 'images/weather/rainy.png';
        }
    }
    */
    
    console.log(weatherBackgroundImage);

    weather.style.backgroundImage = weatherBackgroundImage; 
});

function convertTime24(timestamp) {
    var date = new Date(timestamp*1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime24 = hours;
    return formattedTime24;
};

function weatherBackgroundImage() {
    console.log(weatherDesc);
}

function convertTime12(timestamp) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(timestamp*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    var amPm = '';
    
    //sets background image based on hour
    if (hours > 16 /*&& weatherDesc === 'Mist'*/) {
        console.log('sleep');
        //weather.style.backgroundImage = 'url(images/weather/cloudy.png)';
    } else if (hours > 6 && hours < 11) {
        console.log('morning');
        //weather.style.backgroundImage = 'url(images/weather/night.png)';
    }

    //sets the time in 12 hour format
    if (hours > 12) {
        // console.log('sleep');
        amPm = ' PM';
        hours -= 12;
    } else {
        amPm = ' AM';
    }
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Will display time in 10:30:23 format
    var formattedTime12 = hours + ':' + minutes.substr(-2) + amPm;
    return formattedTime12;
};

zipBtn.addEventListener('click', function() {
    var zip = zipInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zip},us&mode=json&units=imperial&APPID=c3d2c616c7f4d6abccb386c351d3a73d`).then(res => {
        return res.json();
    }).then(function(res) {
        temp.innerHTML = 'Temp: ' + res.main.temp + '&deg;F';
        humidity.innerHTML = 'Humidity: ' + res.main.pressure;
        pressure.innerHTML = 'Pressure: ' + res.main.humidity;
        weatherUl.appendChild(temp);
        weatherUl.appendChild(humidity);
        weatherUl.appendChild(pressure);
    });
});

/*
var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
              var data = JSON.parse(xmlhttp.responseText);
              //access json properties here
              weather.append("Temperature: "+ data.main.temp);
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };
    xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Adairsville,us&mode=json&units=imperial&APPID=c3d2c616c7f4d6abccb386c351d3a73d", true);
    xmlhttp.send();
*/