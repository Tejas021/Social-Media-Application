import React from 'react'


const Message = ({message,myMsg}) => {

    // console.log(message)
    return (
        <div> 
             <li className={myMsg ? "out" : "in"}>
                    <div className="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div className="chat-body">
                      <div className="chat-message">
                        <p>{message.text}</p>
                        {/* <p className="name">{message.createdAt}</p> */}
                      </div>
                    </div>
                  </li>
                  
        </div>
    )
}

export default Message
