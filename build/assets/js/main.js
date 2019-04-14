jQuery( $ => {
    // Hamburger menu
    $('.js-hamburger').click( function(e){
        console.log(e);
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('navigation_is-active');
    });
    
    
    
    // Navigation underline animation
    var $elem, leftPos, newWidth,
        $elemActive = $(".navigation__list-item_active"),
        $nav = $(".navigation__list");
    
    $nav.append("<li id='underline'></li>");
    var $underline = $("#underline");
    
    $underline
        .width( $elemActive.width() + parseInt($elemActive.css('padding-left')) + parseInt($elemActive.css('padding-right')) )
        .css("left", $elemActive.position().left)
        .data("orig-left", $underline.position().left)
        .data("orig-width", $underline.width());
        
    $(".navigation__list-item a").hover(function() {
        $elem = $(this).closest('.navigation__list-item');
        leftPos = $elem.position().left;
        newWidth = $elem.width() + parseInt($elem.css('padding-left')) + parseInt($elem.css('padding-right'));
        console.log(newWidth);
        $underline.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $underline.stop().animate({
            left: $underline.data("orig-left"),
            width: $underline.data("orig-width")
        });    
    });
});