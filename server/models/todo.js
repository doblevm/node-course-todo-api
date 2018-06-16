var mongoose = require('mongoose');

// Create a model
var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		require: true,
		minlength: 1
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

// newTodo.save().then((doc) => {
// 	console.log('Save to the list', doc);
// }, (e) => {
// 	console.log('Unable to save');
// });

module.exports = {
	Todo
};