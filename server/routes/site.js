module.exports = function(app, mongoose, models) {
	// Page: Create Read Update Delete
	app.delete('/server', function(req, res) {
		mongoose.model('Page').remove(function(error) {
			if(error) {
				res.send(error);
			}
		});
		mongoose.model('Comment').remove(function(error) {
			if(error) {
				res.send(error);
			}
		});
		res.send('Deleted all Pages and Comments. :(');
	});
};