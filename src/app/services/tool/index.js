'use strict';

exports = module.exports = function(models) {
	return {
		new: require('./new')(models)
	};
};
