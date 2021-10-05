const express= require("express");
const userController = require("../controllers/userController.js")
const router=express.Router();

router.get("/user", userController.user)
router.post("/follow/:id", userController.handleFollowers)
router.post("/unfollow/:id", userController.handleUnFollow)

module.exports=router;