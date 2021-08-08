const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema=new Schema({

    content:{type:String,required:true},
    caption:{type:String},
    like:{type:Number},


},{timestamps:true})

const Post = mongoose.model('post',postSchema)
module.exports=Post;