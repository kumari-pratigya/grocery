
import Navbar from './Navbar'
import Footer from './Footer'
import React from 'react'

const Cart = () => {
  const cartItem= JSON.parse(localStorage.getItem("cart"));
  console.log(cartItem.name)
  
  return (
    <>
     <Navbar/> 

       <h2>{cartItem.name}</h2> 
       <img style={{width:"200px" ,height:"200px"}} src={cartItem.file.url}></img>
       <h2>{cartItem.max_quantity}</h2>
      <h2>{cartItem.measurementUnit.symbol}</h2> 
     
     {/* <h1>{cartItem.data.name}</h1> */}
     { 
        
     /* cartItem.map(post=>(
                <div className='row' style={{display:"inline-block", marginLeft:"120px",backgroundColor:"white",width:"300px",height:"auto",marginTop:"100px"}} >
           <h1> {post.name}</h1>
           <img style={{width:"200px" ,height:"200px"}} src={post.file.url}/>
            <p>max_quantity: {post.max_quantity}</p> 
           <p>measurementUnit: {post.measurementUnit.symbol}</p>
           <p>product_price: {post.product_price.actual_price}</p> */}
    
            {/* </div> */}
           
         
        {/* ))  */}
     
     
 <Footer/> 
  </>
 )
}
 export default Cart