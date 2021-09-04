    $(function () {
      
        "use strict";
        var wind = $(window);

        /*==================================
         1.ScrollIt 
        ====================================*/
$.scrollIt({
        upKey: 38, 
        downKey: 40, 
        easing: 'swing', 
        scrollTime: 700, 
        activeClass: 'active',
        onPageChange: null, 
        topOffset: -15 
    });
        /*==================================
        2.Navbar Scrolling 
        ====================================*/

        wind.on("scroll", function () {
            var bodyScroll = wind.scrollTop(),
                navbar = $(".navbar")
            if (bodyScroll > 600) {
                navbar.addClass("fixed-top");
            } else {
                navbar.removeClass("fixed-top");
            }
        });
    });



// =======testimonial

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        transitionStyle:"fade",
        autoPlay:true
    });


});


$(function(){
     $( "#datepicker" ).datepicker();
      $( "#datepicker2" ).datepicker();



  });