$(document).ready(function(){
 $('#range_slider').slick({
 	arrows:false,
 	fade:true,
});
});
$(document).ready(function(){
	$('#testimonials-slider').slick({
		autoplay:true,
		autoplaySpeed:4500, 
 		prevArrow:'.testimonials-arrow_right',
 		nextArrow:'.testimonials-arrow_left',
		slidesToShow:3,
		slidesToScroll:3,

      responsive: [
       {
         breakpoint:1200,
         settings:{
         	arrows:false,
        	}
        },      
       {
         breakpoint:700,
         settings:{
         	arrows:false,
					slidesToShow:2,
					slidesToScroll:2,
        	}
        },
       {
         breakpoint:500,
         settings:{
         	arrows:false,
					slidesToShow:1,
					slidesToScroll:1,
        	}
        },        
      ]
	});
});
var openMobile = function() { 
    $('.mobile-menu__open').click(function() { 
        $('.header-nav__menu').fadeIn(300)
        $('.mobile-menu__close').fadeIn(300)
    });

    $('.mobile-menu__close').click(function() { 
        $('.header-nav__menu').fadeOut(300)
        $('.mobile-menu__close').fadeOut(250)
    });  
  };
$(document).ready(openMobile);  
 $('input[type="range"]').on("input change", function(e){
 e.preventDefault();
   var slideno = $(this).val(); 
   $('#range_slider').slick('slickGoTo', slideno-1 );
 });