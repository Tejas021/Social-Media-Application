import React from 'react'
import Navbar from '../utilities/Navbar'
import "./Home.css"
import Post from './Post'
import {useEffect,useState} from "react"
import AddPost from './AddPost'
const Home = () => {


    const [posts, setPosts] = useState([])
    const [ps, setPs] = useState([])
    
    useEffect(() => {
       const fetcher=async()=>{
           const l= await fetchPosts();
           setPosts(l)
           console.log(posts)
           setPs (l.reverse())
           console.log(ps)
       }
    fetcher();    
    }, 
    
    [posts])







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
                <AddPost posts={posts} setPosts={setPosts}/>

            
           {ps.map(post=><Post key={post._id} Name={post.user}/>)}
       
            {posts.map(post=><Post key={post._id} Name={post.user}/>)}
           
            
       </div>
    </div>
    )
}

export default Home



