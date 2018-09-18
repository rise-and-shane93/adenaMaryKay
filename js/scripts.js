var $navbar = $('.navbar');
var $upArrow = $('.up-arrow');

/*expanding navbar on page scroll
$(document).ready(function(){
    $(window).scroll(function(event) {
        if ($(this).scrollTop() > 200) {
            $navbar.css('background-color', 'black');
        } else {
            $navbar.css('background-color', 'white');
        }
    }); 
}); */
/*you need to target the window of the document
to ensure that it has scrolled past the desired
pixel amount.*/

//navbar expand/contract
$(window).scroll(function(event) {
    if ($(this).scrollTop() > 200) {
        // $navbar.css('background-color', 'black');
        $navbar.addClass('scrolled');
    } else {
        // $navbar.css('background-color', 'white');
        $navbar.removeClass('scrolled');
    }
}); 

//upArrow smooth scroll
$(document).ready(function() {
    $(window).scroll(function(event) {
        $upArrow.css('opacity', '0');
        if ($(this).scrollTop() > 200) {
            $upArrow.css('opacity', '1').fadeIn();
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