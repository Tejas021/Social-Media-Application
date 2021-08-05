import React from 'react'
import "./Signup.css"

const Signup = () => {
    return (
        <div>
                    
<h1>Signup</h1>

<div  className="container px-5 pt-5">

    <form>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="College ID"
          id="clg_ID"
          name="clg_ID"
        />
      </div>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          id="username"
          name="username"
        />
      </div>
      <div className="form-group my-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email ID"
          id="email"
          name="email"
        />
      </div>
      <input
          type="date"
          className="form-control"
          placeholder="Date of Birth"
          id="age"
          name="age"
        />
      <div className="form-group my-3">
        <input
          type="password"
          className="form-control"
          placeholder=" Password *"
          id="password1"
          name="password1"
        />
      </div>
      <div className="form-group my-2">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password *"
          id="password2"
          name="password2"
        />
      </div>
      <div className="form-group my-3">
        <button className="btn btn-dark" id="submit">Signup</button>
      </div> 
       
    </form>
              
   </div>
  
        </div>
    )
}

export default Signup
