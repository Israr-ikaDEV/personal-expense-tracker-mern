// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Mongoose connect call using the URI from the environment variable
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Success message
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Handle connection error
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;