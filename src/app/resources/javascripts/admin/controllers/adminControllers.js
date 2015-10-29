'use strict';

angular.module('adminConsole')
	.controller('adminConsoleCtrl', ["$timeout", "$state", "growlService", "NgTableParams", function($timeout, $state, growlService, NgTableParams){

		this.init = function(data) {
			// Current user full name
			this.username = data;
		};

		//Welcome Message
		growlService.growl('Welcome to Box in a Box admin dashboard!', 'inverse');

		// By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
		this.sidebarToggle = {
			left: false,
			right: false
		};

		// By default template has a boxed layout
		//this.layoutType = localStorage.getItem('ma-layout-status');
		this.layoutType = '1';

		// For Mainmenu Active Class
		this.$state = $state;

		//Close sidebar on click
		this.sidebarStat = function(event) {
			if (!angular.element(event.target).parent().hasClass('active')) {
				this.sidebarToggle.left = false;
			}
		};

		//Listview Search (Check listview pages)
		this.listviewSearchStat = false;

		this.lvSearch = function() {
			this.listviewSearchStat = true;
		};

		//Listview menu toggle in small screens
		this.lvMenuStat = false;

		//Blog
		this.wallCommenting = [];

		this.wallImage = false;
		this.wallVideo = false;
		this.wallLink = false;

		this.cols = [
			{ field: "name", title: "Name", filter: { name: "text" }, sortable: "name", show: true },
			{ field: "responsible", title: "Responsible", filter: { responsible: "text" }, sortable: "responsible", show: true },
			{ field: "state", title: "State", filter: { state: "text" }, sortable: "state", show: true }
		];

		var data = [{ id: 1, name: 'Tool A', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 2, name: 'Tool B', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 3, name: 'Tool C', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 4, name: 'Tool D', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 5, name: 'Tool E', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 6, name: 'Tool F', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 7, name: 'Tool G', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 8, name: 'Tool H', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 9, name: 'Tool I', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 10, name: 'Tool J', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 11, name: 'Tool K', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 12, name: 'Tool L', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 13, name: 'Tool M', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 14, name: 'Tool N', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 15, name: 'Tool O', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 16, name: 'Tool P', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 17, name: 'Tool Q', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 18, name: 'Tool R', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 19, name: 'Tool S', shortDescription: 'Short description', responsible: 'Responsable b', state: 'Activa' },
								{ id: 20, name: 'Tool T', shortDescription: 'Short description', responsible: 'Responsable b', state: 'Sugerida' },
								{ id: 21, name: 'Tool U', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 22, name: 'Tool V', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 23, name: 'Tool W', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 24, name: 'Tool X', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 25, name: 'Tool Y', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 26, name: 'Tool Z', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 27, name: 'Tool AA', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 28, name: 'Tool AB', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 29, name: 'Tool AC', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 30, name: 'Tool AD', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 31, name: 'Tool AE', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 32, name: 'Tool AF', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 33, name: 'Tool AG', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 34, name: 'Tool AH', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 35, name: 'Tool AI', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 36, name: 'Tool AJ', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 37, name: 'Tool AK', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 38, name: 'Tool AL', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 39, name: 'Tool AM', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 40, name: 'Tool AN', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' },
								{ id: 41, name: 'Tool AO', shortDescription: 'Short description', responsible: 'Responsable A', state: 'Activa' }];

		var initialParams = {
			count: 10 // initial page size
		};
		var initialSettings = {
			// page size buttons (right set of buttons in demo)
			counts: [5, 10, 25, 50],
			// determines the pager buttons (left set of buttons in demo)
			paginationMaxBlocks: 5,
			paginationMinBlocks: 2,
			data: data
		};
		this.tableParams = new NgTableParams(initialParams, initialSettings);

		var data2 = [	{ id: 1, nameResponsible: 'Responsible A', category: 'Categoria A' },
									{ id: 2, nameResponsible: 'Responsible B', category: 'Categoria B' },
									{ id: 3, nameResponsible: 'Responsible C', category: 'Categoria B' },
									{ id: 4, nameResponsible: 'Responsible D', category: 'Categoria B' },
									{ id: 5, nameResponsible: 'Responsible E', category: 'Categoria A' },
									{ id: 6, nameResponsible: 'Responsible F', category: 'Categoria B' },
									{ id: 7, nameResponsible: 'Responsible G', category: 'Categoria A' },
									{ id: 8, nameResponsible: 'Responsible H', category: 'Categoria B' },
									{ id: 9, nameResponsible: 'Responsible I', category: 'Categoria B' },
									{ id: 10, nameResponsible: 'Responsible J', category: 'Categoria A' },
									{ id: 11, nameResponsible: 'Responsible K', category: 'Categoria B' },
									{ id: 12, nameResponsible: 'Responsible L', category: 'Categoria B' }
								];

		var initialSettings2 = {
			// page size buttons (right set of buttons in demo)
			counts: [5, 10, 25, 50],
			// determines the pager buttons (left set of buttons in demo)
			paginationMaxBlocks: 5,
			paginationMinBlocks: 2,
			data: data2
		};
		this.tableParamsDirectory = new NgTableParams(initialParams, initialSettings2);

		/*var Api = $resource("/data");
		this.tableParams = new NgTableParams({}, {
			getData: function(params) {
				// ajax request to api
				return Api.get(params.url()).$promise.then(function(data) {
					params.total(data.inlineCount); // recal. page nav controls
					return data.results;
				});
			}
		});*/
	}])

	// =========================================================================
	// Upload tool
	// =========================================================================
	.controller('formToolUploadCtrl', ['$scope', 'Upload', function($scope, Upload){
		// Tagged categories
		this.categories = [];

		this.ratingOptions = {
			ratedFill: "#F39C12",
			normalFill: "#A0A0A0",
			numStars: 5,
			readOnly: false,
			halfStar: true,
			fullStar: false
		};

		// Selected directory type
		this.selectedDirectoryType = "Institution";

		this.toolRating = undefined;

		this.submit = function(form) {
			this.data = {
				name: {
					english: this.toolName,
					spanish: this.toolNameSpanish,
					portuguese: this.toolNamePortuguese
				},
				categories: this.categories,
				shortDescription: {
					english: this.shortDescription,
					spanish: this.shortDescriptionSpanish,
					portuguese: this.shortDescriptionPortuguese
				},
				longDescription: {
					english: this.longDescription,
					spanish: this.longDescriptionSpanish,
					portuguese: this.longDescriptionPortuguese
				},
				urlWebsite: this.urlWebsite,
				contactEmail: this.contactEmail,
				country: this.country,
				file:this.thumbnailToolFile,
				directory: {
					responsibleName: {
						english: this.responsibleName,
						spanish: this.responsibleNameSpanish,
						portuguese: this.responsibleNamePortuguese
					},
					subtitle: {
						english: this.directorySubtitle,
						spanish: this.directorySubtitleSpanish,
						portuguese: this.directorySubtitlePortuguese
					},
					shortDescription: {
						english: this.directoryShortDescription,
						spanish: this.directoryShortDescriptionSpanish,
						portuguese: this.directoryShortDescriptionPortuguese
					},
					urlWebsite: this.directoryWebSite,
					email: this.directoryEmail,
					country: this.responsibleCountry,
					category: this.selectedDirectoryType
				},
				expertReview: {
					textReview: this.toolComment,
					rating: $scope.toolRating
				}
			};

			/*if (form.$valid && this.thumbnailToolFile) {
				console.log("exito");
				console.log(this.thumbnailToolFile);
				console.log(this.data);
			}*/
			Upload.upload({
				url: '/api/tools',
				data: this.data
			}).then(function (resp) {
				console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
			}, function (resp) {
				console.log('Error status: ' + resp.status);
			}, function (evt) {
				var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
			});
		};

		$scope.change = function(event, data) {
			//console.log(data.rating);
		};

		$scope.set = function(event, data) {
			this.toolRating = data.rating;
		};

	}])

	// =========================================================================
	// Header
	// =========================================================================
	.controller('headerCtrl', function($timeout, messageService){
		// Get messages and notification for header
		this.img = messageService.img;
		this.user = messageService.user;
		this.user = messageService.text;

		this.messageResult = messageService.getMessage(this.img, this.user, this.text);

		//Fullscreen View
		this.fullScreen = function() {
			//Launch
			function launchIntoFullscreen(element) {
				if(element.requestFullscreen) {
					element.requestFullscreen();
				} else if(element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if(element.webkitRequestFullscreen) {
					element.webkitRequestFullscreen();
				} else if(element.msRequestFullscreen) {
					element.msRequestFullscreen();
				}
			}

			//Exit
			function exitFullscreen() {
				if(document.exitFullscreen) {
					document.exitFullscreen();
				} else if(document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if(document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				}
			}

			if (exitFullscreen()) {
				launchIntoFullscreen(document.documentElement);
			} else {
				launchIntoFullscreen(document.documentElement);
			}
		};
	});
