$(document).ready(function() {
  var slider = $('.main-slider__list').bxSlider({
    auto: true,
    autoControls: false,
    speed: 300,
    slideSelector: 'div.main-slider__item',
    minSlides: 8,
    maxSlides: 8,
    moveSlides: 1,
    slideWidth: 250,
    pager: false,
    controls: false,
    onSliderLoad: function(currentIndex) {
      //console.log(currentIndex);     
      //$('.bxslider1').find('.bx-viewport').find('ul').children().eq(currentIndex + 1).addClass('active-slide');
    },
    onSlideBefore: function($slideElement){
      //console.log($slideElement);
      //$('.bxslider1').find('.bx-viewport').find('ul').children().removeClass('active-slide');
      //$slideElement.addClass('active-slide');
    }
  });
  $('.multi-slider').mouseenter(function(){
    slider.stopAuto();
  }).mouseleave(function() {
    slider.startAuto();
  });
  $('.main-slider__list').children().each(function(i,e){
    $(e).bind('click', function(target){
      //console.log(i,'click',$(this));
      $('.stack').children().removeClass('active');
      $('.stack').children().eq(i).addClass('active');
    });
  });
});
