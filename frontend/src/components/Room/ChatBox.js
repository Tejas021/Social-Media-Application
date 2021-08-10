import React from 'react'

const ChatBox = () => {
    return (
        <div>
            <div className="card">
              <div className="card-body height3">
                <ul className="chat-list">
                  <li className="in">
                    <div className="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div className="chat-body">
                      <div className="chat-message">
                        <h5>Super Cool Name</h5>
                        <p>whats up mate</p>
                      </div>
                    </div>
                  </li>
                  <li className="out">
                    <div className="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div className="chat-body">
                      <div className="chat-message">
                        <h5>Tejas Kolwankar</h5>
                        <p>Hey Man !</p>
                      </div>
                    </div>
                  </li>
                  <li className="in">
                    <div className="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div className="chat-body">
                      <div className="chat-message">
                        <h5 className="name">Super Cool Name</h5>
                        <p>akshay is awesome</p>
                      </div>
                    </div>
                  </li>
                  <li className="out">
                    <div className="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div className="chat-body">
                      <div className="chat-message">
                        <h5>Tejas Kolwankar</h5>
                        <p>I Know Right</p>
                      </div>
                    </div>
                  </li>
                  <li className="in">
                    <div className="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div className="chat-body">
                      <div className="chat-message">
                        <h5>Super Cool Name</h5>
                        <p>LMAO!!</p>
                      </div>
                    </div>
                  </li>
                  <li className="out">
                    <div className="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div className="chat-body">
                      <div className="chat-message">
                        <h5>Tejas Kolwankar</h5>
                        <p>Sawaal</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-10 col-xs-10">
                    <input className="form-control" placeholder="your message" />
                  </div>

                  <button className="btn btn-dark col-md-2 col-xs-1">send</button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ChatBox
