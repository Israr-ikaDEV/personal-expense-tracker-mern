// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// 1. Load environment variables
dotenv.config();

// 2. Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies (needed for POST requests)
app.use(express.json());

// Basic Test Route (Sanity Check)
app.get('/', (req, res) => {
  res.send('Expense Tracker API is running...');
});

// 3. Start the server
app.listen(PORT, console.log(`Server started on port ${PORT}`));