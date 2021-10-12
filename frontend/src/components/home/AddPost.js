import React from 'react'
import {useState} from "react"
const AddPost = ({posts,setPosts,user}) => {
    
const [image, setimage] = useState("")
const [newpost, setnewpost] = useState({caption:"",like:0,user:user.name,imgUrl:"",userId:user._id})

const imageUpload=(e)=>{
  
    e.preventDefault()
  console.log("called")
    let data = new FormData();
    data.append("file",image);
    data.append("api_key",495674683468576)
    data.append("upload_preset","yatagram-images");
    data.append("cloud_name","yatagram")
    console.log(data)
     fetch("https://api.cloudinary.com/v1_1/yatagram/upload",{
        method:"post",
        body:data
    }).then(res=>res.json()).then(result=>setnewpost({...newpost,imgUrl:result.url}))
 
    console.log("sadf",image)
   

    

    

}


const submitFunction=(e)=>{
    e.preventDefault()
 

    console.log(newpost.imgUrl)
    fetch("http://localhost:5000/add-post",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(newpost)
}).then(res=>res.json()).then(res=>setPosts([...posts,res]))
}


// const onPostSubmit =(e)=>{
// e.preventDefault();

// imageUpload()

// submitFunction()
// setnewpost({content:"",caption:"",like:"",user:"",imgUrl:""})
// }

    return (
        <div>

        <form onSubmit={e=>submitFunction(e)}> 
            <h4 className="text-warning">ADDPOST</h4>
            {/* <input className="form-control" placeholder="content" value={newpost.content} onChange={e=>setnewpost({...newpost,content:e.target.value})}/> */}
            <input className="form-control" type="text" placeholder="caption" value={newpost.caption} onChange={e=>setnewpost({...newpost,caption:e.target.value})}/>
           
            {/* <input className="form-control" placeholder="likes" value={newpost.like} onChange={e=>setnewpost({...newpost,like:e.target.value})}/> */}
           <input type="file" onChange={e=>  setimage(e.target.files[0])} className="form-control" />
  <button  onClick={e=>imageUpload(e)} className="btn btn-warning">upload</button>
            <button className="btn btn-warning" type="submit">Post</button></form>

           
        </div>
    )
}

export default AddPost
