import React from 'react'
import Navbar from '../utilities/Navbar'
import "./Home.css"
import Post from './Post'
import {useEffect,useState,useContext} from "react"
import AddPost from './AddPost'

import {UserContext} from "../../UserContext"
import {Redirect} from "react-router-dom"
const Home = () => {

    // eslint-disable-next-line
const {user,setUser} = useContext(UserContext)

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
       const fetcher=async()=>{
           const l= await fetchPosts();
           setPosts(l.reverse())
     
          
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

// if(!user){
//    return <Redirect to="/signin"/>}
    return (
        <div>
            <Navbar/>
      
            <div className="container homecontainer">
                <AddPost posts={posts} setPosts={setPosts}/>
                    
           {posts.map(post=><Post key={post._id} Name={post.user} Caption={post.caption} likes={post.like} img={post.imgUrl}/>)}
       

            
           
            
       </div>
    </div>
    )
}

export default Home



