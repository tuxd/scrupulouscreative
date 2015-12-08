(function($){
  $(document).foundation();

  $("#slick-quotes").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>'
  });

  $("select").dropkick();

  var nav = $("nav");
  var navicon = $('#navicon');
  var stickyCont = $('[data-sticky-container]');
  var stickyHeightOrig = $(stickyCont).height();
  var contactButton = $('.contact-button');
  var contactOffset = $('#contact').offset().top;

  var cboxOptions = {
    width: '95%',
    height: '95%',
    maxWidth: '960px',
    maxHeight: '960px',
    rel: 'work',
    transition:'fade',
    fixed:'true'
  };

  $(navicon).on('click', function () {
    $(this).toggleClass('x');
    nav.toggleClass('open');
  });

  $('a.work').colorbox(cboxOptions);

  $(window).resize(function(){
    $.colorbox.resize();
  });


  $(window).on('resize', function () {
    if(Foundation.MediaQuery.atLeast('large')) {
      if(nav.hasClass('open')){
        navicon.toggleClass('x');
        nav.toggleClass('open');
      }
    }
    contactOffset = $('#contact').offset().top;

  });

  // smooth scroll to contact section on "contact us now" button click
  $(contactButton).on('click', function () {
    $('html, body').animate({scrollTop: contactOffset - 60}, 400);
    return false;
  });


  //$("a.work").colorbox({rel:'work', transition:'fade',fixed:'true', maxHeight: '90%'});


 // $('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});

  var tl = new TimelineLite();

  tl.to("#scrupulous", 0.4,{ opacity: 1 })
    .staggerTo('.letter', 0.4, { rotationX: 0, opacity:1, transformOrigin:"right bottom", ease:Power4.easeInOut }, 0.08)
    .to(".menu", 0.01,{ opacity: 1 })
    .staggerTo('.menu a', 0.4, { rotationX: 0, opacity:1, transformOrigin:"right bottom", ease:Power4.easeInOut }, 0.08, "menu")
    .to("#creative", 1, {alpha: 1}, "menu")
    .play();


}(jQuery));

