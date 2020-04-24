

//all routes from this point on start with /api, this is where you break up the routes
//doing the same as the previous file and adding in my user routes. Here is where if I
//had animal routes it would be:
//const animalRoutes = require('./animal')
//router.use('/animal', animalRoutes)
//so you'd have a /api/animal route now

const router = require('express').Router();
const userRoutes = require('./users');
// const movieRoutes = require('./movie');

//now the route is /api/fruit  and /api/sweets
router.use('/user', userRoutes);
// router.use('/movie', movieRoutes);

module.exports = router;















// const router = require('express').Router();
// // const fruitRoutes = require('./fruit');
// const movieRoutes = require('./movies');

// //now the route is /api/fruit  and /api/sweets
// // router.use('/fruit', fruitRoutes);
// router.use('/movie', movieRoutes);

// module.exports = router;







//this is test one 
// const path = require("path");
// const router = require("express").Router();
// const apiRoutes = require("apiRoutes");
// router.use("/api", apiRoutes);


// // API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// module.exports = router;