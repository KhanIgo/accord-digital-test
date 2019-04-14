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

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
 img.removeAttribute('data-src');
  };
});

window.onload = incoming_animations();
function incoming_animations(){
    //animate photos
    let ph1 = document.querySelector('.main__photo'), 
        plants1 = document.querySelector('.main__plants-1'),
        plants2 = document.querySelector('.main__plants-2'),
        shadow =document.querySelector('.main__shadow');
    
    TweenLite.from(ph1, 1, {opacity:0, left:"-=500px"});
    TweenLite.from(plants1, 1, {opacity:0, top:"50%", delay:1});
    TweenLite.from(plants2, 1, {opacity:0, right:"25%", bottom:"7%", delay:1.5});
    TweenLite.from(shadow, 1, {opacity:0, delay:2.5});
    
    let t1  = document.querySelector('.main-desc__title'),
        t2  = document.querySelector('.main-desc__subtitle'),
        t3  = document.querySelector('.advantages');
    
    TweenLite.from(t1, 1, {opacity:0, delay:2.5});
    TweenLite.from(t2, 1, {opacity:0, delay:3});
    TweenLite.from(t3, 1, {opacity:0, delay:3.5});
}

