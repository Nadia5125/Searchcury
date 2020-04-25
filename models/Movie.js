const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new Movie Schema object
// This is similar to a Sequelize model

const movieSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	year: {
		type: Number,
		required: true
	},
	image: {
		type: String,
		required: true
	}
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
