import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

// MongoDB Database connection and Check
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Conneted to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

// Routing Starting
app.use(express.json());
app.use("/backend/user", userRouter);
app.use("/backend/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
