const express =  require("express");
const router = express.Router();
const postControllers = require("../controllers/postControllers.js")

router.post("/add-post",postControllers.addPost)
router.get("/get-post",postControllers.getPost)
router.delete("/delete-post",)

module.exports=router