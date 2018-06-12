const {MongoClient, ObjectID} = require('mongodb');

// Connect using MongoClient
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server...');

	const db = client.db('TodoApp');
	// using findOne and Update elements
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5b1fa59de4a3c61713c0ea18')
	}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// ejemplo
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b1fa87be4a3c61713c0ea19')
	}, {
		$set: {name: 'GOYTIA, Pablo David'},
		$inc: {age: 1}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	client.close();
});