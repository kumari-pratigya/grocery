import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLog from './NavLog'
function Admin(props) {
    console.log(props)
    
  return (
    <div className='admin'>
    <NavLog/>
      <h1 style={{marginTop:"90px"}}>Welcome </h1>
      <h1 style={{marginTop:"20px"}}>  {props.data.email}</h1>
      <p>Only Admin can see page</p>
        {/* <NavLink to="/Logout"> <button>LogOut </button></NavLink> */}
    </div>
  )
}

export default Admin
