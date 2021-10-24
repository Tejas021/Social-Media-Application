import React from 'react'
import Comments from './Comments'
import { useContext,useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {UserContext} from "../../../UserContext"

const CommentBox = () => {

    const {user} = useContext(UserContext)
    const params = useParams();
    const [comments,setComments] = useState([])
    const [newComment,setNewComment] = useState('')
    
    
    useEffect(()=>{
        const fetchComments=async()=>{
           const fetchcomments=await fetch(`http://localhost:5000/comments/${params.id}`,{
                method:"GET",
                headers:{"Content-type":"application/json"},
            }).then(res=>(res.json())).catch(error=>console.log(error))
            const final=await fetchcomments
            setComments(final)
        }
      fetchComments()
    },[params.id])

    const handleSubmit = (e)=>{
        e.preventDefault();
        let data = {
            postId:params.id,
            senderName:user.name,
            text:newComment
        }
        try{
            fetch("http://localhost:5000/comments", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => response.json()).then(json => setComments([...comments,json]))
            setNewComment('')
        } catch(err){
            console.log(err)
          }
    }

    return (
        <div className="p-5">
            <div style={{
                border:"2px solid white",
                
                bordeRadius: "10px",
                width:"40vw",
                backgroundColor:"#272727",
                color:"#fff",
                margin:"0 auto",
                position:"relative",
                
            }} >
                <hr />
               {
                   comments.map(comment=><Comments key={comment._id} name={comment.senderName} text={comment.text} />)
               }
                <div style={{bottom:"20px",left:"10px",width:"100%"}} className="row p-4 ">
                  <div className="col-md-10 col-xs-10 ">
                    <input className="form-control border border-warning" placeholder="your comment"
                     onChange={e=>setNewComment(e.target.value)} 
                     value={newComment}  
                       />
                  </div>
                  <button onClick={handleSubmit} className="btn btn-warning col-md-2 col-xs-1" >send</button>
                </div>
            </div>
        </div>
    )
}

export default CommentBox
