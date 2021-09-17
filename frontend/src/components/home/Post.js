import React from 'react'
import "./Home.css"
const Post = ({Name,Caption,likes,img}) => {

    
    return (
        <div className="postbox mx-2 my-4 py-2">
        <div className="uname"><h4>{Name}</h4></div>
        <img className="my-2 postimage" src={img} alt=""/>
        <div className="caption m-1">{Caption}</div>
                <div className="row like mt-3">
                   <div className="col-lg-5"><i className="far fa-thumbs-up"></i><span><p>{likes}</p></span></div> 
                   
                    <div className="col-lg-3"><i className="far fa-comment  "></i></div>
                </div>
   </div>
    )
}

export default Post
