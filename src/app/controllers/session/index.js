'use strict';

exports.login = function(req, res) {
	res.cookie('locale', req.params.locale);
	res.render('login');
};
