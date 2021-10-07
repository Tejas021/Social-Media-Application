const { findByIdAndUpdate } = require("../models/Post")
const Post = require("../models/Post")

module.exports.addPost=async(req,res)=>{
    console.log(req.body)
    const {content,caption,like,user,comments,imgUrl,userId}=req.body
    const np=new Post({content:content,like:like,caption:caption,user:user,comments:comments,imgUrl:imgUrl,userId:userId})
    await np.save().then((newpost)=>res.status(201).send(newpost));
   

}
module.exports.getPost=async(req,res)=>{
    const followings=req.body.following
    // console.log(req.body)
    // console.log(req.body.following)
  
    // followings.map(async f=>{
    //   console.log(f)
    //   let post=await Post.find({userId:f}).then(res=>res)

    //   posts.append()
        
    // })

// let posts=[]
let posts=[]
const friendPosts = await Promise.all(
followings.map((friendId) => {
    return Post.find({ userId: friendId });
  })
);

friendPosts.map(a=>{
  posts=posts.concat(a)
})

// console.log(posts)
// const userPosts=await Post.find({userId}).then(res=>res)

    




// console.log("sdaf",friendPosts)
    
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