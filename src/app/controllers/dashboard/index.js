'use strict';

/**
 * Resolves URL /account/profile
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.profile = function() {
	return function(req, res) {
		res.render('dashboard');
	};
};

/**
 * Resolves URL /account/dashboard
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.dashboard = function() {
	return function(req, res) {
		res.render('dashboard');
	};
};

/**
 * Resolves URL /api/tools
 * Method POST
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.addNewTool = function(services) {
	return function(req, res) {
		console.log(req.files);
		console.log(req.body);
		services.tool.new(req, function(err, newtool) {
			if (err) {
				req.flash('errorMessage', err);
				res.status(400);
				res.send('Error saving tool');
				//res.render('signup_verify');
			} else {
				req.flash('verificationMessage', 'Tool added successfully');
				res.json({message: 'Tool added successfully'});
				//res.render('signup_verify');
			}
		});
		/*console.log(req.files);
		if (req.body.name) {
			console.log(req.body.name.english);
		}
		res.json({message: 'Tool added successfully'});*/

		/*if (req.isAuthenticated() && req.user.verified && (req.user.role === 'administrator')) {
			res.json({message: 'Tool added successfully'});
		}
		return res.redirect('/');*/
	};
};

/**
 * Resolves URL /api/directories
 * Method GET
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.getAllDirectories = function(services) {
	return function(req, res) {
		services.directory.getAll(req, function(err, data) {
			res.json(data);
		});
	};
};

/**
 * Resolves URL /api/tools
 * Method GET
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.getAllTools = function(services) {
	return function(req, res) {
		services.tool.getAll(req, function(err, data) {
			res.json(data);
		});
	};
};
