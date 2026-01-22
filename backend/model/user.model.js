import mongoose  from "mongoose";
const userschema= new mongoose.Schema({
    fullname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['jobseeker','employer'],
        required:true
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String},// URL to resume file
        resumeoriginalname:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId,ref:'company'},
        profilephoto:{
            type:String,
            default:""
        }
    },

},{timestamps:true});
export const user= mongoose.model('user',userschema);