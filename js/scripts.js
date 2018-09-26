/*
var $navbar = $('.navbar');
var $navLink = $('.nav-link');
var $navToggler = $('.navbar-toggler-icon');
*/
/*
var $navbar = $('.navbar');

navbar expand/contract
$navbar.addClass('bg-light');
$(window).scroll(function(event) {
    if ($(this).scrollTop() > 300) {
        $navbar.removeClass('bg-light').addClass('scrolledNav').css('height', '56px');
    } else {
        $navbar.removeClass('scrolledNav').addClass('bg-light').css('height', '70px');
    }
}); 
*/

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
//random quote background-image selector
var quoteBackground = document.querySelector('.quoteBackgroundImage');
var mkImages = [
    'images/Untitled.png',
    'images/Untitled2.png',
    'images/maryKay3.jpg',
    'images/maryKay4.png'
];

function getRandomImage() {
    var img = '<img alt=\"An image of Mary Kay Ash.\" class=\"img-fluid\" src=\"';
    var randomImg = Math.floor(Math.random() * mkImages.length);
    img += mkImages[randomImg];
    img += '\">';
    return img;
}

quoteBackground.innerHTML = getRandomImage();

//random quote selector
var dailyQuote = document.querySelector('.dailyQuoteText');

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
    var quote = '<p class="text-center">&#34;';
    var randomQuote = Math.floor(Math.random() * mkQuotes.length);
    quote += mkQuotes[randomQuote];
    quote += '&#34;</p>';
    return quote;
}

dailyQuote.innerHTML = getRandomQuote();

var $quoteText = $('.dailyQuoteText');
var $quoteTextName = $('.dailyQuoteTextName');

$quoteText.css({"opacity" : 0, "left" : 100});
$quoteTextName.hide();

$(window).scroll(function(event) {
    if ($(this).scrollTop() > 150) {
        $quoteText.animate({opacity: 1, left: 250}, 700);
        $quoteTextName.fadeIn(700);
    }
});