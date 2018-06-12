const {MongoClient, ObjectID} = require('mongodb');

// Connect using MongoClient
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server...');

	const db = client.db('TodoApp');
	// using delete many elements
	// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// using delete one element
	// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// using find one and delete that element
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// example
	db.collection('Users').findOneAndDelete({name: 'GOYTIA, Pablo'}).then((result) => {
		console.log(result);
	});

	client.close();
});