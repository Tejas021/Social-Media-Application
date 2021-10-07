const { findByIdAndUpdate } = require("../models/Post")
const Post = require("../models/Post")

module.exports.addPost=async(req,res)=>{
    console.log(req.body)
    const {content,caption,like,user,comments,likedPeople,imgUrl,userId}=req.body
    const np=new Post({content:content,like:like,caption:caption,user:user,comments:comments,likedPeople:likedPeople,imgUrl:imgUrl,userId:userId})
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

// module.exports.handleLike=async(req,res)=>{

//   const verUser = await Post.exists({likedPeople:req.body.friend_id})
//   console.log(verUser)
//   if (!verUser){
//     console.log("new like")
//       if(req.body.liked){
        
//         const post=await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : 1},$push: { likedPeople: req.body.friend_id }} ,{new: true, useFindAndModify: false})
//         console.log("called")
//         return res.status(200).send(post)
//       }
//       else{
//         const post= await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : -1}}, {new: true, useFindAndModify: false})
        
//           return res.status(200).send(post)
//       }
//   } else{
//     console.log("warning same person ")
//     if(req.body.liked){
        
//       const post=await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : 0},$push: { likedPeople: req.body.friend_id }} ,{new: true, useFindAndModify: false})
//       console.log("called")
//       return res.status(200).send(post)
//     }
//     else{
//       const post= await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : 0}}, {new: true, useFindAndModify: false})
      
//         return res.status(200).send(post)
//     }
//   }
// }

module.exports.handleLike=async(req,res)=>{
  const verLikedUser = await Post.exists({likedPeople:req.body.friend_id})
  const verDislikedUser = await Post.exists({dislikedPeople:req.body.friend_id})
 
  if(req.body.liked){
      if(!verLikedUser){
        console.log("new like")
        const post=await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : 1},$push: { likedPeople: req.body.friend_id }} ,{new: true, useFindAndModify: false})
        return res.status(200).send(post)
      } else {
        console.log("same user liked")
        const post=await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : 0}} ,{new: true, useFindAndModify: false})
        return res.status(200).send(post)
      }
  } else {
      if((verLikedUser) && (!verDislikedUser)){
        console.log("new dislike")
        const post= await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : -1}, $push: { dislikedPeople: req.body.friend_id }},{new: true, useFindAndModify: false})
        return res.status(200).send(post)
      } else{
        console.log("cannot dislike")
        const post=await Post.findByIdAndUpdate(req.body.post_id,{$inc : {'like' : 0}} ,{new: true, useFindAndModify: false})
        return res.status(200).send(post)
      }
  }

}