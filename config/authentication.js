'use strict';

var conf = require('./application-config.js');
var session = require('express-session')
var RedisStore = require('connect-redis')(session);
var passport = require('passport'),
		localStrategy = require('passport-local').Strategy;

module.exports = function(parent) {
	parent.use(session({
		store: new RedisStore({
			host: conf.redis.host,
			port: conf.redis.port
		}),
		secret: conf.session_secret
	}));

	parent.use(passport.initialize());
	parent.use(passport.session());
};
