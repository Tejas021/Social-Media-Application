import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-trans fixed-top" >
      <div className="container">
        <a className="navbar-brand" href="/"><h3>
            <span className="text-warning">Yata</span
            ><span className="text-light">gram</span>
          </h3></a
        >
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
          <form className="d-flex">
            <input
              className="form-control ms-md-5 m-xs-2"
              type="search"
         
              aria-label="Search"
            />
          
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
             
                <Link className="nav-link active mx-3" to="/profile"><i className="far fa-user-circle"></i></Link>
            </li>
           
           
          </ul>
        </div>
      </div>
    </nav>
        </div>
       
    )
}

export default Navbar