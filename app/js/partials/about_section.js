// A B O U T   U S   A N I M A T I O N
var counterItems = ('.js-about-items'),
    counterClient = ('.js-about-item__counter_client'),
    counterProject = ('.js-about-item__counter_project'),
    counterLike = ('.js-about-item__counter_like'),
    counterLaunch = ('.js-about-item__counter_launch'),
    counterNumber = ('.js-about-item__number'),
    counterAnimation = ('.js-about__animation-trigger');

$(window).bind('scroll', function(){    
    //detect if the element is scrolled into view
    function elementScrolled(elem){        
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }  
    
    if(elementScrolled(counterAnimation)){
        //making counter items seen
        $(counterItems).css('opacity', '1'); 

        //starting progress bar animation for Clients item with progressbar.js plugin
        $(counterClient).circleProgress({
            value: .95,
            size: 128,
            startAngle: 105.25,
            thickness: 4,
            emptyFill: '#4f4f4f',
            fill: {
              gradient: ['#c8ea99', '#83d80e', '#4e8700'], gradientAngle: Math.PI / 8
            }
        });

        //starting progress bar animation for Projects item
        $(counterProject).circleProgress({
            value: .55,
            size: 128,
            startAngle: 105.25,
            thickness: 4,
            emptyFill: '#4f4f4f',
            fill: {
              gradient: ['#c8ea99', '#83d80e', '#4e8700'], gradientAngle: Math.PI / 8
            }
        });

        //starting progress bar animation for Likes item
        $(counterLike).circleProgress({
            value: .77,
            size: 128,
            startAngle: 105.25,
            thickness: 4,
            emptyFill: '#4f4f4f',
            fill: {
              gradient: ['#c8ea99', '#83d80e', '#4e8700'], gradientAngle: Math.PI / 8
            }
        });

        //starting progress bar animation for Launch item
        $(counterLaunch).circleProgress({
            value: .40,
            size: 128,
            startAngle: 105.25,
            thickness: 4,
            emptyFill: '#4f4f4f',
            fill: {
              gradient: ['#c8ea99', '#83d80e', '#4e8700'], gradientAngle: Math.PI / 8
            }
        });

        //starting counter
        $(counterNumber).each(function(){
            var $this = $(this);
            $({Counter: 0}).animate({Counter: $this.text()}, {
              duration: 1000,
              easing: 'swing',
              step: function () {
                $this.text(Math.ceil(this.Counter));
              }
            });
        });

        //unbinding scroll not to re-run counter animation
        $(window).unbind('scroll');   
    }   
});