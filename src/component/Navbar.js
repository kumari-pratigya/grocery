import React from 'react'
import{NavLink} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg  ">
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  <a className="navbar-brand" href="#">E-commerce</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <NavLink to="/">
      <li className="nav-item active">
        <a className="nav-link-1" href="/" >Home </a>
      </li></NavLink>
    {/* {
     ! localStorage.getItem('login')==="null"? */}
     <div>
     {/* <NavLink to="/Logout">
      <li className="nav-item active ">
      <a className="nav-link-2"  href="#">Logout </a>
      </li>
      </NavLink>  */}
      </div>
        {/* :   */}
        <div>
        <NavLink to="/Login">
      <li className="nav-item">
        <a className="nav-link-3" href="#">Login</a>
      </li>
      </NavLink>
      
      </div>
       {/* }  */}
      <NavLink to="/Cart">
      <li className="nav-item">
      <span style={{fontStyle:"2rem"}}> <a className="nav-link-3" href="#"> <i class="bi bi-cart-check-fill" style={{fontSize:"22px"}}></i> </a></span> <span style={{padding:"0 3px",backgroundColor:"red",color:"white",top:"-15px",borderRadius:"5px", fontWeight:"bold",position:"relative"}}>0</span>
      </li>
      </NavLink>
    </ul>
  </div>
</nav>
    </>
  )
}
