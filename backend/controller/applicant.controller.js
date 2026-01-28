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