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
		})
		.state('add_tool', {
			url: '/add_tool',
			templateUrl: '/views/add_tool.html'
		})
		.state('add_tool_es', {
			url: '/add_tool_es',
			templateUrl: '/views/add_tool_es.html'
		})
		.state('add_tool_pt', {
			url: '/add_tool_pt',
			templateUrl: '/views/add_tool_pt.html'
		})
		.state('tool_comment', {
			url: '/tool_comment',
			templateUrl: '/views/tool_comment.html'
		});
	});
