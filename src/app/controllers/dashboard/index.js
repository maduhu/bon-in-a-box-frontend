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
