'use strict';

exports = module.exports = function(collection, mongoose) {
	var schema = mongoose.Schema({
		responsibleName: {
			english: {
				type: String,
				required: false,
				trim: true
			},
			spanish: {
				type: String,
				required: false,
				trim: true
			},
			potuguese: {
				type: String,
				required: false,
				trim: true
			}
		},
		subtitle: {
			english: {
				type: String,
				required: false,
				trim: true
			},
			spanish: {
				type: String,
				required: false,
				trim: true
			},
			potuguese: {
				type: String,
				required: false,
				trim: true
			}
		},
		category: {
			type: String,
			required: true
		},
		shortDescription: {
			english: {
				type: String,
				required: false,
				trim: true
			},
			spanish: {
				type: String,
				required: false,
				trim: true
			},
			potuguese: {
				type: String,
				required: false,
				trim: true
			}
		},
		thumbnailImage: {
			type: String,
			required: true
		},
		urlWebsite: {
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
