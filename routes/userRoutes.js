// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the route for creating a new user
router.post('/users', userController.createUser);

// Define the route for retrieving all users
router.get('/users', userController.getAllUsers);

// Define the route for retrieving a user by ID
router.get('/users/:id', userController.getUserById);

// Define the route for updating a user's information
router.put('/users/:id', userController.updateUser);

// Define the route for deleting a user by ID
router.delete('/users/:id', userController.deleteUser);

// Export the router for use in the main application
module.exports = router;

