import express from "express";
import routes from "./routes/routes.js"
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors'
// import rateLimiter from "../middleware/rateLimiter.js"; // Assuming this might be used later

// Load environment variables from a .env file into process.env
dotenv.config();

/**
 * @const app
 * @description The Express application instance.
 * @type {express.Application}
 */
const app = express();

/**
 * @const PORT
 * @description The port number on which the server will listen.
 * It defaults to 8000 if `process.env.PORT` is not defined.
 * @type {string|number}
 */
const PORT = process.env.PORT || 8000;

// Middleware
/**
 * @middleware cors
 * @description Enables Cross-Origin Resource Sharing (CORS) for the application.
 * Allows requests from different origins.
 * @see {@link https://www.npmjs.com/package/cors} for more information on CORS middleware.
 */
app.use(cors());

/**
 * @middleware express.json
 * @description Parses incoming requests with JSON payloads.
 * Populates `req.body` with the parsed JSON data.
 * @see {@link https://expressjs.com/en/api.html#express.json} for more information.
 */
app.use(express.json());

/*
 * @middleware rateLimiter
 * @description (Currently commented out) Intended to apply rate limiting to requests.
 * @see ../middleware/rateLimiter.js for implementation details.
 */
/* app.use(rateLimiter); */

// Routes
/**
 * @route /api/notes
 * @description Mounts the note-specific routes defined in `./routes/routes.js`
 * under the `/api/notes` path.
 */
app.use('/api/notes', routes);

// Database Connection
/**
 * @function connectDB
 * @description Initiates the connection to the MongoDB database.
 * @see ./config/db.js for implementation details.
 */
connectDB();

// The `app.listen` part is typically in the main server startup file (e.g., server.js or index.js)
// If this file is the main startup file, you would add:
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

export default app;
