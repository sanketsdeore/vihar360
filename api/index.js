import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import listingRouter from "./routes/listingRoute.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Only define __dirname once!
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env from correct path
dotenv.config({ path: path.resolve(__dirname, ".env") });

// ✅ Debug log to make sure env variables are loaded
console.log("🔐 JWT_SECRET =", process.env.JWT_SECRET);
console.log("🌱 MONGO_URL =", process.env.MONGO_URL);

// ✅ Use MONGO_URL from .env
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

// ✅ Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

// ✅ Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// ✅ Serve frontend
// ✅ Correct path to frontend from /api
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});


// ✅ Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
