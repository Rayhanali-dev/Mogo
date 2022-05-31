$(function(){
    $('.counter').counterUp({
        delay: 50,
        time: 500
    });

    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
        ]
    });

    $('.about-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
        ]
    });

    $('.banner-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,
      });
    $('.comment-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        prevArrow: '.col-left-icon',
        nextArrow: '.col-right-icon',
      });

    $(window).scroll(function(){
        $(window).scrollTop()
        if($(window).scrollTop() > 300){
            $('.slicky').addClass('sticky-menu')
        }
        else {
            $('.slicky').removeClass('sticky-menu')
        }

        if($(window).scrollTop() > 300) {
          $('#back-to-top').fadeIn(300)
        }
        else {
          $('#back-to-top').fadeOut(300)
        }
    })

    $('#back-to-top').click(function(){
      $('html, body').animate({scrollTop: 0}, 300)
    })

})


var html_body = $('html, body');
$('.menu a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 140
            }, 1500);
            return false;
        }
    }
})