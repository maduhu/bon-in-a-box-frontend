'use strict';

exports = module.exports = function(mongoose) {
	return {
		User: require('./user')('user', mongoose)
	};
};
