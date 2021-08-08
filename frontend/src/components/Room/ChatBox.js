import React from 'react'

const ChatBox = () => {
    return (
        <div>
            <div class="card">
              <div class="card-body height3">
                <ul class="chat-list">
                  <li class="in">
                    <div class="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div class="chat-body">
                      <div class="chat-message">
                        <h5>Super Cool Name</h5>
                        <p>whats up mate</p>
                      </div>
                    </div>
                  </li>
                  <li class="out">
                    <div class="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div class="chat-body">
                      <div class="chat-message">
                        <h5>Tejas Kolwankar</h5>
                        <p>Hey Man !</p>
                      </div>
                    </div>
                  </li>
                  <li class="in">
                    <div class="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div class="chat-body">
                      <div class="chat-message">
                        <h5 class="name">Super Cool Name</h5>
                        <p>akshay is awesome</p>
                      </div>
                    </div>
                  </li>
                  <li class="out">
                    <div class="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div class="chat-body">
                      <div class="chat-message">
                        <h5>Tejas Kolwankar</h5>
                        <p>I Know Right</p>
                      </div>
                    </div>
                  </li>
                  <li class="in">
                    <div class="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div class="chat-body">
                      <div class="chat-message">
                        <h5>Super Cool Name</h5>
                        <p>LMAO!!</p>
                      </div>
                    </div>
                  </li>
                  <li class="out">
                    <div class="chat-img">
                      <img alt="Avtar" src="images.png" />
                    </div>
                    <div class="chat-body">
                      <div class="chat-message">
                        <h5>Tejas Kolwankar</h5>
                        <p>Sawaal</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="row">
                  <div class="col-md-10 col-xs-10">
                    <input class="form-control" placeholder="your message" />
                  </div>

                  <button class="btn btn-dark col-md-2 col-xs-1">send</button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ChatBox
