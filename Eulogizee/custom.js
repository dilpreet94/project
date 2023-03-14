jQuery(document).ready(function(){
    jQuery('.three-slider, .quality .view-content.row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    jQuery('.screens_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows:false,
      responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
    });
    jQuery('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    })
    jQuery('.menu-open').on('click', function(){
        jQuery('.right').addClass('show')
        jQuery(this).hide()
        jQuery('.menu-close').show()
    })
    jQuery('.menu-close').on('click', function(){
        jQuery('.right').removeClass('show')
        jQuery(this).hide()
        jQuery('.menu-open').show()
    })
});