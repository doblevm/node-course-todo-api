var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
		type: String,
		require: true,
		trim: true,
		minlength: 1
	}
});


// User1.save().then((doc) => {
// 	console.log(doc);
// }, (e) => {
// 	console.log(e);
// });

module.exports = {
	User
};
