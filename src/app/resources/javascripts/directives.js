'use strict';

angular.module('bonInABoxHome')
	// =========================================================================
	// LIST RESULT TOOLS
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
								'<li data-ng-repeat="category in tool.categories">' +
									'<div class="icon-ico-01" data-ng-show="category === \'Observation Design\'" uib-tooltip="Observation Design" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-02" data-ng-show="category === \'Data collection\'" uib-tooltip="Data collection" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-03" data-ng-show="category === \'Data Management\'" uib-tooltip="Data Management" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-04" data-ng-show="category === \'Data analysis\'" uib-tooltip="Data analysis" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-05" data-ng-show="category === \'Report results\'" uib-tooltip="Report results" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-06" data-ng-show="category === \'Communities composition\'" uib-tooltip="Communities composition" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-07" data-ng-show="category === \'Ecosystem function\'" uib-tooltip="Ecosystem function" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-08" data-ng-show="category === \'Ecosystem structure\'" uib-tooltip="Ecosystem structure" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-09" data-ng-show="category === \'Genetic composition\'" uib-tooltip="Genetic composition" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-10" data-ng-show="category === \'Species populations\'" uib-tooltip="Species populations" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-11" data-ng-show="category === \'Species traits\'" uib-tooltip="Species traits" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-12" data-ng-show="category === \'Ecosystem services\'" uib-tooltip="Ecosystem services" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-13" data-ng-show="category === \'Citizen science\'" uib-tooltip="Citizen science" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-14" data-ng-show="category === \'Traditional knowledge\'" uib-tooltip="Traditional knowledge" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-15" data-ng-show="category === \'Invasive species\'" uib-tooltip="Invasive species" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-16" data-ng-show="category === \'CITES\'" uib-tooltip="CITES" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-17" data-ng-show="category === \'Migratory\'" uib-tooltip="Migratory" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-18" data-ng-show="category === \'Fresh water\'" uib-tooltip="Fresh water" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-19" data-ng-show="category === \'Marine\'" uib-tooltip="Marine" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-20" data-ng-show="category === \'Terrestrial\'" uib-tooltip="Terrestrial" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-21" data-ng-show="category === \'Dataset\'" uib-tooltip="Dataset" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-22" data-ng-show="category === \'Software\'" uib-tooltip="Software" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-23" data-ng-show="category === \'Data standards\'" uib-tooltip="Data standards" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-24" data-ng-show="category === \'Literature\'" uib-tooltip="Literature" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-25" data-ng-show="category === \'Amphibians\'" uib-tooltip="Amphibians" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-26" data-ng-show="category === \'Birds\'" uib-tooltip="Birds" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-27" data-ng-show="category === \'Invertebrates\'" uib-tooltip="Invertebrates" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-28" data-ng-show="category === \'Mammals\'" uib-tooltip="Mammals" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-29" data-ng-show="category === \'Fish\'" uib-tooltip="Fish" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-30" data-ng-show="category === \'Reptiles\'" uib-tooltip="Reptiles" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
									'<div class="icon-ico-31" data-ng-show="category === \'Plants\'" uib-tooltip="Plants" tooltip-placement="bottom" tooltip-trigger="mouseenter"></div>' +
								'</li>' +
							'</ul>' +
							'<button class="ver_mas right" data-toggle="tooltip" title="more" href="")>+</button>' +
						'</div>' +
					'</div>';
				return result;
			}
		};
	})

// =========================================================================
	// LIST RESULT TOOLS
	// =========================================================================
	.directive('listDirectories', function() {
		return {
			restrict: 'E',
			replace: false,
			scope: {
				availableTools: '='
			},
			template: function(elem, attr) {
				var result = '' +
					'<div class="card_directory clearfix" data-ng-repeat="tool in availableTools">' +
						'<div class="visual clearfix">' +
							'<div class="logo left">' +
								'<img data-ng-show="tool.directory.thumbnailImage" src="/uploads/{{tool.directory.thumbnailImage}}">' +
							'</div>' +
							'<div class="dirlogo right">' +
								'<img src="/images/instsm.png" data-ng-show="tool.directory.category === \'Institution\'">' +
								'<img src="/images/inicsm.png" data-ng-show="tool.directory.category === \'Initiative\'">' +
								'<img src="/images/invessm.png" data-ng-show="tool.directory.category === \'Investigator\'">' +
							'</div>' +
						'</div>' +
						'<h3>{{tool.directory.responsibleName.english}}</h3>' +
						'<h5>{{tool.directory.country}}</h5>' +
						'<p>{{tool.directory.shortDescription.english}}</p>' +
						'<a ng-href="{{tool.directory.urlWebsite}}">Web site</a>' +
						'<a ng-href="mailto:{{tool.directory.email}}">Contact</a>' +
					'</div>';
				return result;
			}
		};
	})

	// =========================================================================
	// TOGGLE SEARCH INPUT
	// =========================================================================
	.directive('toggleSearchInput', function(){
		return {
			restrict: 'A',
			link: function(scope, element) {
				element.click(function(){
					angular.element('.buscador').toggleClass('hidden');
				});
			}
		};
	});
