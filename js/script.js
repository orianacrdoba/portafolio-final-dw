//Activador de jQuery

$(document).ready(function(){

    //Activación de Slick Slider

    $('.slick-personas').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        dots: true,
        arrows: true,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000
    });
  });

  // Activación de transición del menú principal

  
		$('nav#menu-principal a, nav#menu-responsive a').bind('click',function(event){
            var $anchor = $(this);  
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000,'easeOutExpo');
            event.preventDefault();
		});

// Función Abrir- Cerrar del menú mobile

$('#abrir').click(function(){
    $('#abrir').hide();
    $('#cerrar').show();

    $('#menu-responsive'). animate({
        right: 0
    },700, 'easeOutExpo');
     event.preventDefault();
 });

 $('#cerrar, nav#menu-responsive a').click(function(){ 
    $('#abrir').show();
    $('#cerrar').hide();

    
    $('#menu-responsive'). animate({
        right: -290

 },700,'easeOutExpo');
    event.preventDefault();
});