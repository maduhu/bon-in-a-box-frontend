'use strict';

var height = document.getElementById('titlebar').offsetHeight;
var bheight = 500;
var current = 1;

$('.resultados_wrapper .resultados').masonry({
  // options
  itemSelector: '.card_herramienta',
  columnWidth: 230,
  gutter: 10
});



$(window).scroll(_.throttle(function(e)  {

  if( $(this).scrollTop() > height ) {
    $("#mainnav").addClass("nav_scrolled");
  } else {
    $("#mainnav").removeClass("nav_scrolled");
  }

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
}, 400));

/*scrollbar*/

$(function() {
    $('.scrollp').perfectScrollbar();
});

/*wallop*/

var wallopEl = document.querySelector('.Wallop--slide');
var wallop = new Wallop(wallopEl);

var paginationDots = Array.prototype.slice.call(document.querySelectorAll('.menu_about .Wallop-dot'));
/*
Attach click listener on the dots
*/
paginationDots.forEach(function (dotEl, index) {
  dotEl.addEventListener('click', function() {
    wallop.goTo(index);
  });
});
/*
Listen to wallop change and update classes
*/
wallop.on('change', function(event) {
  removeClass(document.querySelector('.menu_about .Wallop-dot--current'), 'Wallop-dot--current');
  addClass(paginationDots[event.detail.currentItemIndex], 'Wallop-dot--current');
});
// Helpers
function addClass(element, className) {
  if (!element) { return; }
  element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
}

function removeClass(element, className) {
  if (!element) { return; }
  element.className = element.className.replace(className, '');
}

var wallopE2 = document.querySelector('.componentes.Wallop--slide');
var wallop2 = new Wallop(wallopE2);

var paginationDots2 = Array.prototype.slice.call(document.querySelectorAll('.hexicon .Wallop-dot'));
/*
Attach click listener on the dots
*/
paginationDots2.forEach(function (dotEl, index) {
  dotEl.addEventListener('click', function() {
    wallop2.goTo(index);
  });
});
/*
Listen to wallop change and update classes
*/
wallop2.on('change', function(event) {
  removeClass(document.querySelector('.hexicon .Wallop-dot--current'), 'Wallop-dot--current');
  addClass(paginationDots2[event.detail.currentItemIndex], 'Wallop-dot--current');
});
// Helpers
function addClass(element, className) {
  if (!element) { return; }
  element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
}

function removeClass(element, className) {
  if (!element) { return; }
  element.className = element.className.replace(className, '');
}
