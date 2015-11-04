'use strict';

angular.module('bonInABoxHome')
	// =========================================================================
	// SEARCHED CATEGORIES
	// =========================================================================
	.directive('listTools', function() {
		return {
			restrict: 'E',
			replace: false,
			scope: {
				availableTools: '='
			},
			link: function(scope, elem, attrs) {
				console.log(scope.availableTools);
			},
			template: function(elem, attr) {
				var result = '' +
					'<div class="resultados">' +
						'<div class="card_herramienta" data-ng-repeat="tool in availableTools">' +
							'<div class="crop4" data-ng-show="tool.thumbnailImage">' +
								'<img src="/uploads/{{tool.thumbnailImage}}">' +
							'</div>' +
							'<div class="titulos_card">' +
								'<h3>{{tool.name.english}}</h3>' +
								'<h5>{{tool.directory.subtitle.english}}</h5>' +
							'</div>' +
							'<p>{{tool.shortDescription.english}}</p>' +
							'<ul>' +
								'<li>' +
									'<div class="icon-ico-06"></div>' +
								'</li>' +
								'<li>' +
									'<div class="icon-ico-07"></div>' +
								'</li>' +
								'<li>' +
									'<div class="icon-ico-08"></div>' +
								'</li>' +
								'<li>' +
									'<div class="icon-ico-09"></div>' +
								'</li>' +
							'</ul>' +
							'<button class="ver_mas right" data-toggle="tooltip" title="more" href="")>+</button>' +
						'</div>' +
					'</div>';
				return result;
			}
		};
	});
