'use strict';

exports = module.exports = function(collection, mongoose) {
	var schema = mongoose.Schema({
		name: {
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
		categories: {
			type: [String],
			required: true
		},
		shortDescrition: {
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
		longDescription: {
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
		},
		expertReview: [
			{
				textReview: {
					type: String,
					required: true
				},
				rating: {
					type: Number,
					required: true
				}
			}
		]
	});

	return mongoose.model(collection, schema);
};
