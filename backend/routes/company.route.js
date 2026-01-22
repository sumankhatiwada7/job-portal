import express from "express";
import {registerCompany, getCompanyDetails,companybyId,updateCompany} from "../controller/company.controller.js";
import isAuthenticated from "../middleware/isauthenticated.js";


const router =express.Router();

router.post("/registercompany",isAuthenticated,registerCompany);
router.get("/getcompanydetails",isAuthenticated,getCompanyDetails);
router.get("/companybyid/:id",isAuthenticated,companybyId);
router.put("/updatecompany/:id",isAuthenticated,updateCompany);

export default router;