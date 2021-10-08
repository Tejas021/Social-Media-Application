import React from 'react'
import Comments from './Comments'

const CommentBox = () => {
    return (
        <div>
            <div style={{
                border:"2px solid white",
                height:"100vh",
                bordeRadius: "10px",
                width:"40vw",
                backgroundColor:"#fee600",
                margin:"0 auto",
            }}>
                <hr />
                <Comments />
                <Comments />
                <Comments />
            </div>
        </div>
    )
}

export default CommentBox
