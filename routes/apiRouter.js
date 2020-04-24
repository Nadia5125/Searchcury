


const router = require('express').Router();
const db = require('../models');
const mongoose = require('mongoose');



// // route to get Movie
router.get('/api/movies', (req, res) => {
	db.Movies
		.find({})
		.then((movie) => {
      res.json(movie);
      console.log(movie);
		})
		.catch((err) => {
			res.json(err);
		});
});







// module.exports = router;
// //route to create User
// router.post('/api/user', (req, res) => {
// 	db.User.create(req.body).then((User) => res.json(User)).catch((err) => res.json(err));
// });

// //route to get Users
// router.get('/api/user', (req, res) => {
// 	db.User
// 		.find({})
// 		.then((user) => {
// 			res.json(user);
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });




// //route to add Users
// router.put('/api/user/add', (req, res) => {
// 	let id = mongoose.Types.ObjectId(req.body.fruitID);
// 	db.User
// 		.findOneAndUpdate({ _id: id }, { $set: { quantity: req.body.quantity } })
// 		.then((fruit) => {
// 			res.json(fruit);
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });

// //route to minus Users
// router.put('/api/user/minus', (req, res) => {
// 	let id = mongoose.Types.ObjectId(req.body.fruitID);
// 	db.User
// 		.findOneAndUpdate({ _id: id }, { $set: { quantity: req.body.quantity } })
// 		.then((fruit) => {
// 			res.json(fruit);
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });

// //route to delete User
// router.post('/api/user/delete', (req, res) => {
// 	let id = mongoose.Types.ObjectId(req.body.fruitID);
// 	db.User
// 		.remove({ _id: id })
// 		.then((fruit) => {
// 			res.json(fruit);
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });







// //route to add Movie
// router.put('/api/movies/add', (req, res) => {
// 	let id = mongoose.Types.ObjectId(req.body.sweetID);
// 	db.Movies
// 		.findOneAndUpdate({ _id: id }, { $set: { quantity: req.body.quantity } })
// 		.then((movie) => {
// 			res.json(movie);
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });

// //route to minus Movie
// router.put('/api/movies/minus', (req, res) => {
// 	let id = mongoose.Types.ObjectId(req.body.sweetID);
// 	db.Movie
// 		.findOneAndUpdate({ _id: id }, { $set: { quantity: req.body.quantity } })
// 		.then((movie) => {
// 			res.json(movie);
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });

// //route to delete Movie
// router.post('/api/movies/delete', (req, res) => {
// 	let id = mongoose.Types.ObjectId(req.body.sweetID);
// 	db.Movies
// 		.remove({ _id: id })
// 		.then((movie) => {
// 			res.json(movie);
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });



























// const router = require("express").Router();
// const db = require("../models");

// router.get("/searchcury", (req, res) => {
//   // Use a regular expression to search titles for req.query.q
//   // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
//   db.searchcury.find({
//     title: { $regex: new RegExp(req.query.q, 'i')}
//   })
//     .then(searchcury => {
//       console.log(searchcury)
//       res.json(searchcury)
//     })
//     .catch(err => res.status(422).end());
// });

// module.exports = router;