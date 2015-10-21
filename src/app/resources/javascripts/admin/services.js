'use strict';

angular.module('adminConsole')

	//==============================================
	// BOOTSTRAP GROWL
	//==============================================
	.service('growlService', function(){
		var gs = {};
		gs.growl = function(message, type) {
			$.notify({
				message: message
			},{
				type: type,
				allow_dismiss: false,
				className: 'btn-xs btn-inverse',
				placement: {
					from: 'top',
					align: 'right'
				},
				delay: 2500,
				animate: {
					enter: 'animated bounceIn',
					exit: 'animated bounceOut'
				},
				offset: {
					x: 20,
					y: 85
				}
			});
		};

		return gs;
	})

	// =========================================================================
	// Header Messages and Notifications list Data
	// =========================================================================

	.service('messageService', ['$resource', function($resource){
		this.getMessage = function(img, user, text) {
			var gmList = $resource("/data/messages-notifications.json");
			return gmList.get({
				img: img,
				user: user,
				text: text
			});
		};
	}]);
