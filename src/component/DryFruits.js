import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
const DryFruits = () => {
    const[posts,setPost]=useState([])
    useEffect(()=>{
        axios.get(`http://rocket-delivery-api.herokuapp.com/user/product/list?category_id=1&sub_category_id=3&page=0&limit=10
        `)   
        .then(res=>{
            console.log(res);
             var data=res.data.products;
            setPost(data);
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
   

  return (
    <div>
    <Navbar/>
         {
             posts.map(post=>(
                 <div className='row' style={{display:"inline-block", marginLeft:"120px",backgroundColor:"white",width:"300px",height:"auto",marginTop:"100px"}} >
                
            {/* <h1>subCategoryName: {post.subCategoryName}</h1> */}
            <h1> {post.name}</h1>
            <img  style={{width:"200px" ,height:"200px"}} src={post.file.url}/>
             <p>max_quantity: {post.max_quantity}</p> 
            <p>measurementUnit: {post.measurementUnit.symbol}</p>
            <p>product_price: {post.product_price.actual_price}</p>
            <button  className="btn btn-primary">Buy</button>
            </div>
            
          
         ))
         } 
         <Footer/>
   
      

        
    </div>
  )
}

export default DryFruits

