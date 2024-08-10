// config/db.js
const { Pool } = require('pg');

// Create a pool instance to manage PostgreSQL connections
const pool = new Pool({
    user: 'username', // replace with your PostgreSQL username
    host: 'hostname',
    database: 'databasename', // replace with your PostgreSQL database name
    password: 'password', // replace with your PostgreSQL password
    port: 5432,
});

// Export the pool instance for use in other parts of the application
module.exports = pool;

