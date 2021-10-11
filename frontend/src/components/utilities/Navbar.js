import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {UserContext} from "../../UserContext"
import SearchModal from '../home/search/SearchModal'

const Navbar = () => {

  const {user}=useContext(UserContext)
    return (
        <div>
          <SearchModal/>
             <nav className="navbar navbar-expand-lg navbar-dark bg-trans fixed-top" >
      <div className="container">
        <Link className="navbar-brand" to="/"><h3>
            <span className="text-warning">Yata</span>
            <span className="text-light">gram</span>
          </h3></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
           
          
            <i type="button" className="ms-5 fa fa-fw fa-search" data-bs-toggle="modal" data-bs-target="#exampleModal" ></i>

          
       
{user?<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
      
              <Link className="nav-link active mx-3" to="/"><i className=" fa fa-fw fa-home"></i></Link>
            </li>
            <li className="nav-item">
            
              <Link className="nav-link active mx-3" to="/chat"><i className="far fa-comment "></i></Link>
          </li>
            <li className="nav-item">
               
                <Link className="nav-link active mx-3" to="/about"><i className="fa fa-info-circle"></i></Link>
            </li>

            <li className="nav-item">
             
                <Link className="nav-link active mx-3" to={`/my-profile/`}><i className="far fa-user-circle"></i></Link>
            </li>
            
           
         <li className="nav-item text-warning mt-2"><h5>{user.name}</h5></li>
           
          </ul>:<></>}
          
        </div>
      </div>
    </nav>
        </div>
       
    )
}

export default Navbar