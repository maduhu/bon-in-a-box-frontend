'use strict';

exports = module.exports = function(collection, mongoose) {
	var schema = mongoose.Schema({
		responsibleName: {
			type: String,
			required: true
		},
		subtitle: {
			type: String,
			required: false
		},
		category: {
			type: String,
			required: true
		},
		shortDescription: {
			type: String,
			required: true
		},
		thumbnailImage: {
			type: String,
			required: true
		},
		website: {
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
		}
	});

	return mongoose.model(collection, schema);
};
