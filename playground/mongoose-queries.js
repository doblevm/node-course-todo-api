const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5b265e2dcc118703d157e20f';
let idUser = '5b253a041b82151eecff7dc5';

if (!ObjectId.isValid(id)) {
	console.log(`id: ${id} not valid`);
}

// some Queries!!!
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log(`Todos: ${todos}`);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log(`Todo: ${todo}`);
// });

Todo.findById(id).then((todo) => {
	if (!todo) {
		return console.log('id not found');
	}
	console.log(`Todo by id is: ${todo}`);
}).catch((e) => {
	console.log(e);
});

User.findById(idUser).then((user) =>{
	if (!user) {
		return console.log(`Id: ${idUser} not found`);
	}

	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) =>{
	console.log(e);
});