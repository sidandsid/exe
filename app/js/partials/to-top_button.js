// T O   T O P   B U T T O N
var toTop = ('.js-to-top');

$(window).scroll(function() {
    if ($(this).scrollTop() > 500){
        $(toTop).fadeIn(200);
    } else {
        $(toTop).fadeOut(200);
    }
});

$(toTop).click(function(e){
	e.preventDefault();
	
    $('html, body').animate({scrollTop: 0}, 300);
    return false;
});