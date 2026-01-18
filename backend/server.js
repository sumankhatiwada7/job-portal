import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./utils/db.js"


dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
const  corsoption={
    origin:"http://localhost:5173",
    credentials:true,
 }
app.use(cors(corsoption));
const port=process.env.PORT || 3000;
app.get("/home",(req,res)=>{
    return res.status(200).json({message:"welcome to job portal backend", success:true});
})
app.listen(port,async()=>{
     await connectdb();
    console.log(`server is running on port ${port}`)
})