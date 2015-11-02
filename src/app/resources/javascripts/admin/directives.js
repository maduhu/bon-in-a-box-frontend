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

			link: function(scope, element) {
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
	// CATEGORY TOGGLE
	// =========================================================================

	.directive('toggleCategory', function(){
		return {
			restrict: 'A',
			link: function(scope, element) {
				element.click(function(){
					element.parent().parent().find('button.selected').removeClass('selected');
					element.toggleClass('selected');
					element.parent().parent().parent().parent().find('div.iconosformulario').addClass('hidden');
					switch(element.attr('title')) {
						case "Monitoring Components":
							element.parent().parent().parent().parent().find('div#subCat1').removeClass('hidden');
							break;
						case "EBV":
							element.parent().parent().parent().parent().find('div#subCat2').removeClass('hidden');
							break;
						case "By Theme":
							element.parent().parent().parent().parent().find('div#subCat3').removeClass('hidden');
							break;
						case "By Kind":
							element.parent().parent().parent().parent().find('div#subCat4').removeClass('hidden');
							break;
						case "By Taxonomy":
							element.parent().parent().parent().parent().find('div#subCat5').removeClass('hidden');
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
				taggedCategories: '='
			},
			link: function(scope, element, attrs) {
				element.click(function() {
					element.toggleClass('selected');
					if(element.hasClass('selected')) {
						scope.taggedCategories.push(attrs.title);
					} else {
						scope.taggedCategories.splice(scope.taggedCategories.indexOf(attrs.title), 1);
					}
				});
			}
		};
	})

	// =========================================================================
	// DIRECTORY TYPE TOGGLE
	// =========================================================================
	.directive('toggleDirectoryType', function(){
		return {
			restrict: 'A',
			scope: {
				directoryType: '='
			},
			link: function(scope, element, attrs) {
				element.click(function() {
					element.parent().parent().find('button.selected').removeClass('selected');
					element.toggleClass('selected');
					scope.directoryType = attrs.title;
				});
			}
		};
	})

	// =========================================================================
	// CATEGORY TOGGLE
	// =========================================================================
	.directive('toggleSubmenu', function(){
		return {
			restrict: 'A',
			link: function(scope, element) {
				element.click(function(){
					element.parent().toggleClass('toggled');
					element.parent().find('ul').stop(true, false).slideToggle(200);
				});
			}
		};
	})

	// =========================================================================
	// SHOW SELECTED CATEGORIES
	// =========================================================================
	.directive('selectedCategories', function() {
		return {
			restrict: 'E',
			replace: false,
			scope: {
				taggedCategories: '='
			},
			template: '<h4 ng-show="taggedCategories.length">Current selected categories</h4><div class="tagsinput"><span class="tag label label-info" ng-repeat="categorie in taggedCategories">{{categorie}}</span></div>'
		};
	})

	// =========================================================================
	// TOGGLE BETWEEN LANGUAGE DATA VERSIONS
	// =========================================================================
	.directive('toggleSections', function() {
		return {
			restrict: 'A',
			link: function(scope, element) {
				element.click(function(){
					angular.element('#english').addClass('hidden');
					angular.element('#spanish').addClass('hidden');
					angular.element('#portuguese').addClass('hidden');
					angular.element('#comments').addClass('hidden');
					switch(element.attr('title')) {
						case 'English':
							angular.element('#english').removeClass('hidden');
							break;
						case 'Spanish':
							angular.element('#spanish').removeClass('hidden');
							break;
						case 'Portuguese':
							angular.element('#portuguese').removeClass('hidden');
							break;
						case 'Comment':
							angular.element('#comments').removeClass('hidden');
							break;
					}
				});
			}
		};
	})

	.directive('directoriesSelect', ['DirectoryFactory', function(DirectoryFactory) {
		return {
			restrict: 'A',
			require:'ngModel',
			link: function(scope, elem, attrs, ngModelCtrl) {
				// Get list of directories data for select
				DirectoryFactory.query({fields: '_id,responsibleName.english'}, function(directories) {
					var directoryList = directories.map(function(val) {
						return {
							id: val._id,
							text: val.responsibleName.english
						};
					});
					elem.select2({
						data: directoryList
					});
				});
			}
		};
	}])

	// =========================================================================
	// WAVES
	// =========================================================================

	// For .btn classes
	/*.directive('btn', function(){
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
	})*/;
