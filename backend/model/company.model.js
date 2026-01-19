import mongoose from "mongoose";
const comapanyschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     description:{

        type:String,
       
    },
     website:{
        type:String,
       
    },
     location:{
        type:String,
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    logo:{
        type:String,  
    }

},{timestamps:true});
export const comapny =mongoose.model('company',comapanyschema)