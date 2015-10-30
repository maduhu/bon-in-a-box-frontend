'use strict';

var debug = require('debug')('bon-in-a-box-frontend:tool:new');

exports = module.exports = function(models) {
	return function(req, callback) {
		models.Directory.find(function(err, directories) {
			if (err) {
				callback(err);
			}
			callback(err, directories);
		});
	};
};
