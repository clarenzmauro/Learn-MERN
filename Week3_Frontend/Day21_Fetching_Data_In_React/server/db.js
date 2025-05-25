const mongoose = require('mongoose');
const dbURI = process.env.DB_URI; // best practice not to upload keys to github

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;