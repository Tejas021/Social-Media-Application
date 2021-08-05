import React from 'react'
import "./Home.css"
const Home = () => {
    return (
        <div>
            <div className="container">
              <div className="postbox mx-2 my-4 py-2">
                 <div className="uname"><h4>Name</h4></div>
                     <img className="my-2" src="akshay.jpg" alt="" />
                <div className="like">
                    <i className="far fa-thumbs-up mx-2"></i>
                    <i className="far fa-comment mx-2 "></i>
                </div>
            </div>
             <div className="postbox mx-2 py-2">
                <div className="uname"><h3>Name</h3></div>
                <img className="my-2" src="akshay.jpg" alt="" />
                <div className="like">
                    <i className="far fa-thumbs-up mx-2"></i>
                    <i className="far fa-comment mx-2 "></i>
                </div>
            </div> 
       </div>
    </div>
    )
}

export default Home
