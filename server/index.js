import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import router from "./routes/posts.js";
import generateImageRouter from "./routes/GenrateImags.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/api/post", router)
app.use("/api/generateImage", generateImageRouter)
//default get
app.get("/", async(req, res) => {
  res.status(200).json({
    message: "hello Gfg Developers",
  });
});

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
//functin to connect to mongodb
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Failed to connect to DB");
    console.error(err);
    throw err; // so startServer() can catch it
  }
};

// function to start th server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(5000, () =>
      console.log("Server started on port 5000")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
