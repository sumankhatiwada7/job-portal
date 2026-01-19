import express from "express";
import{register,login,profileupdate} from "../controller/user.controller.js"
import isAuthenticated  from "../middleware/isauthenticated.js";

const router=express.Router();
router.post("/register",isAuthenticated, register);
router.post("/login",isAuthenticated, login);
router.put("/profileupdate", isAuthenticated, profileupdate);

export default router;