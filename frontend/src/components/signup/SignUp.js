import React from 'react'
import { useState,useContext } from 'react'
import Navbar from '../utilities/Navbar'
import { Redirect,Link } from 'react-router-dom'
import {UserContext} from "../../UserContext"
import "./SignUp.css"

const SignUp = () => {

const {user,setUser}=useContext(UserContext)
const [details,setDetails]=useState({
  name:'',
  email:'',
  password:'',

})

const [errors,setErrors]=useState({
  usernameError:'',
  emailError:'',
  passwordError:''
})

const submitHandler= async (e)=>{
  console.log('click')
  e.preventDefault();
  setErrors(errors);

try{
  const res = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({name:details.name,email:details.email,password:details.password}),
                headers: { 'Content-Type': 'application/json' }
            });
            const data= await res.json()
   
          if (data.errors) {
            setErrors({
              emailError:data.errors.email,
              usernameError:data.errors.name,
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
    <h1 className="shead">Signup</h1>

<div  className="container signupcontainer mt-5 px-5 pt-3">

    <form onSubmit={e=>submitHandler(e)}>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="College ID"
          id="clg_ID"
          name="clg_ID"
          // value={}
          onChange={e=>e.target.value}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          id="username"
          name="name"
          value={details.name}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                name: e.target.value
            }));
          }}
        />
      </div>
      <div className="text-danger" type="password">{errors.usernameError}</div>
      <div className="form-group my-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email ID"
          id="email"
          name="email"
          value={details.email}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                email: e.target.value
            }));
          }}
        />
      </div>
      <div className="text-danger" type="password">{errors.emailError}</div>
      <input
          type="date"
          className="form-control"
          placeholder="Date of Birth"
          id="age"
          name="age"
          // value={details.date}
          onChange={e=>e.target.value}
        />
      <div className="form-group my-3">
        <input
          type="password"
          className="form-control"
          placeholder=" Password *"
          id="password1"
          name="password1"
          value={details.password}
          onChange={(e)=>{
            setDetails(prevState => ({
                ...prevState,
                password: e.target.value
            }));
          }}
        />
      </div>
      <div className="text-danger" type="password">{errors.passwordError}</div>
      <div className="form-group my-2">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password *"
          id="password2"
          name="password2"
          // value={details.confirm_password}
          onChange={e=>e.target.value}
        />
      </div>
      <div className="form-group my-3">
        <button type='submit' className="btn btn-dark signupsubmit" >Signup</button>
      </div> 
       
    </form>
              
   </div>
    
        </div>
    )
}

export default SignUp
