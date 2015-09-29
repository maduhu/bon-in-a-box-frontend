'use strict';

// dependencies
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var http = require('http');
var socketio = require('socket.io')();

// config and setup helpers
var config = require('./config/application-config');
var setup = require('./src/app/setup');

// setup session store
var sessionStore = setup.sessions({
	cookieParser: cookieParser,
	env: config.get('env'),
	Store: RedisStore,
	session: session,
	url: config.get('database.redis.url'),
	prefix: config.get('database.redis.session.prefix'),
	db: config.get('database.redis.db'),
	secret: config.get('server.secret')
});

// create/configure express app
var app = setup.createExpressApp({
	env: config.get('env'),
	port: config.get('server.port'),
	viewEngine: 'jade',
	dir: __dirname,
	publicLocation: './../../src/public',
	favicon: '/../../src/public/images/favicon.ico',
	stylesLocation: '/../../src/public/stylesheets',
	cookieParser: cookieParser,
	session: session,
	sessionKey: config.get('session.key'),
	sessionSecret: config.get('server.secret'),
	store: sessionStore,
	passport: passport,
	locales: config.get('locales'),
	logs: config.get('logs')
});

// http and socket.io server(s)
var server = http.createServer(app);
var io = socketio.attach(server);

// configure socket.io
setup.configureSockets(io, {
	cookieParser: cookieParser,
	sessionStore: sessionStore,
	sessionKey: config.get('session.key'),
	sessionSecret: config.get('server.secret'),
});

// express error handling
setup.handleExpressError(app);

// run application
setup.run(server, config.get('server.port'));

/*var express = require('express');

var app = express();

// Load app configuration
require('./config/environments/all')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});*/
