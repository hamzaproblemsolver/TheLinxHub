import mongoose from "mongoose";

/**
 * Connect to MongoDB database
 * @returns {Promise} MongoDB connection
 */
const connectDB = async () => {
  // Validate environment variable
  if (!process.env.MONGODB_URI) {
    console.error(
      "MongoDB connection URI is not defined. Please set MONGODB_URI in your .env file"
    );
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
