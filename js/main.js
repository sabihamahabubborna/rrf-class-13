jQuery( document ).ready(function($) {
 

    
 

var homepageSlides = $(".homepage-slides");
homepageSlides.owlCarousel({
  items:1,
   
    loop:true,
    dots:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    navText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],



  });
homepageSlides.on('translate.owl.carousel', function(event) {
  $(".welcome-area-text h4").removeClass("animated bounceIn");
   $(".welcome-area-text h1").removeClass("animated jackInTheBox");

  
   $(".welcome-area-text p").removeClass("animated fadeIn");
})

homepageSlides.on('translated.owl.carousel', function(event) {
  $(".welcome-area-text h4").addClass("animated bounceIn");
   $(".welcome-area-text h1").addClass("animated jackInTheBox");
    $(".welcome-area-text p").addClass("animated fadeIn");
})
$(".wellcome-area-vedio").YTPlayer({
  
 fitToBackground: true,
    videoId: 'LSmgKRx5pBo'
  });

});



