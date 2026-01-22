
import{user} from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register=async(req,res)=>{
    try{
     const {fullname,email,password,role}=req.body;
     if(!fullname||!email||!password||!role){
        return res.status(400).json({
            message:"error in register ",
            success:false
        });
     };
     const user=await user.findone({email});
     if(user){
        return res.status(400).json({
            message:"user already exists",
            success:false
        });
     };
     const hashedpassword= await bcrypt.hash(password,10);
     await user.create({
        fullname,
        email,
        password:hashedpassword,
        role,
        
     });
    return res.status(200).json({
        message:"user registered successfully",
        success:true
    })
    }
    catch(error){

    }
}
export const  login= async(req,res)=>{
    
    try {
    const{email,password}=req.body;
    if(!email||!password){ 
        return res.status(400).json({
            message:"something is missing",
            success:false
        });
    };
    let user= await user.findone({email});
    if(!user){
        res.status(404).json({
            message:"user not found",
            success:false
        });

    };
    const ismatch = await bcrypt.compare(password,user.password);
    if(!ismatch){
        res.status(400).json({
         message:"invalid credentials",
         success:false
        });
    };
    const tokendata= {
        userid:user._id,
    }
    user={
        _id:user._id,
        fullname:user.fullname,
        email:user.email,
        role:user.role,
        profile:user.profile

    }
    const token=await jwt.sign(tokendata,process.env.jwtkey,{expiresIn:'7d'});
    return res.status(200).cookie('token',token,{maxAge:7*24*60*60*1000,httpsonly:true,samesite:'strict'}).json({
        message:`welcome back ${user.fullname}`,
        user,
        success:true
    });

    } catch (error) {
      console.log(error);
    }
}
export const logout =async(req,res)=>{
    try {
        return res.status(200).cookie('token','',{maxage:0}).json({
            message:"logged out successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
export const profileupdate=async(req,res)=>{
    try{
     const {bio,skills,fullname,email,phonenumber} = req.body;
     if(!bio||!skills||!fullname||!email||!phonenumber){
        return res.status(400).json({
            message:"something is missing",
            success:false
        
        });
        };
       const splitskills= skills.split(',');
       const userid=req.userid;
       let user =await user.findOne({email});
       if(!user){
        return res.status(400).json({
            message:"user not found",
            success:false
        });
        

       };
       //updating user profile
       if(fullname) user.fullname=fullname;
       if(email) user.email=email;
       if(phonenumber) user.phoneno=phonenumber;
       if(bio) user.bio=bio;
       if(skills) user.skills=splitskills;
       await user.save();

        user={
        _id:user._id,
        fullname:user.fullname,
        email:user.email,
        role:user.role,
        profile:user.profile

        };
        return res.status(200).json({
            message:"profile updated successfully",
            success:true,
            user
        });
        

    }

    catch(error){
        console.log(error);
    }
}
