const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema=new Schema({

    content:{type:String,required:true},
    user:{type:String,required:true},
    caption:{type:String},
    like:{type:Number},
    comments:{type:Array}


},{timestamps:true})

const Post = mongoose.model('post',postSchema)
module.exports=Post;