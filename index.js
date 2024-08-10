// index.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const UserModel = require('./models/userModel');

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON bodies in incoming requests
app.use(bodyParser.json());

// Use the user routes for the application
app.use('/api', userRoutes);

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    // Create the users table if it doesn't exist
    await UserModel.createTable();
    console.log(`Server is running on port ${PORT}`);
});

