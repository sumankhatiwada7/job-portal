import company from "../model/company.model.js";

export const registerCompany=async(req,res)=>{
  try {
    const{companyName}=req.body;
    if(!companyName){
        return res.status(400).json({
            message:"Company name is required",
            sucess:false
        });
    };
    let companyExists = await company.findOne({name:companyName});
    if(companyExists){
        return res.status(400).json({
            message:"company already exists",
            sucess:false
        });
    };
    company= await company.create({
        name:companyName,
        userid:req._id
    })
    return res.status(201).json({
        message:"company registered successfully",
        sucess:true,
        company
    })
    
  } catch (error) {
     console.log(error);
  }
}

export const getCompanyDetails=async(req,res)=>{
    try {
        const userid=req._id;
        const companies= await company.find({userid});
        if(!companies){
            return res.status(404).json({
                message:"no companies found",
                sucess:false
            })
        }
        
    } catch (error) {
        console.log(error);
    }
}
export const  companybyId=async(req,res)=>{
    try {
         const companyid=req.params.id;
         const company= await company.findbyId(companyid);
         if(!company){
            return res.status(404).json({
                message:"comapny not found ",
                sucess:false
            });
         };
        return res.status(200).json({
            message:"company details fetched successfully",
            sucess:true,
            company
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
            const company = await company.findByIdAndUpdate(req.params.id,updatedata,{new:true});
            if(!company){
                return res.status(404).json({
                    message:"company not found",
                    sucess:false
                });

            };
            return res.status(200).json({
                message:"company updated successfully",
                sucess:true,
                company
            })

        }
        catch (error) {

        }

}