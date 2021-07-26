$(function () {

   $('.review__slider-imgs').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       asNavFor: '.review__slider-review',
       arrows: false,
       infinite: false,
   });
   $('.review__slider-review').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       fade: true,
       infinite: false,
       asNavFor: '.review__slider-imgs',
       prevArrow: '<button class="slick-btn slick-prev"><img src="images/review-arrow-left.svg" alt="prev"></button>',
       nextArrow: '<button class="slick-btn slick-next"><img src="images/review-arrow-right.svg" alt="next"></button>',
       responsive: [
        {
            breakpoint: 769,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
   });

   $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  $('.menu-btn').on('click', function(){
    $('.menu-btn').toggleClass('menu-btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
    // $('.menu__btn').removeClass('menu__btn--active');
    // $('.menu__list').removeClass('menu__list--active');
  });

});