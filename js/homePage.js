/*This JS file is primarily for scripts exclusively for the home page
except for the weather.js file. The weather API is so large that 
it needs a file all it's own haha.*/

//Toggle logo-image size and nav-link font size on page scroll
var logoImage = document.querySelector('.logo-image');
var navbar = document.querySelector('.navbar');
var navbarNav = document.querySelector('.navbar-nav');

function scrollFunction() {
    if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
        logoImage.style.width = "130px";
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            logoImage.style.width = "70px";
            navbar.style.backgroundColor = "#DC3545";
            navbar.style.boxShadow = "0px 2px 5px 0px #373737";
        } else {
            logoImage.style.width = "130px";
            navbar.style.backgroundColor = "transparent";
            navbar.style.boxShadow = "none";
        }
    } else {
        logoImage.style.width = "200px";
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            logoImage.style.width = "100px";
            navbar.style.backgroundColor = "#DC3545";
            navbar.style.boxShadow = "0px 2px 5px 0px #373737";
        } else {
            logoImage.style.width = "200px";
            navbar.style.backgroundColor = "transparent";
            navbar.style.boxShadow = "none";
        }
    }
}

window.onscroll = function() {scrollFunction()};

//Toggles on and off the background color of the navbar when the toggler button is clicked

function backgroundColor() {
    navbar.classList.toggle('bg-danger');
}

//random quote background-image selector
var quoteBackground = document.querySelector('.quoteBackgroundImage');
var mkImagesLarge = [
    'images/Untitled.png',
    'images/Untitled2.png',
    'images/maryKay3.jpg',
    "images/maryKay4.png"
];

var mkImagesSmall = [
    "images/quote.jpg",
    "images/quote2.jpg",
    "images/quote3.jpg",
    "images/quote4.jpg",
    "images/quote5.jpg",
    "images/quote6.jpg",
    "images/quote7.jpg",
    "images/quote8.jpg",
    "images/quote9.jpg",
    "images/quote10.jpg",
    "images/quote11.jpg",
    "images/quote12.jpg",
    "images/quote13.jpg",
    "images/quote14.jpg",
    "images/quote15.jpg",
    "images/quote16.jpg",
    "images/quote17.jpg"
];

//random quote selector
var dailyQuote = document.querySelector('.dailyQuoteText');
var dailyQuoteName = document.querySelector('.dailyQuoteTextName');

var mkQuotes = [
    'Never give up, because you never know<br>if the next try is going to be<br>the one that works.',
    'The definition of successful people is<br>simply ordinary people with<br>extraordinary determination.',
    'What you believe, you can achieve.',
    'Don\'t limit yourself. Many people<br>limit themselves to what<br>they think they can do.', 
    'You can go as far as your<br>mind lets you. What you believe, remember you can achieve.',
    'Don\'t let the negatives of life control you.<br>Rise above them. Use them as your<br>stepping stones to go higher than you ever dreamed possible.',
    'Watching women achieve<br>their dreams is the thing<br>that keeps me inspired.',
    'If you act enthusiastic,<br>you will become enthusiastic -<br>and it will spread like wildfire.',
    'We are not just selling cosmetics.<br>We are touching lives.'
];


function getRandomQuote() {
    var quote = '<p class="text-center" class="quote-text">&#34;';
    var randomQuote = Math.floor(Math.random() * mkQuotes.length);
    quote += mkQuotes[randomQuote];
    quote += '&#34;</p>';
    return quote;
}

// dailyQuote.innerHTML = getRandomQuote();

var $quoteText = $('.dailyQuoteText');
// var dailyQuoteText = document.querySelector('.dailyQuoteText');
var $quoteTextName = $('.dailyQuoteTextName');
var windowSize = $(window).width();

//hide dailyQuoteText on mobile devices
if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
        dailyQuote.style.display = 'none';
        dailyQuoteName.style.opacity= '0';
    }

function getRandomImage() {
    var img = '<img alt=\"An image of Mary Kay Ash.\" class=\"img-fluid\" src=\"';
    var randomImg;
    if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
        // dailyQuote.innerHTML = getRandomQuote();
        randomImg = Math.floor(Math.random() * mkImagesSmall.length);
        img += mkImagesSmall[randomImg];
    } else { 
        dailyQuote.innerHTML = getRandomQuote();
        randomImg = Math.floor(Math.random() * mkImagesLarge.length);
        img += mkImagesLarge[randomImg];
    }
    img += '\">';
    return img;
}; 

