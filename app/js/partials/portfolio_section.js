//P O R T F O L I O   G R I D
$(function(){
//init Isotope
  var $grid = $('.js-portfolio-grid').isotope({
    itemSelector: '.portfolio-grid__item',
    layoutMode: 'masonry',
    masonry: { 
      isFitWidth: true 
    }    
  });

//filter items on button click - https://codepen.io/bebjakub/pen/jWoYEO
var gridNav = ('.js-portfolio-nav');

$(gridNav).on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//change is-checked class on buttons
  $(gridNav).each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.portfolio-nav__btn_active').removeClass('portfolio-nav__btn_active');
      $(this).addClass('portfolio-nav__btn_active');
    });
  });

//load more button
  var initShow = 10; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $grid.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $grid.find('.js-portfolio-hidden').removeClass('js-portfolio-hidden');

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item){
      return item.element;
    });
    $(hiddenElems).addClass('js-portfolio-hidden');
    $grid.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      $('#load-more').hide();
    } else {
      $('#load-more').show();
    };
  }

  //append load more button
  $grid.after('<button class="portfolio-btn" id="load-more">Load More</button>');

  //when load more button clicked
  $('#load-more').click(function() {
    if ($(gridNav).data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $(gridNav).data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $(gridNav).click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });  
});