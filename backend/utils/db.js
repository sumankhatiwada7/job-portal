import mongoose from "mongoose";
const connectdb =async()=>{
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("database connected sucessfully");
    } catch (error) {
        console.log("database connection failed",error);
    }
}
export default connectdb;