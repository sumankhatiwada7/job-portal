import mongoose from 'mongoose';

const  applicantschema= new mongoose.Schema({
   job:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'job',
    required:true
   },
   appliacnt:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true
   },
   status:{
    type:String,
    enum:['pending','accepted','rejected'],
    default:'pending'
   }
},{timestamps:true});
export const applicant = mongoose.model('applicant',applicantschema)