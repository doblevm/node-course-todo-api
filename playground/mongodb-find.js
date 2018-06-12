const {MongoClient, ObjectID} = require('mongodb');

// Connect using MongoClient
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server...');

	const db = client.db('TodoApp');
	db.collection('Todos').find({completed: false}).toArray().then((docs) => {
		console.log('Todos...');
		console.log(JSON.stringify(docs,undefined, 2));
	}, (err) => {
		console.log('Unable to fetch Todos', err);
	});
	client.close();
});