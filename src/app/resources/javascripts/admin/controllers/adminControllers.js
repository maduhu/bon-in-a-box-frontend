'use strict';

angular.module('adminConsole')
	.controller('adminConsoleCtrl', function($timeout, $state, growlService){
		//Welcome Message
		growlService.growl('Welcome to box in a box admin dashboard!', 'inverse');

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
	})

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
