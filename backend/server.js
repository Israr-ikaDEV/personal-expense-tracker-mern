// backend/server.js (UPDATED)
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); // Import routes

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies (REQUIRED for POST requests)
app.use(express.json()); 

// API Routes
app.use('/api/auth', authRoutes); // Use the auth routes

app.listen(PORT, console.log(`Server running on port ${PORT}`));