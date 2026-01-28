import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./utils/db.js";
import userroute from "./routes/user.route.js";
import companyroute from "./routes/company.route.js";
import jobroute from "./routes/job.route.js";

dotenv.config();
connectdb();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ["http://localhost:5173","http://localhost:8000"],
  credentials: true,
}));
app.use("/api/v1/user",userroute);
app.use("/api/v1/company",companyroute);
app.use("/api/v1/job",jobroute);
app.get("/home", (req, res) => {
  res.status(200).json({
    message: "welcome to job portal backend",
    success: true,
  });
});

const port = process.env.PORT || 3000;


  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });

