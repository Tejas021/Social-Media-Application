import React from 'react'
import "./Home.css"
const Post = () => {
    return (
        <div className="postbox mx-2 my-4 py-2">
        <div className="uname"><h4>Name</h4></div>
        <img class="my-2 postimage" src="https://source.unsplash.com/1080x1080/?nature,scenery" alt=""/>
       <div className="like">
           <i className="far fa-thumbs-up mx-2"></i>
           <i className="far fa-comment mx-2 "></i>
       </div>
   </div>
    )
}

export default Post
