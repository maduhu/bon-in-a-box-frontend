'use strict';

angular.module('adminConsole')

	// =========================================================================
	// Acces to directories api
	// =========================================================================
	.factory('DirectoryFactory', ['$resource', function($resource){
		return $resource("/api/directories/:id");
	}])

	// =========================================================================
	// Acces to tools api
	// =========================================================================
	.factory('ToolFactory', ['$resource', function($resource){
		return $resource("/api/tools/:id");
	}]);
