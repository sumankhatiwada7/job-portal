import express from "express";
import { applyjob, getappliedjobs, getapplicationdetails, updatestatus} from "../controller/job.controller.js";
import isAuthenticated from "../middleware/isauthenticated.js";
const router= express.Router();

router.get('/applyjob/:id/:id',isAuthenticated,applyjob);
router.get('/getappliedjobs/:id',isAuthenticated,getappliedjobs);
router.get('/getapplicationdetails/:id',isAuthenticated,getapplicationdetails);
router.put('/updatestatus/:id',isAuthenticated,updatestatus);
export default router;