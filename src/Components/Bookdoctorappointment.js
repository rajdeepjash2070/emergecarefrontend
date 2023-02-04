import React, { useState,useEffect } from 'react'

 import axios from "axios"
 import { useNavigate,useParams } from 'react-router-dom'
 import Buttonclick from "./button-click.wav"
 import useSound from 'use-sound';


 const Bookdoctorappointment = () => {


  const id=useParams().id;

  let d = new Date().toString();
  console.log(d);
   const history=useNavigate();
   const [docters,setdocters]=useState();
   const [inputs,setInputs]=useState({
    userid:"",
    name:"",
    email:"",
    address:"",
    ctnumber:"",
    age:"",
    gender:"",
    symptoms1:"",symptoms2:"",symptoms3:"",symptoms4:"",symptoms5:"",
  height:"",
  weight:"",
  state:"",
  district:"",
  pin:"",
  bp:"",
  sugerlevel:"",
  timeslot:"",
  payment:"",
    comment:"",
   });
const [users,setusers]=useState({
  email:"",
  id:""
});
  //  const [users,setusers]=useState({
  //   doctername:"",
  //   address:"",
  //   time:"",
  //   fees:"",
  //   date:"",
  //   ctnumber:"",
  //   symptoms1:"",
  //   symptoms2:"",
  //   symptoms3:"",
  //   symptoms4:"",
  //   symptoms5:"",
  //  });



   useEffect(() => {
    const fetchdocters = async () => {
        const res = await fetch(`https://emergecarebackend.onrender.com/docters/${id}`);
        const data = await res.json();
        setdocters(data);
        
      };
      fetchdocters();
      
    }, []);

//check users
    
const loginid=(inputs.userid).toString();
  const fetchusers = async () => {
    const res = await fetch(`https://emergecarebackend.onrender.com/users/${inputs.userid}`);
    const data = await res.json();
    setusers(data);
    console.log("IN the fetch users function")
   //loginusers();

  };

    console.log(docters);
    console.log(users);
// console.log(inputs.userid)
// console.log(inputs.email)
// console.log(users.email)
// console.log(users._id)


   const loginuser=()=>{
if(users.email===inputs.email && users._id===inputs.userid){
  
  console.log("matched")
  sendUser();
}else{
  console.log("unmatched")
}
   }

   //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
   const [checked,setChecked]=useState(false);
   const handleChange=(e)=>{
     setInputs((prevState)=>({
 ...prevState,
 [e.target.name]:e.target.value
     }))
   
   }
console.log(inputs)
   const sendUser=async()=>{
    await axios.post(`https://emergecarebackend.onrender.com/users/${users._id}`,{
      
       doctername:String(docters.name),
       appointmentdate:String(d),
      address:String(docters.address),
      ctnumber:String(docters.phnumber),
      time:String(docters.time),
      fees:String(docters.fees),
      symptoms1:String(inputs.symptoms1),
      symptoms2:String(inputs.symptoms2),
      symptoms3:String(inputs.symptoms3),
      symptoms4:String(inputs.symptoms4),
      symptoms5:String(inputs.symptoms5),

    }).then(res=>res.data).then(console.log("user submitted to dashboard")).then(()=>history("/success"));
   }
   const sendRequest=async()=>{
     await axios.post(`https://emergecarebackend.onrender.com/docters/${id}`,{
      userid:String(inputs.userid),
       name:String(inputs.name),
       state:String(inputs.state),
       district:String(inputs.district),
     address:String(inputs.address),
     ctnumber:String(inputs.ctnumber),
     email:String(inputs.email),
     age:String(inputs.age),
     gender:String(inputs.gender),
     symptoms1:String(inputs.symptoms1),
     symptoms2:String(inputs.symptoms2),
     symptoms3:String(inputs.symptoms3),
     symptoms4:String(inputs.symptoms4),
     symptoms5:String(inputs.symptoms5),
     height:String(inputs.height),
     weight:String(inputs.weight),
     pin:String(inputs.pin),
     bp:String(inputs.bp),
     sugerlevel:String(inputs.sugerlevel),
     payment:String(inputs.payment),
     comment:String(inputs.comment)

     }).then(res=>res.data);
   }

  
  
   //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
   const handleSubmit=(e)=>{
    console.log("in the handle sub,it function")
     e.preventDefault();
     sendRequest();
   fetchusers();
   loginuser();


   //checkuser();
     
    //.then(()=>history('/home'))
   }


   const [audio]=useSound(Buttonclick);


   return (
     <div>
        
        <h1  className='text-center bg-warning text-white'>Fill the form with Accurate Details of the Patient</h1>
        

         <form className='p-4 form-container' onSubmit={handleSubmit}>
         <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Your User ID</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.userid} onChange={handleChange} name='userid'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Patient Name</label>
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputs.name} onChange={handleChange} name='name'/>
   
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
     <label for="exampleInputEmail1" class="form-label">Full address</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.address} onChange={handleChange} name='address'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Patient's Contact Number</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.ctnumber} onChange={handleChange} name='ctnumber'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Patient's  Email</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.email} onChange={handleChange} name='email'/>

   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Patient's Age</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.age} onChange={handleChange} name='age'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Patient's Gender</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.gender} onChange={handleChange} name='gender'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Patient's height</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.height} onChange={handleChange} name='height'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Patient's Weight</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.weight} onChange={handleChange} name='weight'/>
   </div>

   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Symptom No.1</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.symptoms1} onChange={handleChange} name='symptoms1'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Symptom No.2</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.symptoms2} onChange={handleChange} name='symptoms2'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Symptom No.3</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.symptoms3} onChange={handleChange} name='symptoms3'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Symptom No.4</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.symptoms4} onChange={handleChange} name='symptoms4'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Symptom No.5</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.symptoms5} onChange={handleChange} name='symptoms5'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Pateint's Area Pin Code</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.pin} onChange={handleChange} name='pin'/>
   </div>

   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">IF The Patient has his/her B.P Level Measured then give it</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.bp} onChange={handleChange} name='bp'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">IF The Patient has his/her Suger Level Measured then give it</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.sugerlevel} onChange={handleChange} name='sugerlevel'/>
   </div>

   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Payment</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.payment} onChange={handleChange} name='payment'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">If you have anything others to say the docter </label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.comment} onChange={handleChange} name='comment'/>
   </div>
   {/* state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds */}
   
   <button type="submit" class="btn btn-primary" onClick={audio}>Submit</button>
 </form>
        
      <div className='symptoms-container'>


      </div>

         </div>
   )
 }

 export default Bookdoctorappointment