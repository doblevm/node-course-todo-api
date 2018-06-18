const expect = require('expect');
const request= require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

let listOfToDos = [{
	_id: new ObjectID(),
	text: 'First thing'
}, {
	_id: new ObjectID(),
	text: 'Second thing'
}];

beforeEach((done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(listOfToDos);
	}).then(() => {
		done();
	});
});

describe('POST /todos', () => {
	it('Should create a new todo:', (done) => {
		var text = 'text todo test';

		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err, res) => {
				if (true) {
					return done(err);
				} 

				Todo.find({text}).then((todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				}).catch((e) => done(e));
			});
	});

	it('Should not create todo with invalid body.data', (done) => {
		var text = '';

		request(app)
			.post('/todos')
			.send({text})
			.expect(400)
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				Todo.find().then((todos) => {
					expect(todos.length).toBe(2);
					done();
				}).catch((e) => done(e));
			});
	});
});

describe('GET /todos', () => {
	it('Should get all todos from the db', (done) => {
		request(app)
			.get('/todos')
			.expect(200)
			.expect((res) => {
				expect(res.body.todos.length).toBe(2);
			})
			.end(done)
	});
});

describe('GET /todos/:id', () => {
	
	it('Should return todo doc', (done) => {
		request(app)
			.get(`/todos/${listOfToDos[0]._id.toHexString()}`)
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(listOfToDos[0].text);
			})
			.end(done);
	});

	it('SHould return 404 if todo not found', (done) => {
		var newID = new ObjectID().toHexString();

		request(app)
			.get(`/todos/${newID}`)
			.expect(404)
			.end(done);
	});

	it('Should return 404 for non-object ids', (done) => {
		var mistakeID = '1234';
		request(app)
			.get(`/todos/${mistakeID}`)
			.expect(404)
			.end(done);
	});
});