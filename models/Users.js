const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new SweetsSchema object
// This is similar to a Sequelize model

const userSchema = new Schema({
	name: {
		type: String,
        required: true        
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
