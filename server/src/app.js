import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import reportRoutes from "./routes/report.routes.js";
import geocodeRoutes from "./routes/geocode.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log("DB connection error:", err));

// routes
app.use("/report", reportRoutes);
app.use("/api/geocode", geocodeRoutes);

// serve uploads
app.use("/uploads", express.static("uploads"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

