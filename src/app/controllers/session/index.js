'use strict';

// Dependencies
var passport = require('passport');

/**
 * Resolves URL /auth/local/login
 * method  get
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.login = function(req, res) {
	res.render('login');
};

/**
 * Resolves URL /auth/local/login
 * method  post
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.loginSubmit = function(req, res, next) {
	passport.authenticate('local-login', {
		successRedirect: '/', // redirect to the secure profile section
		failureRedirect: '/auth/local/login', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	})(req, res, next);
};

/**
 * Resolves URL /auth/local/signup
 * method  get
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.signup = function(req, res) {
	res.render('signup');
};

/**
 * Resolves URL /auth/local/signup
 * method  post
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.signupSubmit = function(req, res, next) {
	passport.authenticate('local-signup', {
		successRedirect: '/', // redirect to the secure profile section
		failureRedirect: '/auth/local/signup', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	})(req, res, next);
};

/**
 * Resolves URL /auth/logout
 * method  get
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.logout = function(req, res) {
	req.logout();
	res.redirect('/');
};

