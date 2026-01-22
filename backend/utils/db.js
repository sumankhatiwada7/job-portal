import mongoose from "mongoose";
const  connectdb= async()=>{
    try{
        await mongoose.connect(process.env.mongourl);
        console.log("database connected successfully");

    }catch(error){
        console.error("database connection failed", error.message);
        process.exit(1);
    }
}
export default connectdb;