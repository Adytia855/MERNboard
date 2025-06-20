import mongoose from 'mongoose';

/**
 * @function connectDB
 * @description Connects to the MongoDB database using Mongoose.
 * It uses the connection string provided in the `MONGO_URI` environment variable.
 * Logs a success message to the console upon successful connection.
 * Logs an error message and exits the process with a failure code if the connection fails.
 * @async
 * @returns {Promise<void>} A promise that resolves when the connection is successful, or rejects if an error occurs.
 */
export const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the MONGO_URI environment variable.
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database Connected!');
  } catch (error) {
    // If connection fails, log the error and exit the process.
    console.error('Connection Failed!', error);
    process.exit(1)
  }
}
