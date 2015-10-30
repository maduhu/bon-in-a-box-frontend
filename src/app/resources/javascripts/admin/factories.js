'use strict';

angular.module('adminConsole')

	// =========================================================================
	// Header Messages and Notifications list Data
	// =========================================================================

	.service('DirectoryFactory', ['$resource', function($resource){
		return $resource("/api/directories/:id");
	}]);
