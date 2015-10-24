'use strict';

exports = module.exports = function(collection, mongoose) {
	var schema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		categories: {
			type: [String],
			required: true
		},
		shortDescrition: {
			type: String,
			required: true
		},
		longDescription: {
			type: String,
			required: true
		},
		thumbnailImage: {
			type: String,
			required: true
		},
		descriptiveImage: {
			type: String,
			required: true
		},
		urlWebsite: {
			type: String,
			required: false
		},
		contactEmail: {
			type: String,
			required: false
		},
		country: {
			type: String,
			required: true
		},
		state: {
			type: String,
			required: true,
			default: 'pending'
		},
		createdAt: {
			type: Date,
			required: true
		},
		suggestedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		directory: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Directory'
		}
	});

	return mongoose.model(collection, schema);
};
