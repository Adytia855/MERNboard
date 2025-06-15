import express from "express";
import routes from "./routes/routes.js"
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());
/* app.use(rateLimiter); */

app.use('/api/notes', routes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
  });
});