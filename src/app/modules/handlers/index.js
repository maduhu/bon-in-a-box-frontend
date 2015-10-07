'use strict';

exports = module.exports = function() {
	return {
		middleware: require('./middleware')()
	};
};
