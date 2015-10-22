'use strict';

angular.module('adminConsole')
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");

		$stateProvider

		//------------------------------
		// HOME
		//------------------------------

		.state('home', {
			url: '/home',
			templateUrl: '/views/home.html'
		})

		.state('tools', {
			url: '/tools',
			templateUrl: '/views/tools.html'
		})

		.state('directory', {
			url: '/directory',
			templateUrl: '/views/directory.html'
		});
	});
