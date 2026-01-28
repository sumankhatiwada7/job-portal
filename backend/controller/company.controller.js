// Use named import to match model export
import { company as Company } from "../model/company.model.js";

export const registerCompany=async(req,res)=>{
  try {
    const{companyName}=req.body;
    if(!companyName){
        return res.status(400).json({
            message:"Company name is required",
            sucess:false
        });
    };
    let companyExists = await Company.findOne({name:companyName});
    if(companyExists){
        return res.status(400).json({
            message:"company already exists",
            sucess:false
        });
    };
    const newCompany = await Company.create({
        name:companyName,
        user:req._id
    })
    return res.status(201).json({
        message:"company registered successfully",
        sucess:true,
        company:newCompany
    })
    
  } catch (error) {
     console.log(error);
  }
}

export const getCompanyDetails=async(req,res)=>{
    try {
        const userid=req._id;
        const companies= await Company.find({user:userid});
        if(!companies || companies.length===0){
            return res.status(404).json({
                message:"no companies found",
                sucess:false
            })
        }
        return res.status(200).json({
            message:"companies fetched successfully",
            sucess:true,
            companies
        })
        
    } catch (error) {
        console.log(error);
    }
}
export const  companybyId=async(req,res)=>{
    try {
         const companyid=req.params.id;
         const companyData= await Company.findById(companyid);
         if(!companyData){
            return res.status(404).json({
                message:"comapny not found ",
                sucess:false
            });
         };
        return res.status(200).json({
            message:"company details fetched successfully",
            sucess:true,
            company:companyData
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateCompany=async(req,res)=>{
        try {
            const {name,description,website,location}=req.body;
            const file=req.file;
            const updatedata={name,description,website,location};
            const updatedCompany = await Company.findByIdAndUpdate(req.params.id,updatedata,{new:true});
            if(!updatedCompany){
                return res.status(404).json({
                    message:"company not found",
                    sucess:false
                });

            };
            return res.status(200).json({
                message:"company updated successfully",
                sucess:true,
                company:updatedCompany
            })

        }
        catch (error) {
            console.log(error);
        }

}