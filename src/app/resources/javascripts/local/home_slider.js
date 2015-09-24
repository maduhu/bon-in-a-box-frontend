'use strict';

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
