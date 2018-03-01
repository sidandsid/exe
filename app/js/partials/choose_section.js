// C H O O S E   A C C O R D I O N S
var accordions = ('.js-choose-accordions'),
    accordion = ('.js-choose-accordion'),
    accordionHeader = ('.js-choose-accordion__header'),
    accordionContent = ('.js-choose-accordion__content');

$(accordionHeader).click(function(){		
	var a = $(this).closest(accordion);
	var b = $(a).hasClass('active');
	var c = $(a).closest(accordions).find('.active');

	if(b != true){
		$(c).find(accordionContent).slideUp(300);
		$(c).removeClass('active');
	}
		
	$(a).toggleClass('active');
	$(a).find(accordionContent).slideToggle(300);
});

// C H O O S E   S L I D E R
var $chooseSlider = $('.js-choose-slider').flickity({
	cellSelector: '.choose-slide',
	initialIndex: 1,
	wrapAround: true,
	pageDots: true,  
	prevNextButtons: false
});