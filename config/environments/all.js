'use strict';

var compression = require('compression');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var i18n = require('i18n');
var cookieParser = require('cookie-parser');

module.exports = function(parent) {
	parent.set('port', normalizePort(process.env.PORT || '8000'));
	parent.set('view engine', 'jade');
	parent.use(favicon(__dirname + '/../../src/public/images/favicon.ico'));
	parent.use(morgan('dev'));
	parent.use(compression());
	parent.use(cookieParser());
	parent.use(bodyParser.json());
	parent.use(bodyParser.urlencoded({ extended: false }));
	parent.use(require('stylus').middleware(__dirname + '/../../src/public/stylesheets'));

	// Load configuration according to environment
	if(process.env.NODE_ENV === 'development') {
		require('./development')(parent);
	} else if(process.env.NODE_ENV === 'production') {
		require('./production')(parent);
	} else {
		require('./development')(parent);
	}

	var locales = ['es', 'pt', 'en'];

	// Initialize app local variables
	parent.use(function(req,res,next) {
		if (req.cookies.locale) {
			res.locals.currentLocale = req.cookies.locale;
		} else {
			res.locals.currentLocale = i18n.getLocale()
		}

		res.locals.locales = locales;
		next();
	});

	i18n.configure({
		// setup some locales - other locales default to en silently
		locales: locales,

		// sets a custom cookie name to parse locale settings from
		cookie: 'locale',

		// where to store json files - defaults to './locales'
		directory: __dirname + '/../../src/app/resources/locales',

		defaultLocale: 'en'
	});

	// i18n init parses req for language headers, cookies, etc.
	parent.use(i18n.init);

	// load controllers
	require('./../../src/app/routes/routers')(parent, { verbose: true });

	logger.info("Bon in a box - Frontend: initial configuration loaded.");
};

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}
