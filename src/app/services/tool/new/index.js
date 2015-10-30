'use strict';

var debug = require('debug')('bon-in-a-box-frontend:tool:new');
var async = require('async');

exports = module.exports = function(models) {
	return function(req, callback) {
		if (!req.body) {
			return callback('no request body');
		}

		var newDirectory = new models.Directory();
		newDirectory.responsibleName.english = "A";
		newDirectory.responsibleName.spanish = "B";
		newDirectory.responsibleName.potuguese = "C";
		newDirectory.subtitle.english = "A";
		newDirectory.subtitle.spanish = "B";
		newDirectory.subtitle.potuguese = "C";
		newDirectory.category = "Categoria loca";
		newDirectory.shortDescription.english = "A";
		newDirectory.shortDescription.spanish = "B";
		newDirectory.shortDescription.potuguese = "C";
		newDirectory.thumbnailImage = "alguito";
		newDirectory.urlWebsite = "urlWebsite";
		newDirectory.country = "Colombia";
		newDirectory.email = "valegrajales@sopas.com";
		newDirectory.createdAt = Date.now();
		newDirectory.suggestedBy = req.user._id;
		newDirectory.approvedBy = req.user._id;

		var newTool = new models.Tool();

		async.series({
			saveTool: function(callback) {
				newDirectory.save(function(err, result) {
					if(err) {
						console.log(err);
					} else {
						console.log(result);

						newTool.name.english = req.body.name.english;
						newTool.name.spanish = req.body.name.spanish;
						newTool.name.potuguese = req.body.name.potuguese;
						newTool.categories = req.body.categories;
						newTool.shortDescription.english = "A";
						newTool.shortDescription.spanish = "B";
						newTool.shortDescription.potuguese = "C";
						newTool.longDescription.english = "A";
						newTool.longDescription.spanish = "B";
						newTool.longDescription.potuguese = "C";
						newTool.thumbnailImage = "hoooola";
						newTool.descriptiveImage = "sooopas";
						newTool.urlWebsite  = "web site";
						newTool.contactEmail = "yujuuu";
						newTool.state = "approved";
						newTool.country  = "Colombia";
						newTool.directory = result._id;
						newTool.createdAt = Date.now();
						newTool.suggestedBy = req.user._id;
						newTool.approvedBy = req.user._id;

						newTool.save(function(err, product) {
							if(err) {
								//console.log(err);
							}
							callback(err);
						});
					}
				});
			}
		}, function(err, results) {
			callback(err, newTool);
		});
	};
};
