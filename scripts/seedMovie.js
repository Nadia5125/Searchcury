const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Movie collection and inserts the Movies below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/searchcury');

const titleSeed = [
	{
		title: 'Drama',
		quantity: '54',
		type: 'Movie',
		
	},
	{
		title: 'disney',
		quantity: '69',
		type: 'Movie',
		
	},
	{
		title: 'Action',
		quantity: '888',
		type: 'Movie',
		
	},
	
];

db.Movie
	.deleteMany({})
	.then(() => db.Movie.collection.insertMany(titleSeed))
	.then((data) => {
		console.log(data.insertedIds.length + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