quoteBackground.innerHTML = getRandomImage();

if (windowSize > 1000) {
    $quoteText.css({"opacity" : 0, "left" : 50});
} else if (windowSize < 500) {
    $quoteText.css({"opacity" : 0, "left" : -30});
}

$quoteTextName.hide();
var windowSize = $(window).width();
if (windowSize > 1000) {
    $quoteTextName.show();
}

$(window).scroll(function(event) {
    var windowSize = $(window).width();
    if ($(this).scrollTop() > 150) {
        if (windowSize > 1000) {
            $quoteText.animate({opacity: 1, left: 200}, 700);
            $('.dailyQuoteText, .dailyQuoteTextName').css({'background-color' : 'rgba(255,218,185,0.5)', 
                'border-top-left-radius' : '5px',
                'border-bottom-right-radius' : '5px',
                'padding' : '5px'
            });
            $quoteTextName.fadeIn(700);
        } else if (windowSize < 500) {
            $quoteText.animate({opacity: 1, left: -100}, 700);
        }
    }
});

//resizes the quote image on iPads


var quoteBackgroundImg = quoteBackground.querySelector('img');
var xmasCountdown = document.querySelector('#ChristmasCountdown');
var mkQuote = document.querySelector('#maryKayQuote');

if (navigator.userAgent.match(/iPad/i)) {
    quoteBackgroundImg.style.width = '300px';
    // xmasCountdown.classList.remove('mb-5');
    // mkQuote.classList.remove('my-5');
}

/*Displays additional text from Michelle Felix's email upon clicking
"read more"*/

var readMoreText = document.querySelector('.readMoreText');
var readMoreLink = document.querySelector('.readMoreLink');
var closeLink = document.querySelector('.closeLink');
// var spanLink = document.querySelectorAll('.spanLink');

readMoreText.style.display = "none";
readMoreLink.addEventListener('click', function() {
    readMoreText.style.display = "block";
    readMoreLink.style.display = "none";
});
closeLink.addEventListener('click', function() {
    readMoreText.style.display = "none";
    readMoreLink.style.display = "inline";
});

// spanLink.addEventListener('click', function() {
//     for (var i = 0; i < spanLink.length; i++) {
//         if (spanLink[i].textContent === 'Read more...') {
//             console.log('read more');
//         } else {
//             alert('close');
//         }
//     }
// });

