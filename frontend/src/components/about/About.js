import React from 'react'

const About = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand ms-3" href="/">Navbar</a>
        <form class="d-flex ms-4">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-4 mb-lg-0">
            <li class="nav-item px-2">
              <a href="/" class="fa fa-home"></a>
            
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="/">Link</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="/">Link</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="/">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid bg-warning p-5" style={{"backgroundImage": "url(./back.jpg)"}}>
        
      <div class="container">
        <div class="row">
          <div class="col-md-6 ">
            <div class="bg-dark my-3 text-light p-5 left-border">
              <h1 class="text-warning">About Us</h1>
              sdafsadf<br />sdfasd sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
              sdafsadf<br />
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="bg-dark my-3 text-light p-5 left-border">
              <h1 class="text-warning">Objective</h1>
              sdafsfad
            </div>
            <div class="bg-dark my-3 text-light p-5 left-border">
              <h1 class="text-warning">Yatagram</h1>
              sdfsadf
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container bg-dark p-5">
        <h1 class="text-warning p-3">Our Team</h1>
      <div class="row">
        <div class="col-md-3 p-3">
            <div class="card bg-warning p-2" >
                <img src="images.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4>Tejas Kolwankar</h4>
                    <p> Roll no : 29 </p>
                </div>
              </div>
        </div>
        <div class="col-md-3 p-3">
            <div class="card bg-warning p-2" >
                <img src="images.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4>Tejas Kolwankar</h4>
                    <p> Roll no : 29 </p>
                </div>
              </div>
        </div>
        <div class="col-md-3 p-3">
            <div class="card bg-warning p-2"  >
                <img src="images.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4>Tejas Kolwankar</h4>
                    <p> Roll no : 29 </p>
                </div>
              </div>
        </div>
        <div class="col-md-3 p-3">
            <div class="card bg-warning p-2" >
                <img src="images.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4>Tejas Kolwankar</h4>
                    <p> Roll no : 29 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  
    )
}

export default About
