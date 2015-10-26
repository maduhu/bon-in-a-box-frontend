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

		.state('users', {
			url: '/users',
			templateUrl: '/views/users.html'
		})

		.state('directory', {
			url: '/directory',
			templateUrl: '/views/directory.html'
		})
		.state('add_tool', {
			url: '/add_tool',
			templateUrl: '/views/add_tool.html'
		})

		.state('edit_tool_comment', {
			url: '/edit_tool_comment',
			templateUrl: '/views/edit_tool_comment.html'
		})
		.state('user_review', {
			url: '/user_review',
			templateUrl: '/views/user_review.html'
		})
		.state('tool_review', {
			url: '/tool_review',
			templateUrl: '/views/tool_review.html'
		})
		.state('directory_review', {
			url: '/directory_review',
			templateUrl: '/views/directory_review.html'
		})
		.state('tool_edit', {
			url: '/tool_edit',
			templateUrl: '/views/tool_edit.html'
		})
		.state('directory_edit', {
			url: '/directory_edit',
			templateUrl: '/views/directory_edit.html'
		})
		.state('edit_tool_es', {
			url: '/edit_tool_es',
			templateUrl: '/views/edit_tool_es.html'
		})
		.state('edit_directory_es', {
			url: '/edit_directory_es',
			templateUrl: '/views/edit_directory_es.html'
		})
		.state('edit_tool_pt', {
			url: '/edit_tool_pt',
			templateUrl: '/views/edit_tool_pt.html'
		})
		.state('user_edit', {
			url: '/user_edit',
			templateUrl: '/views/user_edit.html'
		})
		.state('edit_directory_pt', {
			url: '/edit_directory_pt',
			templateUrl: '/views/edit_directory_pt.html'
		});
	});
