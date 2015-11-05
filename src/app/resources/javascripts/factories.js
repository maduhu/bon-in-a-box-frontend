'use strict';

angular.module('bonInABoxHome')

	// =========================================================================
	// Acces to directories api
	// =========================================================================
	.factory('DirectoryFactory', ['$resource', function($resource){
		return $resource("/api/directories/:id", {directoryId:'@id'});
	}])

	// =========================================================================
	// Acces to tools api
	// =========================================================================
	.factory('ToolFactory', ['$resource', function($resource){
		return $resource("/api/tools/:id", {userId:'@id'});
	}]);