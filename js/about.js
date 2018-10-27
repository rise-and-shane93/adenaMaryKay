/*========================
ABOUT PAGE
=========================*/
var aboutImg = document.querySelector('.adenaRandomImg');

//Adena random image selector

//for large screens (Portrait)
var adenaImagesPort = [
    "images/adena/ah.jpg",
    "images/adena/ah2.jpg",
    "images/adena/ah3.jpg",
    "images/adena/ah4.jpg",
    "images/adena/ah5.jpg",
    "images/adena/ah6.jpg",
    "images/adena/ah7.jpg",
    "images/adena/ah8.jpg",
    "images/adena/ah9.jpg",
    "images/adena/ah10.jpg"
];

//for small screens (Landscape)
var adenaImagesLand = [
    "images/adena/ah11.jpg",
    "images/adena/ah12.jpg",
    "images/adena/ah13.jpg",
    "images/adena/ah14.jpg",
    "images/adena/ah15.jpg",
    "images/adena/ah16.jpg"
];

function getRandomImageAbout() {
    var img = '<img alt=\"An image of Adena Harper.\" class=\"img-fluid\" src=\"';
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
        randomImg = Math.floor(Math.random() * adenaImagesLand.length);
        img += adenaImagesLand[randomImg];
    } else { 
        randomImg = Math.floor(Math.random() * adenaImagesPort.length);
        img += adenaImagesPort[randomImg];
    }
    img += '\">';
    return img;
}; 

aboutImg.innerHTML = getRandomImageAbout();