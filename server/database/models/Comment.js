module.exports = function(Schema, models, validate, mongoose) {
	//Comments
	var commentsSchema = new Schema({
		author: String,
		ip: {
			type: String,
			validate: validate.ip
		},
		date: {
			type: Date, 
			default: Date.now
		},
		state: {
			type: String,
			default: "Unapproved"
		},
		gravatar: {
			type: String
		},
		email: {
			type: String,
			validate: validate.email
		},
		message: {
				type: String,
				required: true
		},
		meta: Object,
		likes: Number
	});
	var model = mongoose.model('Comment', commentsSchema);

	commentsSchema.pre('remove', function(next) {
	    commentsSchema.remove().exec();
	    Book.remove({authorId : this._id}).exec();
	    next();
	});

	return model;
};