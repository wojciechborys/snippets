
function countUp() {
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
            $(this).text(Math.ceil(now));
            }
        });
    });
}

$(function() {
    "user strict";
    var bAnimate = true;
    $(".count").css ("opacity", "0.0");
    
    $(window).scroll(function() {
    // console.log("scroll top=" + $(this).scrollTop());
    // console.log("div offset top=" + $("div").offset().top);
    var scrolling = $(this).scrollTop(),
        divoffset = $(".count").offset().top,
        screenBottom = scrolling + $(window).height(), 
        elemBottom = divoffset + $(".count").outerHeight (); // 
    if (screenBottom > elemBottom) {
        if (bAnimate) {
            $(".count").css ("opacity", "1.0");
        countUp();
        bAnimate = false;
        }
    }
    })
})
