// eg Destructuring variables 
// let user = {name: 'Vladimir', gender: 'Male'};
// let {name} = user;
// console.log(name);

// const MongoClient = require('mongodb').MongoClient;
// Destructuring the line that is above
const {MongoClient, ObjectID} = require('mongodb');

// var Obj = new ObjectID();
// console.log(Obj);

// Connect using MongoClient
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server...');

	const db = client.db('TodoApp');
	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// insert new doc into User with the following fields: name, age, location
	// db.collection('Users').insertOne({
	// 	name: 'VELASQUEZ, vladimir',
	// 	age: 32,
	// 	location: 'La Paz, Bolivia'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert User');
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	client.close();
});