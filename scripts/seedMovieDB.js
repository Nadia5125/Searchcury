const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Movie collection and inserts the Movie below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/searchury');

const itemSeed = [
	{
		name: 'Titanic',
		year: '1997',
		image: './images/titanic.jpg'
	},
	{
		item: 'Coach Carter',
		year: '2005',
		image: './images/coach-carter.jpg'
	},
	{
		name: 'Toy Story 4',
		year: '2019',
		image: './images/toy-story.jpg'
	}
];

db.Movie
	.deleteMany({})
	.then(() => db.Movie.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.insertedIds.length + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});