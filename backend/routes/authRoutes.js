const express= require("express");
const authController =require("../controllers/authController.js")
const router=express.Router();
router.post("/signup",authController.signup)
router.post("/signin",authController.signin)
router.post("/lgout",authController.logout)

module.exports=router;