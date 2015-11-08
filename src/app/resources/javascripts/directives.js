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
				availableTools: '=',
				someCtrlFn: '&callbackFn'
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
									'<div class="icon-ico-01" data-ng-show="category === \'Observation Design\'" title="Observation Design" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-02" data-ng-show="category === \'Data collection\'" title="Data collection" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-03" data-ng-show="category === \'Data Management\'" title="Data Management" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-04" data-ng-show="category === \'Data analysis\'" title="Data analysis" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-05" data-ng-show="category === \'Report results\'" title="Report results" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-06" data-ng-show="category === \'Communities composition\'" title="Communities composition" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-07" data-ng-show="category === \'Ecosystem function\'" title="Ecosystem function" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-08" data-ng-show="category === \'Ecosystem structure\'" title="Ecosystem structure" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-09" data-ng-show="category === \'Genetic composition\'" title="Genetic composition" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-10" data-ng-show="category === \'Species populations\'" title="Species populations" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-11" data-ng-show="category === \'Species traits\'" title="Species traits" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-12" data-ng-show="category === \'Ecosystem services\'" title="Ecosystem services" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-13" data-ng-show="category === \'Citizen science\'" title="Citizen science" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-14" data-ng-show="category === \'Traditional knowledge\'" title="Traditional knowledge" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-15" data-ng-show="category === \'Invasive species\'" title="Invasive species" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-16" data-ng-show="category === \'CITES\'" title="CITES" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-17" data-ng-show="category === \'Migratory\'" title="Migratory" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-18" data-ng-show="category === \'Fresh water\'" title="Fresh water" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-19" data-ng-show="category === \'Marine\'" title="Marine" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-20" data-ng-show="category === \'Terrestrial\'" title="Terrestrial" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-21" data-ng-show="category === \'Dataset\'" title="Dataset" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-22" data-ng-show="category === \'Software\'" title="Software" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-23" data-ng-show="category === \'Data standards\'" title="Data standards" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-24" data-ng-show="category === \'Literature\'" title="Literature" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-25" data-ng-show="category === \'Amphibians\'" title="Amphibians" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-26" data-ng-show="category === \'Birds\'" title="Birds" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-27" data-ng-show="category === \'Invertebrates\'" title="Invertebrates" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-28" data-ng-show="category === \'Mammals\'" title="Mammals" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-29" data-ng-show="category === \'Fish\'" title="Fish" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-30" data-ng-show="category === \'Reptiles\'" title="Reptiles" data-toggle="tooltip"></div>' +
									'<div class="icon-ico-31" data-ng-show="category === \'Plants\'" title="Plants" data-toggle="tooltip"></div>' +
								'</li>' +
							'</ul>' +
							'<button class="ver_mas right" data-toggle="tooltip" title="more" data-ng-click="someCtrlFn({id: tool._id})")>+</button>' +
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
	// CATEGORY TOGGLE
	// =========================================================================

	.directive('toggleCategory', function(){
		return {
			restrict: 'A',
			scope: {
				categoryName: '='
			},
			link: function(scope, element, attrs) {
				element.click(function(){
					element.parent().parent().find('button.selected').removeClass('selected');
					element.toggleClass('selected');
					element.parent().parent().parent().parent().find('div.filtros').addClass('hidden');
					switch(scope.categoryName) {
						case "Monitoring Components":
							element.parent().parent().parent().parent().find('.cd1').removeClass('hidden');
							break;
						case "EBV":
							element.parent().parent().parent().parent().find('.cd2').removeClass('hidden');
							break;
						case "By Theme":
							element.parent().parent().parent().parent().find('.cd3').removeClass('hidden');
							break;
						case "By Kind":
							element.parent().parent().parent().parent().find('.cd4').removeClass('hidden');
							break;
						case "By Taxonomy":
							element.parent().parent().parent().parent().find('.cd5').removeClass('hidden');
							break;
						case "All":
							element.parent().parent().parent().parent().find('div.filtros button').removeClass('selected');
							break;
					}
				});
			}
		};
	})

	// =========================================================================
	// SUBCATEGORY TOGGLE
	// =========================================================================
	.directive('toggleSubcategory', function(){
		return {
			restrict: 'A',
			scope: {
				taggedCategories: '=',
				subcategoryName: '='
			},
			link: function(scope, element, attrs) {
				element.click(function() {
					element.toggleClass('selected');
					if(element.hasClass('selected')) {
						scope.taggedCategories.push(scope.subcategoryName);
					} else {
						scope.taggedCategories.splice(scope.taggedCategories.indexOf(scope.subcategoryName), 1);
					}
				});
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
