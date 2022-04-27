import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider';
import Footer  from './Footer';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <Navbar/>
      <div style={{display:"inline-flex"}} className='container-fluid bg-white'>
      <div style={{border:"none"}} className='card vegetable mt-3  mx-5'>
      <NavLink to="/vegetables">
      <img  className=" card-img" style={{width:"140px",height:"80px"}} src="vegetable.jpg"/>
      <div  className="card-body ">
        <a className="link-dark">Vegetables</a>
        </div>
    </NavLink>
    </div>
    <div  style={{border:"none"}} className=' card Fruits mt-3 mx-5'>
    <NavLink to="/Fruits">
    <img  className=" card-img" style={{width:"140px",height:"80px"}} src="fruits.webp"/>
    <div class="card-body">
    <a className="link-dark"> Fruits</a>
    </div>
    </NavLink>
    </div>
    <div  style={{border:"none"}} className=' card DryFruits mt-3 mx-5'>
    <NavLink to="/DryFruits">
    <img  className=" card-img" style={{width:"140px",height:"80px"}} src="dryfruits.jpg"/>
    <div class="card-body">
    <a className="link-dark "> Dry Fruits</a>
    </div>
    </NavLink>
    </div>
    <div  style={{border:"none"}} className=' card DryFruits mt-3 mx-5'>
    <NavLink to="/DairyProduct">
    <img  className=" card-img"  style={{width:"140px",height:"80px"}} src="dairy.cms"/>
    <div class="card-body">
    <a  className="link-dark text-decoration-none ">Dairy Products</a>
    </div>
    </NavLink>
    </div>
    
    </div>
        <Slider/>
        <Footer/>
       
    </div>
  )
}
