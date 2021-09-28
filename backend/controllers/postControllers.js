const { findByIdAndUpdate } = require("../models/Post")
const Post = require("../models/Post")

module.exports.addPost=async(req,res)=>{
    console.log(req.body)
    const {content,caption,like,user,comments,imgUrl,userId}=req.body
    const np=new Post({content:content,like:like,caption:caption,user:user,comments:comments,imgUrl:imgUrl,userId:userId})
    await np.save().then((newpost)=>res.status(201).send(newpost));
   

}
module.exports.getPost=async(req,res)=>{
    const posts=await Post.find().then(res=>res);
    res.status(200).send(posts)
}

module.exports.getUserPost=async(req,res)=>{

let userId=req.params.userId
const posts= await Post.find({userId:userId}).then(result=>result);
res.status(200).send(posts)

}

module.exports.deletePost=()=>{

}

module.exports.handleLike=async(req,res)=>{

  
  if(req.body.liked){
    const post=await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : 1}} ,{new: true, useFindAndModify: false})
console.log("called")
    return res.status(200).send(post)
  }
  else{
     const post= await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : -1}}, {new: true, useFindAndModify: false})
     
      return res.status(200).send(post)
  }
}