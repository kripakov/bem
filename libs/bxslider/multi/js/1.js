$(document).ready(function() {
  var slider = $('.bxslider1').bxSlider({
    useCSS: false,
    easing: 'easeOutQuint',
    slideWidth: 100,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 3,
    slideMargin: 20,
    auto: true,
    pause: 2000,
    autoHover: true,
    speed: 0,
    onSlideBefore: function() {
      $(".bxslider1").fadeOut();
    },
    onSlideAfter: function() {
      $(".bxslider1").fadeIn();
    }
  });
});
