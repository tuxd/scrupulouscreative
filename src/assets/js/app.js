(function($){
  $(document).foundation();

  //var menuSticky = new Foundation.Sticky($('#menuSticky'));


  var tl = new TimelineLite();

  tl.set('.letter', { scale: 0.6 })
    .to("#scrupulous", 0.4,{ opacity: 1 })
    .staggerTo('.letter', 0.4, { rotationX: 0, scale:1, opacity:1, transformOrigin:"right bottom", ease:Power4.easeInOut }, 0.08)
    .to(".menu", 0.01,{ opacity: 1 })
    .staggerTo('.menu a', 0.4, { rotationX: 0, opacity:1, transformOrigin:"right bottom", ease:Power4.easeInOut }, 0.08, "menu")
    .to("#creative", 1, {alpha: 1}, "menu")
    .play();


}(jQuery));

