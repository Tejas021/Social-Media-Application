import React from 'react'
import { Link } from 'react-router-dom'

const Comments = () => {
    return (
        <div style={{paddingLeft:"1rem"}}>
            <div ><h5><i style={{color:"black"}} className="far fa-user-circle"></i><Link  to="/" style={{color:"black",textDecoration:"none",marginLeft:"10px"}}>Luffy </Link> </h5></div>
            <div>awesome , aag aag shatak shatak</div>
            <hr />
        </div>
    )
}

export default Comments
