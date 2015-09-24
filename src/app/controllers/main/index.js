'use strict';

exports.index = function(req, res) {
	res.cookie('locale', req.params.locale);
	res.render('index');
};
