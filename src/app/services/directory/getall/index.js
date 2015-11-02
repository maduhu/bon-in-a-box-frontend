'use strict';

var debug = require('debug')('bon-in-a-box-frontend:directory:getall');

exports = module.exports = function(models) {
	return function(req, callback) {
		models.Directory.find({}, ((req.query.fields)?req.query.fields.replace(',', ' '):''), function(err, directories) {
			if (err) {
				callback(err);
			}
			callback(err, directories);
		});
	};
};
