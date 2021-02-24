  $(document).ready(function(){
    $('.corousel__inner').slick({
        speed:1200,
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplayspeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src ="icons/3/chevron-left-solid.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src = "icons/3/chevron-right-solid.png"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows:false
            }
          }

        ]
    });
  });