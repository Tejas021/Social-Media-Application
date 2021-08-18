import React from 'react'
import "./Home.css"
const Post = ({Name,Caption}) => {

    
    return (
        <div className="postbox mx-2 my-4 py-2">
        <div className="uname"><h4>{Name}</h4></div>
        <img className="my-2 postimage" src="https://source.unsplash.com/1080x1080/?nature,scenery" alt=""/>
        <div class="caption m-1">{Caption}</div>
                <div class="row like mt-3">
                   <div class="col-lg-5"><i class="far fa-thumbs-up"></i><span><p>33</p></span></div> 
                   
                    <div class="col-lg-3"><i class="far fa-comment  "></i></div>
                </div>
   </div>
    )
}

export default Post
