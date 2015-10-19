'use strict';

var configConsole = angular.module('configConsole', ['adminConsole'], function(adminConsole) {
	adminConsole.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");

		$stateProvider

		//------------------------------
		// HOME
		//------------------------------

		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
		});
	});
});
