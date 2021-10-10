import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../utilities/Navbar'
import "./Home.css"
import Post from './Post'
import {useEffect,useState,useContext} from "react"
import AddPost from './AddPost'

import {UserContext} from "../../UserContext"
import SearchModal from './search/SearchModal'

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
    // fetchExample()  
    }, 
    
    [posts])




const fetchPosts=async()=>{
    //console.log(user.following)
    //const followings=user.following
    const fetchposts=await fetch("http://localhost:5000/get-post",{
        method:"POST",
        body:JSON.stringify({following:user.following,userId:user._id}),
        headers:{"Content-type":"application/json"},
    }).then(res=>res.json()).catch(error=>console.log(error))

    return fetchposts;
}




    return (
        <div>
            <Navbar/>
   
            <button onClick={()=>setDis(!dis)} className="btn btn-warning mt-2 fixed-bottom">+</button>
           <Link to="/comments"> <button  className="btn btn-warning mt-2 ">comments</button> </Link>
            <div className="container homecontainer">
              <SearchModal/>
                {dis?<AddPost posts={posts} setPosts={setPosts} user={user}/>:<></>}
                {console.log(posts)}
                    
           {
           posts.length>0?
           
           posts.map(post=><Post currentuser={user._id} key={post._id} friend_id={user._id} post_id={post._id} user_id={post.userId} Name={post.user} Caption={post.caption} likes={post.like} img={post.imgUrl}  likedPeople={post.likedPeople}/>):<h3 className="text-warning">loading posts...</h3>
           }
       {/* <p className="text-light">{o}</p> */}

            
           
            
       </div>
    </div>
    )
}

export default Home



