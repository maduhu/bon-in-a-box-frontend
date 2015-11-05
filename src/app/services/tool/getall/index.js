'use strict';

var debug = require('debug')('bon-in-a-box-frontend:tool:getall');

exports = module.exports = function(models) {
	return function(req, callback) {
		var query = {};
		if(req.query.query) {
			query = {
				$or: [
					{
						'name.english': new RegExp('.*'+req.query.query+'.*$', "i")
					},
					{
						'name.spanish': new RegExp('.*'+req.query.query+'.*$', "i")
					},
					{
						'name.portuguese': new RegExp('.*'+req.query.query+'.*$', "i")
					},
					{
						'shortDescription.english': new RegExp('.*'+req.query.query+'.*$', "i")
					},
					{
						'shortDescription.spanish': new RegExp('.*'+req.query.query+'.*$', "i")
					},
					{
						'shortDescription.portuguese': new RegExp('.*'+req.query.query+'.*$', "i")
					},
					{
						'longDescription.english': new RegExp('.*'+req.query.query+'.*$', "i")
					},
					{
						'longDescription.spanish': new RegExp('.*'+req.query.query+'.*$', "i")
					},
					{
						'longDescription.portuguese': new RegExp('.*'+req.query.query+'.*$', "i")
					},
					{
						'country': new RegExp('.*'+req.query.query+'.*$', "i")
					},
					{
						'categories': new RegExp('.*'+req.query.query+'.*$', "i")
					}
				]
			};
		}
		if(req.query.status) {
			query.state = req.query.status;
		}
		models.Tool
			.find(query)
			.populate('directory')
			.exec(function(err, tools) {
			if (err) {
				callback(err);
			}
			callback(err, tools);
		});
	};
};
