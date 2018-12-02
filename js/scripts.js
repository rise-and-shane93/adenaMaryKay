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

//navbar toggler X icon
var navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', function() {
    navbarToggle.classList.toggle('menu-open');
});

//adds the box shadow on all pages except for the home page
var navbar = document.querySelector('.navbar');

var title = document.querySelector('title').textContent;

if (title !== 'Adena Harper') {
    navbar.style.boxShadow = '0px 5px 10px 0px #373737';
}