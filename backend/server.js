import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./utils/db.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.get("/home", (req, res) => {
  res.status(200).json({
    message: "welcome to job portal backend",
    success: true,
  });
});

const port = process.env.PORT || 3000;

connectdb().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
});
