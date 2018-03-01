// S K I L L   A N I M A T I O N
var skillLine = ('.js-skill-item__line'),
    skillNumber = ('.js-skill-item__number'),
    skillAnimation = ('.js-skill__animation-trigger');

$(window).scroll(function(){
    //detect if the element is scrolled into view
    function elementScrolled(elem){        
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }  
    
    if(elementScrolled(skillAnimation)){
        $(skillLine).addClass('animated');
        $(skillNumber).addClass('animated');    
    }	
});