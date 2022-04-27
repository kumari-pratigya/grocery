import React from 'react'
import {NavLink} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
function Logout() {
    console.log();
    localStorage.removeItem("token");
  return (
      <React.Fragment>
    <div className='logout'>
    <Navbar/>
      <h1 style={{marginTop:"90px"}}>You have been logged out</h1>
    {/* <NavLink to="/Login"> <button>LogIn Again</button></NavLink> */}
    </div>
    <Footer/>
    </React.Fragment>
  )
}

export default Logout
