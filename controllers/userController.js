// controllers/userController.js
const UserModel = require('../models/userModel');

// Controller function to handle creating a new user
const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await UserModel.createUser(username, email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

// Controller function to handle retrieving all users
const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving users' });
    }
};

// Controller function to handle retrieving a user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.getUserById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving user' });
    }
};

// Controller function to handle updating a user's information
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
        const user = await UserModel.updateUser(id, username, email, password);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error updating user' });
    }
};

// Controller function to handle deleting a user by ID
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.deleteUser(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
};

// Export the controller functions for use in the router
module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};

