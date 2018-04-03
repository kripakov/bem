var $landingWrapper = $(".landing");
var $landingInnerContent = $(".landing .grid");
var mytween;
var gl = $landingInnerContent.find('.item').length/2;


$('.grid__wrap .grid').css('width', gl*300 + 'px')

var tl = new TimelineMax({
  paused: true
});
tl.staggerTo(".box", 0.4, {
  y: -100
}, 0.1);

// animate boxes up and down 
$landingInnerContent.on("mouseenter", function() {
  tl.play();
}).on("mouseleave", function() {
  tl.reverse();
  mytween.pause();
});

// set initial container to half of .landing-inner-content width
TweenMax.set($landingWrapper, {scrollTo: {x: $landingInnerContent.width()/4}, ease: Power2.easeOut});

// scroll left and right
$landingInnerContent.on("mousemove", function(e) {
  if (e.clientX > $landingWrapper.width() / 2) {
    mytween = TweenMax.to($landingWrapper, 2, {
      scrollTo: {
        x: "+=350"
      },
      ease: Power2.easeOut
    });
  } else {
    mytween = TweenMax.to($landingWrapper, 2, {
      scrollTo: {
        x: "-=350"
      },
      ease: Power2.easeOut
    });
  }
});