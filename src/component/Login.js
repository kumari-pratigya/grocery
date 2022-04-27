import axios from 'axios'
import {React, Component} from 'react'
import Footer from './Footer'
import{NavLink} from 'react-router-dom'
import Admin from './Admin'
import {ToastContainer, toast } from 'react-toastify';
// import {Navigate} from 'react-router-dom'
  import 'react-toastify/dist/ReactToastify.css';
export default  class Login extends Component {
      constructor(props) {
        super(props)
          this.state = {
           email:"",
           password:"",
           emailError:"",
           passwordError:"",
           fcm_token:"null",
           store:"null",
           login:false
        }
      }
      // componentDidMount(){
      //   let store=JSON.parse(localStorage.getItem(this.SubmitData));
      //   this.setState({store:store})
      // }
      HandleData=(e)=>{
          this.setState({
            [e.target.name]:e.target.value
          })
     }
     valid(){
      var pattern= /^[^]+@[^]+\.[a-z]{2,3}$/
      if(this.state.email===""){
        this.setState({emailError:"please fill the email"})
      }
     
    else if(!(this.state.email.match(pattern))){
    this.setState({emailError:"please fill the valid email"})
  }
     if(this.state.password===""){
       this.setState({passwordError:"please fill the password"})
      //  document.getElementById("passwordError").innerHTML="please fill the password";
     }
     
  else  if(!(this.state.password.length>=4)){
      this.setState({passwordError:"please fill the strong password"})
    }
    }
     SubmitData=(e)=>{
       e.preventDefault()
      this.valid();
       console.log(this.state);
       axios.post('http://rocket-delivery-api.herokuapp.com/user/login ' ,this.state)
       .then(response=>{
          console.log(response);
          localStorage.setItem("token",JSON.stringify({ 
            login:true,
            fcm_token:response.data.token
          }))
          this.setState({login:true})
           toast.success("Succesful login ");
          //  this.setState({
          //   fcm_token:response.data.token
          // })
         })
         .catch(error=>{
            console.log(error);
            //  toast.error("User have not signup ");
        })
         }    
      render(){
        const{email,password}=this.state;
       
  return (
    <div>
    {/* <Navbar data={this.state}/> */}
  
    {!this.state.login?
      <div className="LoginForm">
    <div className='LoginHeading'>
      <h1>Login Form</h1>
      </div>
      <form onSubmit={this.SubmitData}>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="text" name='email' value={email} onChange={this.HandleData} id="email" class="form-control"   placeholder="Enter the Email"/>
    <p style={{color:"red"}} className='emailError'>{this.state.emailError}</p>
  </div> 
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" value={password} onChange={this.HandleData} id="password" class="form-control"  placeholder="Enter the password"/>
    <p style={{color:"red"}} className='passwordError'>{this.state.passwordError}</p>
  </div>
  <div className="d-grid gap-1" style={{marginTop:"30px" }}> 
  <button type="submit"  className="btn btn-primary btn-lg rounded-pill" >Login</button>
  </div>
</form>
  
<div className="d-grid gap-1" style={{marginTop:"30px" }}> 
<NavLink to="/Register">
    <button type="button"  className="btn btn-success btn-lg rounded-pill" > Create New account</button>
</NavLink>
</div> 
</div>

:
  <>
  
   <Admin data={this.state}/>

</>
/* <div>
  <Admin data={this.state}/>
</div> */}


<ToastContainer className="foo" style={{marginTop: "380px" ,marginRight:"580px"}}/> 
  <Footer/>
    </div>
  )
}
}