//Christmas countdown!
/* This converts the current unix timestamp from the weather API,
compares it to the one for Christmas Day at 12 AM, then generates
a countdown based off of that.*/
var countdownArticle = document.querySelector('#ChristmasCountdown');
var countdownP = document.querySelector('.countdownNum');
var countdownImg = countdownArticle.querySelector('img');
var countdownText = countdownArticle.querySelector('p');
var countdownDesc = countdownArticle.querySelector('.countdownTxt');
var currentTimestamp;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Adairsville,us&mode=json&units=imperial&APPID=c3d2c616c7f4d6abccb386c351d3a73d`).then(res => {
    return res.json();
}).then(function(res) {
    //assigns the unix timestamp to the currentTimestamp variable
    currentTimestamp = res.dt;

    /*calculates the number of days until Christmas
    the currentDate var is assigned the result of the timeConverter function*/
    var xmasDate = 25;
    var currentDate = timeConverter(currentTimestamp).split(" ");
    var day = parseInt(currentDate[0]);
    var month = currentDate[1];
    var countdown = xmasDate - day;

    //sets the countdown number to the article
    countdownP.textContent = countdown;

    //sets the bitmoji image based on the number of days until Christmas
    if (month === 'Jan') {
        if (day >= 1 && day <=7) {
            countdownImg.src = 'images/newYear.png';
            countdownText.style.display = 'none';
        } else if (day === 21) {
            countdownImg.src = 'images/mlkDay.png';
            countdownText.innerHTML = 'Happy Martin<br>Luther King Jr. Day&#33;';
        } else {
            countdownArticle.style.display = 'none';
        }
    } else if (month === 'Feb') {
        if (day === 5) {
            countdownImg.src = 'images/chineseNY.png';
            countdownText.innerHTML = 'Happy Chinese<br>New Year&#33;';
        } else if (day === 14){
            countdownImg.src = 'images/valentinesDay.png';
            countdownText.textContent = 'Happy Valentine\'s Day!';
        } else {
            countdownArticle.style.display = 'none';
        }
    } else if (month === 'Mar') {
        if (day === 5) {
            countdownImg.src = 'images/mardiGras.png';
            countdownText.textContent = 'Happy Mardi Gras!';
        } else if (day === 17) {
            countdownImg.src = 'images/stPatty.png';
            countdownText.innerHTML = 'Happy St.<br>Patrick\'s Day&#33;';
        } else {
            countdownArticle.style.display = 'none';
        }
    } else if (month === 'Apr') {
        if (day === 21) {
            countdownImg.src = 'images/easter.png';
            countdownText.textContent = 'Happy Easter Sunday!';
        } else {
            countdownArticle.style.display = 'none';
        }
    } else if (month === 'May') {
        if (day === 2) {
            countdownImg.src = 'images/prayer.png';
            countdownText.innerHTML = 'Happy National<br>Day of Prayer';
        } else if (day === 5) {
            countdownImg.src = 'images/cincoDeMayo.png';
            countdownText.innerHTML = 'Happy Cinco<br>de Mayo&#33;';
        } else if (day === 12) {
            countdownImg.src = 'images/mothersDay.png';
            countdownText.textContent = 'Happy Mother\'s Day!';
        } else if (day === 27) {
            countdownImg.src = 'images/memorialDay.png';
            countdownText.textContent = 'Happy Memorial Day!';
        } else {
            countdownArticle.style.display = 'none';
        }
    } else if (month === 'Jun') {
        if (day === 14) {
            countdownImg.src = 'images/flagDay.png';
            countdownText.textContent = 'Happy Flag Day!';
        } else if (day === 16) {
            countdownImg.src = 'images/fathersDay.png';
            countdownText.textContent = 'Happy Father\'s Day!';
        } else {
            countdownArticle.style.display = 'none';
        }
    } else if (month === 'Jul') {
        if (day === 4) {
            countdownImg.src = 'images/fourthJuly.png';
            countdownText.textContent = 'Happy 4th of July!';
        } else {
            countdownArticle.style.display = 'none';
        }
    } else if (month === 'Aug') {
        if (day === 26) {
            countdownImg.src = 'images/womenEquality.png';
            countdownText.innerHTML = 'Happy Women\'s<br>Equality Day&#33;';  
        } else {
            countdownArticle.style.display = 'none';
        }
    } else if (month === 'Sep') {
        if (day === 2) {
            countdownImg.src = 'images/laborDay.png';
            countdownText.textContent = 'Happy Labor Day!';
        } else {
            countdownArticle.style.display = 'none';
        }
    } else if (month === 'Oct') {
        if (day === 31) {
            countdownImg.src = 'images/halloween.png';
            countdownText.textContent = 'Happy Halloween!';
        } else {
            countdownArticle.style.display = 'none';
        }
    } else if (month === 'Nov') {
        if (day === 11) {
            countdownImg.src = 'images/veteransDay.png';
            countdownText.textContent = 'Happy Veterans Day!';
        } else if (day >= 22 && day <= 28) {
            countdownImg.src = 'images/thanksgiving.png';
            countdownText.textContent = 'Happy Thanksgiving!';
        } else {
            countdownArticle.style.display = 'none';
        }
    } else {
        if (countdown <= 24 && countdown > 10) {
            countdownImg.src = 'images/waiting.png';
            countdownDesc.innerHTML = 'days \'til<br>Christmas&#33;';
        } else if (countdown <= 10 && countdown >= 1) {
            countdownImg.src = 'images/excited.png';
            countdownDesc.innerHTML = 'days \'til<br>Christmas&#33;';
        } else if (countdown === 0) {
            countdownImg.src = 'images/weather/christmas.png';
            countdownText.style.display = 'none';
        } else if (day > xmasDate) {
            countdownArticle.style.display = 'none';
        } /*else if (currentDate === 31 || currentDate === 1) {
            sets the background image to celebrate New Year's
            I should probably set more countdowns for other holidays
            countdownImg.src = 'images/newYear.png';
        }*/    
    }
});

function timeConverter(timestamp){
    var a = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    //var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    //var hour = a.getHours();
    //var min = a.getMinutes();
    //var sec = a.getSeconds();
    var time = date + ' ' + month;
    // + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}