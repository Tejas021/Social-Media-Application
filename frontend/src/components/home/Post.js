import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import {useState} from "react"
const Post = ({Name,Caption,likes,img,post_id,user_id}) => {

    const [liked,setLiked]=useState(true)
   

    const handleLike=(e)=>{
        e.preventDefault();
        setLiked(!liked)
        if(liked){
            likes=likes+1
        }
        else{
            likes=likes-1
        }
        let data={post_id,liked}
        fetch("http://localhost:5000/like",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        }).then(res=>res.json()).catch(err=>console.log(err))
    }
    return (
        <div className="postbox mx-2 my-4 py-2">
        <div className="uname"><h5><i className="far fa-user-circle"></i><Link className="name_link" to={`/profile/${user_id}`}> {Name}</Link> </h5></div>
        <img className="my-2 postimage" src={img} alt=""/>
        <div className="caption m-1">{Caption}</div>
                <div className="row like mt-3">
                   <div className="col-lg-5"><i className="far fa-thumbs-up" onClick={e=>handleLike(e)}></i><span ><p>{likes}</p></span></div> 
                   
                    <div className="col-lg-3"><i className="far fa-comment  "></i></div>
                </div>
   </div>
    )
}

export default Post
