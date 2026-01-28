import job from "../models/job.model.js";


export const createJob=async(req,res)=>{
    try {
       const{title,description,requirments,salary,jobtype,position,companyid,exprience} = req.body;
       const userid=req.user._id;
       if(!title || !description || !salary || !jobtype || !position || !companyid || !exprience){
        return res.status(400).json({
            message:"all fields  are required",
            sucess:false
        });
       };
       const job= await job.create({
        title,
        description,
        requirments:requirments.split(","),
        salary,
        jobtype,
        position,
        company:companyid,
        createdBy:userid,
        exprience:exprience
       });
       return res.status(201).json({
        message:"job created successfully",
        sucess:true,
        job
       })

    } catch (error) {
        console.log(error);
    }
}
export const alljobs =async(req,res)=>{
    try {
        const keyword=req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}},]
        };
        const jobs= await job.find(query).populate({path:"company"}).sort({createdAt:-1});
        if(!jobs){
            return res.status(404).json({
                message:"no jobs found",
                sucess:false
            });

        };
        return res.status(200).json({
           
            sucess:true,
            jobs
        })

    } catch (error) {
        
    }
}
export const jobbyId=async(req,res)=>{
    const jobid=req.prams.id;
    const job =await job.findById(jobId);
    if(!job){
        return res.status(404).json({
            message:"job not found",
            sucess:false
        });
    };
    return res.status(200).json({
        job,
        sucess:true
    })
}

export const adminjobs=async(req,res)=>{
    try {
        const adminid=req.prams.id;
        const jobs =await job.find({createdBy:adminid});
        if(!jobs){
             return res.status(404).json({
            message:"job not found",
            sucess:false
        });
            
        };
    } catch (error) {
        console.log(error);
    }
}