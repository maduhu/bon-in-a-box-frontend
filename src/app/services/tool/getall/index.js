'use strict';

var debug = require('debug')('bon-in-a-box-frontend:tool:getall');

exports = module.exports = function(models) {
	return function(req, callback) {
		models.Tool
			.find()
			.populate('directory')
			.exec(function(err, tools) {
			if (err) {
				callback(err);
			}
			callback(err, tools);
		});
	};
};
