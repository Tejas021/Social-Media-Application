import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <div>
             <h1>Please Login</h1>
      
      <div  className="container container1 px-4 py-2">
    
        <form>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              id="username"
              name="username"
            />
          </div>
          <div className="form-group my-2">
            <input
              type="password"
              className="form-control"
              placeholder=" Password *"
              id="password"
              name="password"
            />
          </div>
          <div className="row">
          <div className="form-group col-lg-5 text-center my-3">
            <button className="btn btn-dark" id="submit1">Login</button>
          </div> 
          
         <div id="or" className="col-lg-2 "><h3>or</h3></div>
         <div className="form-group col-lg-5 my-3">
         <button className="btn btn-dark" id="submit2">Signup</button>
        </div> 
    
      </div>
        </form>
                  
       </div>
      
      
        </div>
    )
}

export default Login
