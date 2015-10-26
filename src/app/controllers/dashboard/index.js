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
 * Resolves URL /account/dashboard
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.addNewTool = function(services) {
	return function(req, res) {
		if (req.isAuthenticated() && req.user.verified && (req.user.role === 'administrator')) {
			res.json({message: 'Tool added successfully'});
		}
		return res.redirect('/');
	};
};
