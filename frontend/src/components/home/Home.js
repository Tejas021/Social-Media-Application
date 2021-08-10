import React from 'react'
import Navbar from '../utilities/Navbar'
import "./Home.css"
import Post from './Post'
import {useEffect,useState} from "react"
const Home = () => {
    useEffect(() => {
       const fetcher=async()=>{
           const l= await fetchPosts();
           setPosts(l)
       }
    fetcher();    
    }, 
    
    [])
const [posts, setPosts] = useState([])



const fetchPosts=async()=>{
    const fetchposts=await fetch("http://localhost:5000/get-post",{
        method:"GET",
        headers:{"Content-type":"application/json"},
    }).then(res=>res.json()).catch(error=>console.log(error))

    return fetchposts;
}


    return (
        <div>
            <Navbar/>
                
            <div className="container homecontainer">
            {posts.map(post=><Post key={post._id} Name={post.content}/>)}
           
            
       </div>
    </div>
    )
}

export default Home
