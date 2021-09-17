import React from 'react'
import {useState} from "react"
const AddPost = ({posts,setPosts}) => {
    
const [image, setimage] = useState("")
const [newpost, setnewpost] = useState({content:"",caption:"",like:"",user:"",imgUrl:""})



const imageUpload=(e)=>{
    e.preventDefault()
    let data = new FormData();
    data.append("file",image);
    data.append("api_key",495674683468576)
    data.append("upload_preset","yatagram-images");
    data.append("cloud_name","yatagram")
    console.log(data.file)
    fetch("	https://api.cloudinary.com/v1_1/yatagram/upload",{
        method:"post",
        body:data
    }).then(res=>res.json()).then(pure=>setnewpost({...newpost,imgUrl:pure.url}))
}


const onPostSubmit =(e)=>{
e.preventDefault();

fetch("http://localhost:5000/add-post",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(newpost)
}).then(res=>res.json()).then(res=>setPosts([...posts,res]))

setnewpost({content:"",caption:"",like:"",user:"",imgUrl:""})
}

    return (
        <div>

        <form onSubmit={e=>onPostSubmit(e)}> 
            <h1 className="text-warning">ADDPOST</h1>
            <input className="form-control" placeholder="content" value={newpost.content} onChange={e=>setnewpost({...newpost,content:e.target.value})}/>
            <input className="form-control" type="text" placeholder="caption" value={newpost.caption} onChange={e=>setnewpost({...newpost,caption:e.target.value})}/>
            <input className="form-control" placeholder="user" value={newpost.user} onChange={e=>setnewpost({...newpost,user:e.target.value})}/>
            <input className="form-control" placeholder="likes" value={newpost.like} onChange={e=>setnewpost({...newpost,like:e.target.value})}/>
           <input type="file" onChange={(e=>setimage(e.target.files[0]))}/>
            <button onClick={e=>imageUpload(e)}>ok</button>
            <button className="btn btn-warning">add</button></form>

           
        </div>
    )
}

export default AddPost
