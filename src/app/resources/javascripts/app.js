'use strict';

var height = document.getElementById('titlebar').offsetHeight;

$(window).scroll(function()  {

  if( $(this).scrollTop() > height ) {
    $("#mainnav").addClass("nav_scrolled");
  } else {
    $("#mainnav").removeClass("nav_scrolled");
  }
});

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
