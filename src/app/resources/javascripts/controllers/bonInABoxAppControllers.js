'use strict';

angular.module('bonInABoxHome')
	.controller('bonInABoxHomeCtrl', ['$timeout', '$state', 'ToolFactory', function($timeout, $state, ToolFactory){

		this.init = function(data) {
			// Current user full name
			this.username = data;
		};

		this.searchTools = ToolFactory.query();

		//this.searchTextCondition
		//
		this.startSearch = function() {
			console.log(this.searchTextCondition);
			this.searchTools = ToolFactory.query({query:this.searchTextCondition, status: 'approved'});

			setTimeout( function(){
				// Do something after 1 second
				$('.resultados_wrapper .resultados').masonry('reloadItems');
				$('.resultados_wrapper .resultados').masonry('layout');
			}, 3000 );
		};

	}]);
