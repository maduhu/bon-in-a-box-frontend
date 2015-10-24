'use strict';

angular.module('adminConsole')

	// =========================================================================
	// MAINMENU COLLAPSE
	// =========================================================================
	.directive('toggleSidebar', function(){
		return {
			restrict: 'A',
			scope: {
				modelLeft: '=',
				modelRight: '='
			},

			link: function(scope, element, attr) {
				element.on('click', function(){
					if (element.data('target') === 'mainmenu') {
						if (scope.modelLeft === false) {
							scope.$apply(function(){
								scope.modelLeft = true;
							});
						} else {
							scope.$apply(function(){
								scope.modelLeft = false;
							});
						}
					}
				});
			}
		};
	})

	// =========================================================================
	// SUBMENU TOGGLE
	// =========================================================================

	.directive('toggleSubmenu', function(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.click(function(){
					element.parent().toggleClass('toggled');
					element.parent().find('ul').stop(true, false).slideToggle(200);
				});
			}
		};
	})

	// =========================================================================
	// WAVES
	// =========================================================================

	// For .btn classes
	.directive('btn', function(){
		return {
			restrict: 'C',
			link: function(scope, element) {
				if(element.hasClass('btn-icon') || element.hasClass('btn-float')) {
					Waves.attach(element, ['waves-circle']);
				} else if(element.hasClass('btn-light')) {
					Waves.attach(element, ['waves-light']);
				} else {
					Waves.attach(element);
				}

				Waves.init();
			}
		}
	});
