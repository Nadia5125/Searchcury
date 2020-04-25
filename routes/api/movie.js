//requiring in my controllers file for Movies
const router = require('express').Router();
const movieController = require('../../controllers/movieController');

module.exports = router;

// /api/movie/
router.route('/').get(movieController.findAll);

// /api/movie/:data  route to create movie
router.route('/').post(movieController.createMovie);

// /api/movie/add route to add movie quantity
router.route('/add/').put(movieController.addMovie);

// /api/movie/minus route to decrease movie quantity
router.route('/minus/').put(movieController.minusMovie);

// /api/movie/delete  route to delete movie
router.route('/delete/').post(movieController.deleteMovie)