import React from "react";  
import './React-icon.svg.png'
import 'bootstrap'
const Navbar =()=>{
    return (
   
  
       
        <nav className="navbar navbar-light bg-light mb-5">
        <div className="container">
          <a className="navbar-brand p-0" href=".">
            <img src={require("./React-icon.svg.png")} alt="logo" width="50" height="45"/>
          </a>
          <h1 className='mainHeading'>Abigail Molusi</h1>
          <h1>molusi.abigail@gmail.com</h1>
        </div>
      </nav>
   
    )
}

export default Navbar;