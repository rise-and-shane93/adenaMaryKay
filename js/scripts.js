//upArrow smooth scroll
var $upArrow = $('.up-arrow');

$(document).ready(function() {
    $(window).scroll(function(event) {
        $upArrow.css('opacity', '0');
        if ($(this).scrollTop() > 200) {
            $upArrow.css('opacity', '1').fadeIn(1000);
        } else {
            $upArrow.css('opacity', '0').fadeOut();
        }
    });
});

//upArrow smooth scroll
$upArrow.click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});

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
            $quoteText.animate({opacity: 1, left: 250}, 700);
            $('.dailyQuoteText, .dailyQuoteTextName').css({'background-color' : 'rgba(255,218,185,0.5)', 
                'border-top-left-radius' : '5px',
                'border-bottom-right-radius' : '5px',
                'padding' : '5px'
            });
            $quoteTextName.fadeIn(700);
        } else if (windowSize < 500) {
            $quoteText.animate({opacity: 1, left: -50}, 700);
        }
    }
});
