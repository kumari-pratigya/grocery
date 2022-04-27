import axios from 'axios'
import {React, Component} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// export default function Register() {
//   const [name,setName]=useState("");
//   const[email,setEmail]=useState("");
//   const[password,setPassword]=useState("");
//   const[country_code, setCountry_code]=useState("");
//   const[mobile_number,setMoblile_number]=useState("");
//   const[type,setType]=useState("");
//   const[fcm_token,setFc_token]=useState("");
//   const SubmitData=(e)=>{
//     e.preventDefault();
//     Axios.post ("http://rocket-delivery-api.herokuapp.com/user/signup",
//       {name:name},
//       {email:email},
//       {password:password},
//       {country_code:country_code},
//       {mobile_number:mobile_number},
//       {type:"customer"},
//       {fcm_token:"string"}
//       )
//       .then(res=>{
//           console.log(res);
//           })
//          .catch(err=>{
//            console.log(err);
//          })
//         }
   
//     const HandleData=(e)=>{
//       setName(e.target.value);
//       setEmail(e.target.value);
//       setPassword(e.target.value);
//       setCountry_code(e.target.value);
//       setMoblile_number(e.target.value);

//     }
  // const [data,setData] = useState v({
  //   name:"",
  //   email:"",
  //   password:"",
  //   country_code:"",
  //   mobile_number:"",
  //   type:"customer",
  //   fcm_token:"string"
  // })
  // const HandleData = (e) => {
  //   const newData={...data}
  //   newData[e.target.id]=e.target.value
  //   setData(newData)
  //   console.log(newData);  
  // }
  // const SubmitData=(e)=>{
  //   e.preventDefault();
  //   Axios.post("http://rocket-delivery-api.herokuapp.com/user/signup",
  //   {
  //     name:data.name,
  //     email:data.email,
  //     password:data.password,
  //     country_code:data.country_code,
  //     mobile_number:parseInt(data.mobile_number),
  //     type:data.type,
  //     fcm_token:data.fcm_token
  //   })
  //   .then(res=>{
  //     console.log(res);
  //   })
  //   .catch(err=>{
  //     console.log(err);
  // })
  // }
  
  
  export default class Register extends Component {
      constructor(props) {
        super(props)
          this.state = {
           name:"",
           email:"",
           password:"",
           country_code:"",
           mobile_number:"",
           type:"customer",
           fcm_token:"string"
        }
      }
    
      HandleData=(e)=>{
          this.setState({
            [e.target.name]:e.target.value
          })
     }
     SubmitData=(e)=>{
       e.preventDefault()
       console.log(this.state);
       axios.post('http://rocket-delivery-api.herokuapp.com/user/signup ' ,this.state)
       .then(response=>{
          console.log(response);
          toast.success("Succesful signup ");
         })
         .catch(error=>{
            console.log(error);
            toast.error("User already Signup ");
         

        })
         }
       
     
      render(){
        const{name,email,password,country_code,mobile_number,type,fcm_token}=this.state;
  return (
    <div>
    <Navbar/>
     <div class="RegisterForm">
    <div className='RegHeading'>
      <h1>Registration Form</h1>
      </div>
      <form onSubmit={this.SubmitData}>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" name="name" value={name} onChange={this.HandleData} id="name" class="form-control"  placeholder="Enter the Username"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" name='email' value={email} onChange={this.HandleData} id="email" class="form-control"   placeholder="Enter the Email"/>
  </div> 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" value={password} onChange={this.HandleData} id="password" class="form-control"  placeholder="Enter the password"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Country Code</label>
    <input type="text" name="country_code" value={country_code} onChange={this.HandleData} id="country_code" class="form-control"  placeholder="Enter the Country Code"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Mobile No.</label>
    <input type="number" name="mobile_number" value={mobile_number}  onChange={this.HandleData} id="mobile_number" class="form-control"  placeholder="Enter the Mobile No." />
  </div> 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
 
     <ToastContainer  className="foo" style={{marginTop: "350px" ,marginRight:"580px"}} />
    
  <Footer/>
    </div>
  )
}
}
  
