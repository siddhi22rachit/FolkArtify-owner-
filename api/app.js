import cookieParser from "cookie-parser";
import express from "express";
import postRoute from "./routes/post.route.js";
import 'dotenv/config';
import cors from "cors";

const app = express();

// Correct CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true // Ensure credentials are allowed
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Server is running on port 8800!");
});
