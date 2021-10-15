const express = require("express");
const commentController = require("../controllers/commentController.js")
const router=express.Router();

router.post('/comments',commentController.postComment)
router.get('/comments/:postId',commentController.getComments)

module.exports=router;