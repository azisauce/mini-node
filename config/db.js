// config/db.js
const { Pool } = require('pg');

// Create a pool instance to manage PostgreSQL connections
const pool = new Pool({
    user: 'test_user3', // replace with your PostgreSQL username
    host: 'localhost',
    database: 'test', // replace with your PostgreSQL database name
    password: 'mypass', // replace with your PostgreSQL password
    port: 5432,
});

// Export the pool instance for use in other parts of the application
module.exports = pool;

