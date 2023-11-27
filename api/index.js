import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "morgan";
import cookieParser from "cookie-parser";
dotenv.config();
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import path from "path";

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => console.log(err));

const __dirname = path.resolve();

const app = express();

// Log Requests
app.use(logger("dev"));
// allow json transfer
app.use(express.json());
// Use cookie parser
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});

// Mount Routers
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Create Static Folder
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
});

// Add middleware to handle error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
