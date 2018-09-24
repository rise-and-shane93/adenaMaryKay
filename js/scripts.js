var $navbar = $('.navbar');
var $upArrow = $('.up-arrow');
var $navLink = $('.nav-link');
var $navToggler = $('.navbar-toggler-icon');

//navbar expand/contract
$(window).scroll(function(event) {
    if ($(this).scrollTop() > 200) {
        // $navbar.css('background-color', 'black');
        $navbar.addClass('scrolledNav');
        $navLink.css('color', 'white');
        $navToggler.css('color', 'white');
    } else {
        // $navbar.css('background-color', 'white');
        $navbar.removeClass('scrolledNav');
        $navLink.css('color', 'black');
        $navToggler.css('color', 'black');
    }
}); 

//upArrow smooth scroll
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

//random image selector
/*
var dailyQuote = document.querySelector('.dailyQuote');

var imageURLs = [
    "images/quote.jpg",
    "images/quote2.jpg",
    "images/quote3.jpg",
    "images/quote4.jpg",
    "images/quote5.jpg",
    "images/quote6.jpg",
    "images/quote7.jpg",
    "images/quote8.jpg",
    "images/quote9.jpg"
];

function getRandomImage() {
    var img = '<img src=\"';
    var randomURL = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomURL];
    img += '\" alt=\"Some alt text\" class=\"img-fluid\">';
    return img;
};

dailyQuote.innerHTML = getRandomImage();
*/
//random quote selector
/*
var mkQuotes = [
    ['Never give up, because you never know if the ', 'next try is going to be the one that works.'],
    ['The definition of successful people is simply ', 'ordinary people with extraordinary determination.'],
    ['What you believe, you can achieve.'],
    ['Don\'t limit yourself. Many people limit themselves ','to what they think they can do.', 
    'You can go as far as your mind lets you. ', 'What you believe, remember you can achieve.'],
    ['Don\'t let the negatives of life control you. Rise above them. ',
    'Use them as your stepping stones to go higher', 'than you ever dreamed possible.'],
    ['Watching women achieve their dreams is the thing', 'that keeps me inspired.'],
    ['If you act enthusiastic, you will become enthusiastic - ', 'and it will spread like wildfire.']
];
*/
var dailyQuote = document.querySelector('.dailyQuoteText');
// var dailyQuote = document.querySelector('.quote');

var mkQuotes = [
    'Never give up, because you never know if the next try<br>is going to be the one that works.',
    'The definition of successful people is simply<br>ordinary people with extraordinary determination.',
    'What you believe, you can achieve.',
    'Don\'t limit yourself. Many people limit themselves<br>to what they think they can do.', 
    'You can go as far as your mind lets you.<br>What you believe, remember you can achieve.',
    'Don\'t let the negatives of life control you. Rise above them.<br>Use them as your stepping stones to go higher<br>than you ever dreamed possible.',
    'Watching women achieve their dreams is the thing<br>that keeps me inspired.',
    'If you act enthusiastic, you will become enthusiastic -<br>and it will spread like wildfire.'
];


function getRandomQuote() {
    var quote = '<p class="text-center">&#34;';
    var randomQuote = Math.floor(Math.random() * mkQuotes.length);
    quote += mkQuotes[randomQuote];
    quote += '&#34;</p>';
    return quote;
}
/*
function getRandomQuote() {
    var quote = '';
    var randomQuote = Math.floor(Math.random() * mkQuotes.length);
    quote += mkQuotes[randomQuote];
    return quote;
}
*/

dailyQuote.innerHTML = getRandomQuote();

var $quoteText = $('.dailyQuoteText');
$quoteText.css({"opacity" : 0, "left" : 0});

$(window).scroll(function(event) {
    if ($(this).scrollTop() > 150) {
        $quoteText.animate({opacity: 1, left: 25}, 700);
    }
})