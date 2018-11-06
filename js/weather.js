var weather = document.querySelector('.weather');
var weatherUl = document.querySelector('.weatherUl');
var zipInput = document.querySelector('.input input');
var zipBtn = document.querySelector('.input button');
var temp = document.createElement('li');
var humidity = document.createElement('li');
var pressure = document.createElement('li');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Adairsville,us&mode=json&units=imperial&APPID=c3d2c616c7f4d6abccb386c351d3a73d`).then(res => {
    return res.json();
}).then(function(res) {
    temp.innerHTML = 'Temp: ' + res.main.temp + '&deg;F';
    humidity.innerHTML = 'Humidity: ' + res.main.pressure;
    pressure.innerHTML = 'Pressure: ' + res.main.humidity;
    weatherUl.appendChild(temp);
    weatherUl.appendChild(humidity);
    weatherUl.appendChild(pressure);
});

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