import React, { useState,useEffect } from 'react'

 import axios from "axios"
 import { useNavigate,useParams,Link } from 'react-router-dom'

 const Bookbed = () => {
    const id=useParams().id;
   const history=useNavigate();
   const [user,setuser]=useState({
    email:"",
    id:""
  });
   const [hospital,sethospital]=useState();
   const [inputs,setInputs]=useState({
    userid:"",
    email:"",
    name: "",
    address:"",
    state:"",
    district:"",
  contactnumber:"",
   age:"",
   bedtype:"",



   });

   useEffect(() => {
    const fetchhospitals = async () => {
        const res = await fetch(`https://emergecarebackend.onrender.com/hospitals/${id}`);
        const data = await res.json();
        sethospital(data);
        
      };
      fetchhospitals();
      
    }, []);
 // console.log(hospital);

  const fetchuser = async () => {
    const res = await fetch(`https://emergecarebackend.onrender.com/users/${inputs.userid}`);
    const data = await res.json();
    setuser(data);

   //loginusers();

  };


   
// console.log(inputs.userid)
// console.log(inputs.email)
// console.log(users.email)
// console.log(users._id)


   



   const sendUser=async()=>{
    await axios.post(`https://emergecarebackend.onrender.com/users/userbookbed/${user._id}`,{
      hospitalname:String(hospital.name),
      date:String(Date.now()),
      bedtype:String(inputs.bedtype),
    address:String(hospital.address),
    contactnumber:String(hospital.phnumber),
    charge:String(hospital.generalbedscharge),

    }).then(res=>res.data).then(console.log("user submitted to dashboard")).then(()=>history("/success"));
   }

   const loginuser=()=>{
    if(user.email===inputs.email && user._id===inputs.userid){
      
      //console.log("matched")
      sendUser();
     
    }else{
      console.log("unmatched")
    }
       }

      
  //console.log(user);
   //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
   const [checked,setChecked]=useState(false);
   const handleChange=(e)=>{
     setInputs((prevState)=>({
 ...prevState,
 [e.target.name]:e.target.value
     }))
   }

  
   const sendRequest=async()=>{
     await axios.post(`https://emergecarebackend.onrender.com/hospitals/beds/${id}`,{
       name:String(inputs.name),
       state:String(inputs.state),
       district:String(inputs.district),
       age:String(inputs.age),
       bedtype:String(inputs.bedtype),
     address:String(inputs.address),
     contactnumber:String(inputs.contactnumber),
     charge:String(hospital.generalbedscharge),
     }).then(res=>res.data);

   }
   //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(inputs,checked);
     sendRequest();
     fetchuser();
    loginuser()
    
     

   }
   return (
     <div>
        
        <h1  className='text-center bg-warning text-white'>Fill the form with Accurate Details of Your Hospital</h1>
         <form className='p-4 form-container' onSubmit={handleSubmit}>
        
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Patient's Name</label>
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputs.name} onChange={handleChange} name='name'/>
   
  </div>
  <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">User ID</label>
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputs.userid} onChange={handleChange} name='userid'/>
   
  </div>
  <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">User Email</label>
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputs.email} onChange={handleChange} name='email'/>
   
  </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">State</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.state} onChange={handleChange} name='state'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">District</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.district} onChange={handleChange} name='district'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Full Adress</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.address} onChange={handleChange} name='address'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Contact Number</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.contactnumber} onChange={handleChange} name='contactnumber'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">patient's age</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.age} onChange={handleChange} name='age'/>
   </div>
   <div class="form-group mb-3">
    <label for="exampleFormControlSelect1">select type of bed</label>
    <select style={{fontSize:"20px"}} id="inputState" className="form-select"  name="bedtype" value={inputs.bedtype} onChange={handleChange}>
              <option>Select</option>
              <option>Covid Bed</option>
              <option>ICU Bed</option>
              <option>CCU Bed</option>
              <option>Dengue Bed</option>
              <option>Malaria Bed</option>
              <option>Burn Bed</option>
              <option>General Beds</option>
              <option>Cabin</option>
            </select>
  </div>
    
   
   <button type="submit" class="btn btn-primary">Submit</button>
 </form>
        
      

         </div>
   )
 }

 export default Bookbed