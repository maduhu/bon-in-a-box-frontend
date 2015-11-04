'use strict';

var height = document.getElementById('titlebar').offsetHeight;
var bheight = 500;
var current = 1;

/*$('.resultados_wrapper .resultados').masonry({
  // options
  itemSelector: '.card_herramienta',
  columnWidth: 230,
  gutter: 15
});*/

$(window).scroll(function(){
  var top = $(document).scrollTop();
  if( $(this).scrollTop() > height ) {
    $("#mainnav").addClass("nav_scrolled");
  } else {
    $("#mainnav").removeClass("nav_scrolled");
  }
});

$(window).scroll(_.throttle(function(e)  {
  var top = $(document).scrollTop();
  if (top >= bheight * 0 && top < bheight * 1 && current !== 1) {
    console.log("0-500");
    current = 1;
     $("#foto").fadeOut(700, function() {
         $(this).attr("src","/images/bg1.jpg");
     }).fadeIn(700);
  }
  else if (top >= bheight * 1 && top < bheight * 2 && current !== 2) {
    console.log("500-500");
    current = 2;
     $("#foto").fadeOut(700, function() {
         $(this).attr("src","/images/bg2.jpg");
     }).fadeIn(700);
  }
  else if (top >= bheight * 2 && top < bheight * 3  && current !== 3) {
    console.log("500-1500");
    current = 3;
     $("#foto").fadeOut(700, function() {
         $(this).attr("src","/images/bg3.jpg");
     }).fadeIn(700);
  }
  else if (top >= bheight * 3 && top < bheight * 4 && current !== 4) {
    console.log("1500-2000");
    current = 4;
     $("#foto").fadeOut(700, function() {
         $(this).attr("src","/images/bg4.jpg");
     }).fadeIn(700);
  }
}, 400));

/*scrollbar*/

$(function() {
    $('.scrollp').perfectScrollbar();
});

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip({'placement': 'bottom', 'container': 'body' });

  $( "#ojo_her" ).click(function() {
    $( ".col_herramientas .categorias, .col_herramientas .filtros, .col_herramientas .resultados_wrapper" ).toggle('slow');
  });
  $( "#ojo_dir" ).click(function() {
    $( ".col_directorio .categorias, .col_directorio .areaforstuff" ).toggle('slow');
  });

  $( ".hamburguesa" ).click(function() {
    $( "#mainnav .contenedor" ).toggle('fast');
  });
  $(window).resize(function() {
      if ($(window).width() <= 320) {
         // Leave empty
      }
      else {
        // Rest of your jQuery code can go here
        $( ".menu_principal li" ).click(function() {
          $( "#mainnav .contenedor" ).hide('fast');
          console.log("ola");
        });
      }
   });
});
