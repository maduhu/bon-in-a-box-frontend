'use strict';

var height = document.getElementById('titlebar').offsetHeight;
var bheight = 500;
var current = 1;

$(window).scroll(_.throttle(function(e)  {

  if( $(this).scrollTop() > height ) {
    $("#mainnav").addClass("nav_scrolled");
  } else {
    $("#mainnav").removeClass("nav_scrolled");
  }

<<<<<<< HEAD
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
         $(this).attr("src","/images/bg2.jpg")
     }).fadeIn(700);
  }
  else if (top >= bheight * 2 && top < bheight * 3  && current !== 3) {
    console.log("500-1500");
    current = 3;
     $("#foto").fadeOut(700, function() {
         $(this).attr("src","/images/bg3.jpg")
     }).fadeIn(700);
  }
  else if (top >= bheight * 3 && top < bheight * 4 && current !== 4) {
    console.log("1500-2000");
    current = 4;
     $("#foto").fadeOut(700, function() {
         $(this).attr("src","/images/bg4.jpg")
     }).fadeIn(700);
  }
}, 250));
=======
 var actualimage = '';

 $(document).scroll(function() {
     var top = $(document).scrollTop();
     var bheight = 500;
     var imgs = new Array();
         imgs[0] = "/images/bg1.jpg";
         imgs[1] = "/images/bg2.jpg";
         imgs[2] = "/images/bg3.jpg";
         imgs[3] = "/images/bg4.jpg";  
     if (top >= bheight * 0 && top < bheight * 1 && actualimage !== imgs[0]) {
         $('.backg').css('background-image', 'url(' + imgs[0] + ')');
         actualimage = imgs[0];
     }
     else if (top >= bheight * 1 && top < bheight * 2 && actualimage !== imgs[1]) {
         $('.backg').css('background-image', 'url(' + imgs[1] + ')');
         actualimage = imgs[1];
     }
     else if (top >= bheight * 2 && top < bheight * 3 && actualimage !== imgs[2]) {
         $('.backg').css('background-image', 'url(' + imgs[2] + ')');
         actualimage = imgs[2];
     }
     else if (top >= bheight * 3 && top < bheight * 4 && actualimage !== imgs[3]) {
         $('.backg').css('background-image', 'url(' + imgs[3] + ')');
         actualimage = imgs[3];
     }
 });
>>>>>>> 64b8a8211bfae7bfc7ad7ce0f5676120476858cd
