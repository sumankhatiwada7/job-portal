import mongoose from "mongoose";
const connectdb = async () => {
    try {
               console.log("Connection string:", process.env.mongourl); // Add this

        await mongoose.connect(process.env.mongourl, {
            serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
    socketTimeoutMS: 45000,
    family: 4

        });
        console.log("database connected successfully");
    } catch (error) {
        console.error("database connection failed", error.message, error.reason || "");
        process.exit(1);
    }
};
export default connectdb;