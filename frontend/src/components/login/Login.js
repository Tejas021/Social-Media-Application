import React from 'react'
import Navbar from '../utilities/Navbar'
import "./Login.css"

const Login = () => {
    return (
        <div>
            <Navbar/>
            <h1 class="loginheading">Please Login</h1>
      
  <div  class="logincontainer mx-auto px-4 py-md-2">

    <form class="loginform">
      <div class="form-group my-3">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          id="username"
          name="username"
        />
      </div>
      <div class="form-group my-2">
        <input
          type="password"
          class="form-control"
          placeholder=" Password *"
          id="password"
          name="password"
        />
      </div>
      <div class="row">
      <div class="form-group col-lg-5 text-center my-3 ">
        <button class="loginsubmit btn btn-dark">Login</button>
      </div> 
      
     <div  class="or col-lg-2 my-3"><h3>or</h3></div>
     <div class="form-group col-lg-5 my-3">
     <button class="loginsubmit btn btn-dark sgnpbtn">Signup</button>
    </div> 

  </div>
    </form>
              
   </div>
        </div>
    )
}

export default Login
