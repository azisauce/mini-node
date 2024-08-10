// models/userModel.js
const pool = require('../config/db');

// Function to create the `users` table if it doesn't exist
const createTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL
        );
    `;
    await pool.query(query);
};

// Function to insert a new user into the `users` table
const createUser = async (username, email, password) => {
    const query = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;
    const result = await pool.query(query, [username, email, password]);
    return result.rows[0];
};

// Function to retrieve all users from the `users` table
const getAllUsers = async () => {
    const query = 'SELECT * FROM users;';
    const result = await pool.query(query);
    return result.rows;
};

// Function to retrieve a user by ID from the `users` table
const getUserById = async (id) => {
    const query = 'SELECT * FROM users WHERE id = $1;';
    const result = await pool.query(query, [id]);
    return result.rows[0];
};

// Function to update a user's information by ID in the `users` table
const updateUser = async (id, username, email, password) => {
    const query = `
        UPDATE users
        SET username = $1, email = $2, password = $3
        WHERE id = $4
        RETURNING *;
    `;
    const result = await pool.query(query, [username, email, password, id]);
    return result.rows[0];
};

// Function to delete a user by ID from the `users` table
const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *;';
    const result = await pool.query(query, [id]);
    return result.rows[0];
};

// Export the functions for use in other parts of the application
module.exports = {
    createTable,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};

