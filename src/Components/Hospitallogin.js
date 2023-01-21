import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Hospitallogin = () => {
  const history=useNavigate();
  const [hospitals, sethospitals] = useState();
  const [searchtxt,setSearchtxt]=useState();

  useEffect(() => {
    const fetchhospitals = async () => {
      const res = await fetch('http://localhost:5000/hospitals');
      const data = await res.json();
      sethospitals(data);
      
    };
    fetchhospitals();
  }, []);

  console.log(hospitals);

  const [inputs,setInputs]=useState({
 id:"",
  password:"",
      });
      const handleChange=(e)=>{
          setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
          }))
        }
//const docteremail=(inputs.password).toLocaleLowerCase();
//const docterid=(inputs.id).toLocaleLowerCase();
        const checkdocter=()=>{
   
          hospitals && hospitals.filter((Hospitallogin)=>{
            //console.log(inputs.email+docteremail)
console.log(Hospitallogin.email+Hospitallogin._id)
//if(Hospitallogin.email.toLocaleLowerCase().includes((inputs.email).toLocaleLowerCase()) && Hospitallogin.password.toLowerCase().includes((inputs.password).toLocaleLowerCase())){
  if(Hospitallogin.password===(inputs.password) && Hospitallogin._id===(inputs.id)){

return history(`/adminprofile/${Hospitallogin._id}`)
}else{
  console.log("no")
}
            
         
          })
          
            }
          const handleSubmit=(e)=>{
              e.preventDefault();
              
             checkdocter();
              // sendRequest().then(()=>history('/'))
              
          }
  return (
    <div>

<form className="login-container" style={{ maxWidth: 500,margin:"100px auto auto auto"}} onSubmit={handleSubmit}>
     <div class="mb-3 p-3">
     <label for="exampleInputEmail1" class="form-label" id="validationCustom01">Your ID</label>
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputs.id} onChange={handleChange} name='id'/>
   </div>
   <div class="mb-3 p-3">
   <label for="exampleInputEmail1" class="form-label">Password</label>
   <input type="password" class="form-control" id="exampleInputEmail1 validationCustom01" aria-describedby="emailHelp" value={inputs.password} onChange={handleChange} name='password'/>
 </div>
<button type="submit" class="btn btn-primary">Login</button>
</form>

    </div>
  )
}

export default Hospitallogin