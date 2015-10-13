'use strict';

// Dependencies
var passport = require('passport');

/**
 * Resolves URL /auth/local/login
 * method  get
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.login = function() {
	return function(req, res) {
		res.render('login');
	};
};

/**
 * Resolves URL /auth/local/login
 * method  post
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.loginSubmit = function() {
	return function(req, res, next) {
		passport.authenticate('local-login', {
			successRedirect: '/', // redirect to the secure profile section
			failureRedirect: '/auth/local/login', // redirect back to the signup page if there is an error
			failureFlash: true // allow flash messages
		})(req, res, next);
	};
};

/**
 * Resolves URL /auth/local/signup
 * method  get
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.signup = function() {
	return function(req, res) {
		res.render('signup');
	};
};

/**
 * Resolves URL /auth/local/signup
 * method  post
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.signupSubmit = function() {
	return function(req, res, next) {
		passport.authenticate('local-signup', {
			successRedirect: '/auth/local/confirm', // redirect to the secure profile section
			failureRedirect: '/auth/local/signup', // redirect back to the signup page if there is an error
			failureFlash: true // allow flash messages
		})(req, res, next);
	};
};

/**
 * Resolves URL /auth/local/confirm
 * method  post
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.signupConfirm = function() {
	return function(req, res) {
		res.render('signup_confirm');
	};
};

/**
 * Resolves URL /auth/local/verify
 * method  post
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.signupVerify = function(services) {
	return function(req, res) {
		services.profile.verify(req, function(err) {
			if (err) {
				req.flash('errorMessage', err);
				res.render('signup_verify');
			} else {
				req.flash('verificationMessage', req.__('signup_verification_token_successful'));
				res.render('signup_verify');
			}
		});
	};
};

/**
 * Resolves URL /auth/logout
 * method  get
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.logout = function() {
	return function(req, res) {
		req.logout();
		res.redirect('/');
	};
};

