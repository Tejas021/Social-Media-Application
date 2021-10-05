import React from 'react'
import Navbar from '../utilities/Navbar'
import "./Home.css"
import Post from './Post'
import {useEffect,useState,useContext} from "react"
import AddPost from './AddPost'

import {UserContext} from "../../UserContext"

const Home = () => {

    // eslint-disable-next-line
const {user,setUser} = useContext(UserContext)

const [dis,setDis]=useState(false)

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
       const fetcher=async()=>{
           const l= await fetchPosts();
           if(l){setPosts(l.reverse())}
           
     
          
       }
    fetcher();    
    }, 
    
    [])




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
            <button onClick={()=>setDis(!dis)} className="btn btn-warning mt-2">+</button>
            <div className="container homecontainer">
              
                {dis?<AddPost posts={posts} setPosts={setPosts} user={user}/>:<></>}
                
                    
           {
           posts.length>0?
           
           posts.map(post=><Post key={post._id} post_id={post._id} user_id={post.userId} Name={post.user} Caption={post.caption} likes={post.like} img={post.imgUrl}/>):<h3 className="text-warning">loading posts...</h3>
           }
       

            
           
            
       </div>
    </div>
    )
}

export default Home



