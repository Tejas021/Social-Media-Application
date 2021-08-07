import React from 'react'
import Navbar from '../utilities/Navbar'
import "./Home.css"
import Post from './Post'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="container homecontainer">
            <Post/>
            <Post/>
            
       </div>
    </div>
    )
}

export default Home
