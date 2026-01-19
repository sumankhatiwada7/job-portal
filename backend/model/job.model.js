import mongoose  from "mongoose";


const  jobschema= new mongoose.Schema({
    title:{
        type:string,
        required:true
    },
    description:{
        type:string,
        required:true

    },
    requirments:[{
        type:string,

    
    }],
    salary:{
        type:Number,
        required:true
    },
    jobtype:{
        type:String,
        required:true,

    },
    position:{
        type:string,
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
