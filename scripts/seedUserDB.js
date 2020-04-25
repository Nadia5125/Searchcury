const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Sweets collection and inserts the Sweets below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/searchury');

const itemSeed = [
	{
		name: 'Ben',
		email: 'ben@gmail.com',
		password: '1234',
	},
	{
		name: 'James',
		email: 'james@gmail.com',
		password: '1234',
	},
	{
		name: 'Samantha',
		email: 'samantha@gmail.com',
		password: '1234',
    },
    {
		name: 'Leila',
		email: 'leil@gmail.com',
		password: '1235',
	}
];

db.User
	.deleteMany({})
	.then(() => db.User.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.insertedIds.length + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
