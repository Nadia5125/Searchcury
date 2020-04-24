
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json())

var databaseToUse = "";

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  databaseToUse =
    'mongodb://searchcury:searchcury55@ds129651.mlab.com:29651/heroku_8g056qpz'
} else {
  databaseToUse = "mongodb://localhost/searchcury";
}




app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || databaseToUse;

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI);

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});
















// const express = require('express');
// const mongoose = require('mongoose');
// const routes = require('./routes');
// const app = express();

// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.use(routes);

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/searchcury';


// mongoose.Promise = global.Promise;

// mongoose.connect(MONGODB_URI, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// });

// app.listen(PORT, function() {
// 	console.log(`App running on port ${PORT}`);
// });



// //this test for 2 one
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const routes = require('./routes');

// const port = process.env.PORT || 5000;

// app.use(routes);

// app.use(bodyParser.json())

// //connect to movie file
// const db = require('./movie/keys').mongoURI;


// //connect to mongo
// mongoose
// .connect(db)
// .then(() => console.log('MongoDB Connected...'))
// .then(err => console.log(err));




// app.listen(port, () => console.log(`Server started on port ${port}`));












//THIS IS OLD ONE

// const express = require('express');
// const mongoose = require('mongoose');
// const db = require('./model');
// const app = express();
// ​
// const PORT = process.env.PORT || 3001;
// ​
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// ​
// ​
// //this is req and reponse
// app.post('/api/movie', (req, res) => {
// 	db.Movies
// 		.create(req.body)
// 		.then((movie) => {
// 			res.json(movie);
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });

// app.get("/api/movie", (req, res) =>{
// 	db.Movies
// 	.find({})
// 	.then((movies) => {
// 		res.json(movies);
// 	})
// 	.catch((err) => {
// 		res.json(err);
// 	});	
// })
// ​
// mongoose.Promise = global.Promise;
// ​
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/searchcury');  
// ​
// app.listen(PORT, function() {
// 	console.log(`App running on port ${PORT}`);
// });
