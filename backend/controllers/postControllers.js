const Post = require("../models/Post")

module.exports.addPost=async(req,res)=>{
    console.log(req.body)
    const {content,caption,like,user,comments}=req.body
    const np=new Post({content:content,like:like,caption:caption,user:user,comments:comments})
    await np.save().then((newpost)=>res.status(201).send(newpost));
   

}
module.exports.getPost=async(req,res)=>{
    const posts=await Post.find().then(res=>res);
    res.status(200).send(posts)
}
module.exports.deletePost=()=>{
}