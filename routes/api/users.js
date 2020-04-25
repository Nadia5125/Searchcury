//requiring in my controllers file for User
const router = require('express').Router();
const userController = require('../../controllers/userController');

module.exports = router;

// /api/user/
router.route('/').get(userController.findAll);

// /api/user/:data route to create user
router.route('/').post(userController.createUser);

// /api/user/add route to add user quantity
router.route('/add/').put(userController.addUser);

// /api/user/minus route to decrease user quantity
router.route('/minus/').put(userController.minusUser);

// /api/user/delete route to delete user
router.route('/delete/').post(userController.deleteUser);
