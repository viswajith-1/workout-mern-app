const express = require('express');
const app = express();

// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();

// Import workout routes
const workoutRoutes = require('./routes/workoutRoutes');

// Middleware to parse JSON requests
app.use(express.json());



// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Use workout routes
app.use('/api/workouts', workoutRoutes);

