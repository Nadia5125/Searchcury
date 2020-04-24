const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/searchcury', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const userSeed = [
	{
		username: 'nm',
		password: 'nm55',
		firstName: 'nmaaa',
		
	},
	{
		username: 'ella',
		password: 'ella22',
		firstName: 'Ella',
		
	},
	{
		username: 'lilly',
		password: 'lilly33',
		firstName: 'Lilly',
		
	},
		
	
];

db.User
	.deleteMany({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then((data) => {
		console.log(data.insertedIds.length + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

