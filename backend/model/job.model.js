import mongoose  from "mongoose";


const  jobschema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    requirments:[{
        type:String,

    
    }],
    exprience:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    jobtype:{
        type:String,
        required:true,

    },
    position:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company',
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    applications:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'application',
        required:true
    }
},{timestamps:true});
export const job = mongoose.model('job', jobschema)
