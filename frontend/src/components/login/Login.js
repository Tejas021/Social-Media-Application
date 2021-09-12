import React from 'react'
import { useState,useContext } from 'react'
import Navbar from '../utilities/Navbar'
import { Redirect } from 'react-router'
import "./Login.css"
import {UserContext} from "../../UserContext"

const Login = () => {

  const {user,setUser}=useContext(UserContext)
const [details,setDetails]=useState({
  email:'',
  password:'',

})

const [errors,setErrors]=useState({
  usernameError:'',
  passwordError:''
})

const submitHandler= async (e)=>{
  console.log('click')
  e.preventDefault();
  setErrors(errors);

try{
  const res = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                // credentials: 'include',
                body: JSON.stringify({email:details.email,password:details.password}),
                headers: { 'Content-Type': 'application/json' }
            });

            const data= await res.json()
            console.log(details.email)

   
          if (data.errors) {
            setErrors({
              emailError:data.errors.email,
              passwordError:data.errors.password

            })

        }
        if (data.user) {
            setUser(data.user)
        }
      }  catch(error){
        console.log(error)
      }
}

 if (user) {
        return <Redirect to="/"/>
    }

    return (
        <div>
            <Navbar/>
            <h1 class="loginheading">Please Login</h1>
      
  <div  class="logincontainer mx-auto px-4 py-md-2">

    <form class="loginform" onSubmit={e=>submitHandler(e)}>
      <div class="form-group my-3">
        <input
          type="email"
          class="form-control"
          placeholder="email"
          id="username"
          name="username"
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                email: e.target.value
            }));
          }}
        />
      </div>
      <div className="text-danger" type="password">{errors.emailError}</div>
      <div class="form-group my-2">
        <input
          type="password"
          class="form-control"
          placeholder=" Password *"
          id="password"
          name="password"
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                password: e.target.value
            }));
          }}
        />
      </div>
      <div className="text-danger" type="password">{errors.passwordError}</div>
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
