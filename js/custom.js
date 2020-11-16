$(function(){
    
    $('.feedback-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    });

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        
        if(scroll > 200){
           $('.navbar').addClass('bg');
         }
        
        else{
            $('.navbar').removeClass('bg');
        }
        
        if(scroll > 550){
            $('.updn').fadeIn(800);
        }
        
        else{
            $('.updn').fadeOut(800);
        }
        
    });


   $('.updn').click(function(){
       $('html, body').animate({scrollTop:0},1000);
   });
    
    
    //wow js//
    
    new WOW().init();
    
    //counter up//
    
   $('.counter').counterUp({
        delay: 2,
        time: 2000
   });
    
    
})