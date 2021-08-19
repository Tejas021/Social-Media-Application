import React from 'react'
import Navbar from '../utilities/Navbar'

const Chat = () => {
    return (
        <div>
            <Navbar/>
            <div className="container" style={{"marginTop":"10%"}}>
        <div className="row">
            <div className="col-md-6">
                <main className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal text-light">Create Room</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Room Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Create Room</button>
                    </form>
                </main>
            </div>
            <div className="col-md-6">
                <h2 className="text-light">Join Room</h2>
                <div className="row">
                    <div className="col-8 border bg-warning">
                        Room 1
                    </div>
                    <div className="col-4 border bg-warning">
                        <button type="button" className="btn btn-danger">Join Room</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 border bg-warning">
                        Room 2
                    </div>
                    <div className="col-4 border bg-warning">
                        <button type="button" className="btn btn-danger">Join Room</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 border bg-warning">
                        Room 3
                    </div>
                    <div className="col-4 border bg-warning">
                        <button type="button" className="btn btn-danger">Join Room</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 border bg-warning">
                        Room 4
                    </div>
                    <div className="col-4 border bg-warning">
                        <button type="button" className="btn btn-danger">Join Room</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 border bg-warning">
                        Room 5
                    </div>
                    <div className="col-4 border bg-warning">
                        <button type="button" className="btn btn-danger">Join Room</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
        </div>
    )
}

export default Chat
