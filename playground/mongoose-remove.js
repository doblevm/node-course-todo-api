const {ObjectId} = require('mongodb');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {mongoose} = require('./../server/db/mongoose');

Todo.remove({}).then((result) => {
	console.log(result);
});

// there are two others methods
// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({text: "do sth"}).then((doc) => {
	console.log(doc);
});

Todo.findByIdAndRemove('5b2831b6b43a6901b6ac62ba').then((doc) => {
	console.log(doc);
});