jQuery( $ => {
    $('.js-hamburger').click( function(e){
        console.log(e);
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('navigation_is-active');
        
    });
});