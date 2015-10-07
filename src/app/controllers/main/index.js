'use strict';

// Dependencies
//var router = require('express');

/**
 * Resolves URL /
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.index = function(req, res) {
	/*router.use('/', function(req, res, next) {
		if (!req.isAuthenticated()) {
			return res.redirect('/');
		}
		return next();
	});
	router.use('/', function(req, res, next) {
		// if user is authenticated in the session but has no verified email, redirect to email verification
		if (req.isAuthenticated() && !req.user.verified) {
			req.flash('notVerified'); // avoid duplicate message (bug/edge-case)
			req.flash('notVerified', 'You need to verify your email before you can have full use of the account');
			// return res.redirect('/'); // do redirection here
		}
		return next();
	});*/

	res.render('index');
};

/**
 * Resolves URL /language/:newlanguage
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.changeLanguage = function(req, res) {
	res.cookie('locale', req.params._newlanguage, {maxAge: 900000, httpOnly: true});
	req.setLocale(req.params._newlanguage);
	//res.locals.currentLocale = req.params._newlanguage;

	// redirect back
	res.redirect('back');
};
