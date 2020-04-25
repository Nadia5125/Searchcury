const router = require('express').Router();
const moviesRoutes = require('./movies');
const userRoutes = require('./user');

//now the route is /api/movies  and /api/user
router.use('/movies', moviesRoutes);
router.use('/user', userRoutes);

module.exports = router;
