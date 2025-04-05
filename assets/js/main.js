(function ($) {
    "use strict";

  
    // data bg img 
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")
    })

    // data border color
    $("[data-border-color]").each(function () {
        $(this).css("border-color", $(this).attr("data-border-color"))
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data bg color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })


    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });

    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

// swiper-slider
    var swiper = new Swiper(".tpcauses-slider-active", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".tp-arrow-next",
            prevEl: ".tp-arrow-prev",
          },
      });

      var swiper = new Swiper(".tpcauses-brand-active", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freemode: true,
        centerSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
      });

})(jQuery);