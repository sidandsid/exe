// Allow xuse with svgsprite for IE
svg4everybody({ 
    polyfill: true 
});

// D R O P - D O W N - Menu navigation
var menuLink = ('.js-header-nav__link'),
    menuDropList = ('.js-header-nav__list');

$(menuLink).on('click', function(e){

    var menuLinkActive = $(this);
    var meuDropListVisible = $(menuLinkActive).siblings(menuDropList);

    e.preventDefault();

    $(this).toggleClass('active');
    $(this).siblings(menuDropList).toggleClass('visible');

    $(document).on('click', function(i){
        if ($(i.target).is($(menuLinkActive)) === false){     
            $(meuDropListVisible).removeClass('visible');
            $(menuLinkActive).removeClass('active');
        }
    });
});

// D R O P - D O W N - Wishlist and Cart
var productBtn = ('.js-product-btn'),
    productList = ('.js-products');

$(productBtn).on('click', function(e){

    e.preventDefault();

    var productBtnActive = $(this);
    var productListVisible = $(productBtnActive).siblings(productList);

    $(productBtnActive).toggleClass('active');
    $(this).siblings(productList).toggleClass('visible');

    $(document).on('click', function(i){
        if ($(i.target).is($(productBtnActive)) === false){     
            $(productListVisible).removeClass('visible');
            $(productBtnActive).removeClass('active');
        }
    });
});

// D R O P - D O W N - Mobile menu
var mobileMenu = ('.js-header-logo_mobile'),
    headerNav = ('.js-header-nav');

$(function(){
    $(mobileMenu).on('click', function(e){ 

        e.preventDefault();

        $(headerNav).slideToggle();         
    });
});

// S E A R C H
var searchIcon = ('.js-header-search__icon'),
    searchInput =('.js-header-search__input'),
    searchClose =('.js-header-search__close');

$(function(){
    $(searchIcon).on('click', function(){ 
        $(searchInput).slideDown();
        $(searchClose).addClass('active');   
        $(searchIcon).addClass('clicked');         
    });

  $(searchClose).on('click', function(){ 
        $(searchInput).hide();
        $(searchClose).removeClass('active');   
        $(searchIcon).removeClass('clicked');         
    });
});