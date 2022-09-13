import React from "react"
import logo from '../assets/logo.png'
export const HomeLayout=(props)=>{
    return(
    <>
   <nav className="navbar navbar-dark bg-dark mb-5">
  <div className="container-fluid">
    <span className="navbar-brand mx-5 my-1 h1"><img src={logo} width="35px" height="35px" alt="TodoLogo" /></span>
  </div>
    </nav>
    {props.children}
    <nav className="navbar navbar-dark bg-dark mt-5">
  <div className="container-fluid">
    <span className="navbar-brand mx-5 my-1 h1"><img src={logo} width="35px" height="35px" alt="TodoLogo" /></span>
  </div>
    </nav>

    </>
    )
}