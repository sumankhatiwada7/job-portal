import express from "express";
import{register,login,profileupdate,logout} from "../controller/user.controller.js"
import isAuthenticated  from "../middleware/isauthenticated.js";

const router=express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.put("/profileupdate", isAuthenticated, profileupdate);

export default router;