'use strict';

angular.module('adminConsole')
	.controller('adminConsoleCtrl', ["$timeout", "$state", "growlService", function($timeout, $state, growlService){

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
	}])

	// =========================================================================
	// Upload tool
	// =========================================================================
	.controller('formToolUploadCtrl', ['$scope', 'Upload', 'swal', '$location', 'DirectoryFactory', function($scope, Upload, swal, $location, DirectoryFactory){
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

		this.submit = function() {
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
				file: this.thumbnailToolFile,
				fileDescriptive: this.descriptiveToolFile,
				fileDirectory: this.directoryFile,
				selectedDirectory: this.selectedDirectory,
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

			console.log(this.data);

			Upload.upload({
				url: '/api/tools',
				data: this.data
			}).then(function (resp) {
				$location.path("/tools");
				swal({
					title: "Successfull",
					text: "Tool data has been saved successfully",
					type: "success",
					showCancelButton: false,
					confirmButtonClass: "btn-success",
					confirmButtonText: "Close",
					closeOnConfirm: true
				});
			}, function (resp) {
				swal({
					title: "Error",
					text: "Error saving tool to database",
					type: "error",
					showCancelButton: false,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "Close",
					closeOnConfirm: true
				});
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
	})

	// =========================================================================
	// Directory list Controller
	// =========================================================================
	.controller('directoryTableCtrl', ['$filter', 'NgTableParams', 'DirectoryFactory', function($filter, NgTableParams, DirectoryFactory){
		this.tableParamsDirectory = new NgTableParams({
			page: 1, // show first page
			count: 10, // initial page size
			sorting: {
				responsibleName : 'asc' // initial sorting
			}
		}, {
			// page size buttons (right set of buttons in demo)
			counts: [5, 10, 25, 50],
			// determines the pager buttons (left set of buttons in demo)
			paginationMaxBlocks: 5,
			paginationMinBlocks: 2,
			getData: function($defer, params) {
				DirectoryFactory.query(function(directories) {
					var orderedRecentDirectory = params.sorting() ?
																			$filter('orderBy')(directories, params.orderBy()):
																			'responsibleName';
					var newFilter = {};
					if(params.filter().responsibleName && params.filter().responsibleName !== "") {
						newFilter.responsibleName = {
							english: params.filter().responsibleName
						};
					}
					if(params.filter().category && params.filter().category !== "") {
						newFilter.category = params.filter().category;
					}
					orderedRecentDirectory = params.filter ? $filter('filter')(orderedRecentDirectory, newFilter) : orderedRecentDirectory;
					orderedRecentDirectory = orderedRecentDirectory.slice((params.page() - 1) * params.count(), params.page() * params.count());
					params.total(orderedRecentDirectory.length);
					$defer.resolve(orderedRecentDirectory);
				});
			}
		});
	}])

	// =========================================================================
	// Tool list Controller
	// =========================================================================
	.controller('toolTableCtrl', ['$filter', 'NgTableParams', 'ToolFactory', function($filter, NgTableParams, ToolFactory){
		this.tableParams = new NgTableParams({
			page: 1, // show first page
			count: 10, // initial page size
			sorting: {
				name : 'asc' // initial sorting
			}
		}, {
			// page size buttons (right set of buttons in demo)
			counts: [5, 10, 25, 50],
			// determines the pager buttons (left set of buttons in demo)
			paginationMaxBlocks: 5,
			paginationMinBlocks: 2,
			getData: function($defer, params) {
				ToolFactory.query(function(tools) {
					var orderedRecentTool = params.sorting() ?
																			$filter('orderBy')(tools, params.orderBy()):
																			'name';
					var newFilter = {};
					if(params.filter().name && params.filter().name !== "") {
						newFilter.name = {
							english: params.filter().name
						};
					}
					if(params.filter().responsibleName && params.filter().responsibleName !== "") {
						newFilter.directory = {
							responsibleName: {
								english: params.filter().responsibleName
							}
						};
					}
					if(params.filter().state && params.filter().state !== "") {
						newFilter.state = params.filter().state;
					}
					orderedRecentTool = params.filter ? $filter('filter')(orderedRecentTool, newFilter) : orderedRecentTool;
					orderedRecentTool = orderedRecentTool.slice((params.page() - 1) * params.count(), params.page() * params.count());
					params.total(orderedRecentTool.length);
					$defer.resolve(orderedRecentTool);
				});
			}
		});
	}]);
