import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import Buttonclick from "./button-click.wav"
import useSound from 'use-sound';



const Login = () => {
  const history=useNavigate();
  const [users, setusers] = useState();
  const [searchtxt,setSearchtxt]=useState();

  useEffect(() => {
    const fetchusers = async () => {
      const res = await fetch('https://emergecarebackend.onrender.com/users');
      const data = await res.json();
      setusers(data);
      
    };
    fetchusers();
  }, []);

  console.log(users);

  const [inputs,setInputs]=useState({
  
    email:"",
 password:"",
  
      });
      const handleChange=(e)=>{
          setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
          }))
        }
const docteremail=(inputs.email).toLocaleLowerCase();
const docterid=(inputs.password).toLocaleLowerCase();
        const checkuser=()=>{
   
         users && users.filter((user)=>{
            console.log(inputs.email+" "+user.email)
console.log(inputs.password)
//if(Login.email.toLocaleLowerCase().includes((inputs.email).toLocaleLowerCase()) && Login.password.toLowerCase().includes((inputs.password).toLocaleLowerCase())){
  if(user.email===(inputs.email) && user.password===(inputs.password)){

//console.log("Yes")
history(`/home/${user._id}`)
}else{
  console.log("no")
}
            
         
          })
          
            }
          const handleSubmit=(e)=>{
              e.preventDefault();
              
             checkuser();
              // sendRequest().then(()=>history('/'))
              
          }

          const [audio]=useSound(Buttonclick);


  return (
    <div>

<form className="login-container"  style={{ maxWidth: 500,margin:"100px auto auto auto"}} onSubmit={handleSubmit}>
     <div class="mb-3 p-3">
     <label for="exampleInputEmail1" class="form-label" id="validationCustom01">Your Email</label>
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputs.email} onChange={handleChange} name='email'/>
   </div>
   <div class="mb-3 p-3">
   <label for="exampleInputEmail1" class="form-label">Password</label>
   <input type="password" class="form-control" id="exampleInputEmail1 validationCustom01" aria-describedby="emailHelp" value={inputs.password} onChange={handleChange} name='password'/>
 </div>
<button type="submit" class="btn btn-primary" onClick={audio}>Login</button>
</form>

    </div>
  )
}

export default Login