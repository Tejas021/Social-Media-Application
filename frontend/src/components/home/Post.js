import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import {useState} from "react"



const Post = ({Name,Caption,likes,img,post_id,user_id,friend_id,likedPeople}) => {

 
    const [liked,setLiked]=useState(true)
    const [likeCount,setLikeCount]=useState(likes)
    // const [fillLike,setFillLike]=useState(likedPeople.includes(friend_id))
  
    const [fillLike,setFillLike]=useState(false)
 

    const handleLike=(e)=>{
        e.preventDefault();
        setLiked(!liked)
        if(liked){
            console.log("like")
            
            setFillLike(true)
            console.log(fillLike)
            
        }
        else{
            console.log("unlike")
           
            setFillLike(false)
            console.log(fillLike)
            
        }
        let data={post_id,liked,friend_id}
        fetch("http://localhost:5000/like",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(r=>{
            console.log(r)
            setLikeCount(r.like)
        })
        .catch(err=>console.log(err))
    }
    // console.log(likeCount)
    return (
        <div className="postbox mx-2 my-4 py-2">
        <div className="uname"><h5><i className="far fa-user-circle"></i><Link className="name_link" to={`/profile/${user_id}`}> {Name}</Link> </h5></div>
        <img className="my-2 postimage" src={img} alt=""/>
        <div className="caption m-1">{Caption}</div>
                <div className="row like mt-3">
                      { !fillLike ?  
                   <div className="col-lg-5"><i className="far fa-thumbs-up" onClick={e=>handleLike(e)}></i><span ><p>{likeCount}</p></span></div> 
                   : <div className="col-lg-5"><i className="fas fa-thumbs-up" onClick={e=>handleLike(e)}></i><span ><p>{likeCount}</p></span></div> 
                     } 
                   <Link to={`/comments/${post_id}`}> <div className="col-lg-3"><i className="far fa-comment" ></i></div> </Link>
                </div>
   </div>
    )
}

export default Post
