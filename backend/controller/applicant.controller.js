import applicant from "../model/applicant.model.js";
import job from "../model/job.model.js";
export const applyjob=async(req,res)=>{
    try {
        const {id:userId}=req.params;
        const  {id:jobId}=req.params;
        if(!jobId){
            return res.status(401).json({
                message:"job id is required",
                sucess:false
            })
        };
        const alreadyapplied= await applicant.findOne({applicant:userId,job:jobId});
        if(alreadyapplied){
            return res.status(400).json({
                message:"you have already applied for this job",
                sucess:false

            })
        };
        const job=await job.find(jobId);
        if(!job){
            return res.status(404).json({
                message:"job not found",
                sucess:false
            })
        };
        const application =await applicant.create({
            applicant:userId,
            job:jobId

        })
        job.applications.push(application._id);
        await job.save();
        return res.status(200).json({
            message:"job applied successfully",
            sucess:true,
            application
        })
        
    } catch (error) {
        
    }
}
export const getappliedjobs=async(req,res)=>{
    try{
     const {id:userId}=req.params;
     const application = await applicant.find({
        applicant:userId
     })
     .sort({createdAt:-1})
     .populate({path:"job" ,
        populate:{
            path:"company"
        }
     });
     if(!application){
        return res.status(404).json({
            message:"no applied jobs found",
            sucess:false
        })
     }
     return res.status(200).json({
        application,
        sucess:true
     })
    }
    catch(error){
        console.log(error);
        
    }
}
// data for admin
export const getapplicantdetails =async(req,res)=>{
    try{
        const{id:jobId}=req.params;
        const job= await job.findById(jobId).populate({
            path:"applications",
            option:sort({createdAt:-1}),
            populate:{
                path:"applicant"
            }
        });
        if(!job){
            return res.status(404).json({
                message:"job not found",
                sucess:false
            })
        };
        return res.status(200).json({
            job,
            sucess:true
        })
    }
    catch(error){
    }
}