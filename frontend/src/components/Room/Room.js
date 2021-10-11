import React from "react";
import Navbar from "../utilities/Navbar";
import ChatBox from "./ChatBox";
import "./Room.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../UserContext";
import Conversation from "./Conversation";
import Follower from './Follower'


const Room = () => {
  const { user } = useContext(UserContext);
  const [conversations, setConversations] = useState([]);
  const [currentChat,setCurrentChat]=useState(null)
  // const [followers, setfollowers] = useState([])
 
  // console.log(`------user-----`)
  // console.log(user);
  useEffect(() => {
    const getConversation = async () => {
       await fetch("http://localhost:5000/conversation/" + user._id)
        .then((res) => res.json())
        .then((res) => setConversations(res))
        .catch((error) => console.log(error));
    };

    getConversation();
  }, [user._id]);



const postConversation=async(userId)=>{
  // console.log(userId,userId)
  await  fetch("http://localhost:5000/conversation",{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({senderId:user._id,receiverId:userId})
  })
}



  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 p-2">
          <div className="my-5 p-3 bg-warning">
              <h3 style={{ textAlign: "center" }}>Followers</h3>
             
             {user.followers.map(f=><div key={f} onClick={e=>postConversation(f)}><Follower userId={f}/> </div>)}
           
            
            </div>
          </div>
          <div className="col-md-6 p-2">
            <div className="my-5 bg-warning p-1">
              <ChatBox currentChat={currentChat}/>
            </div>
          </div>
          <div className="col-md-3 p-2">
            <div className="my-5 p-3 bg-warning">
              <h3 style={{ textAlign: "center" }}>Conversations</h3>
              {conversations.map((c) => {
              return <div key={conversations._id} onClick={()=>setCurrentChat(c)}> <Conversation conversation={c} currentUser={user} /> </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
