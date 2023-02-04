import React from 'react'
import "./style.css"
import "./responsive.css"
import "./Userprofile.css"
import { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import useGeoLocation from "./LocationGeo";
import haversine from 'haversine-distance'
import { Link } from "react-router-dom";
import Buttonclick from "./button-click.wav"
import useSound from 'use-sound';
import Userprofileimg from "./Userprofileimg.png"

const Userdashboard = () => {
   
    const [checked,setChecked]=useState(false);
    const [inputs,setInputs]=useState({});
    const [docters, setdocters] = useState();
    const location = useGeoLocation();
const [audio]=useSound(Buttonclick);
  const history=useNavigate();
      const id=useParams().id;
      console.log(id);
      useEffect(() => {
          const fetchdocters = async () => {
              const res = await fetch(`https://emergecarebackend.onrender.com/users/${id}`);
              const data = await res.json();
              setInputs(data);
              
            };
            fetchdocters();
          }, []);
          console.log(inputs);


  return (


<div class="container">
<header class="header">

<a href="#" class="logo"> <i class="fas fa-heartbeat"></i> <span className='mt-2'>Hi, User</span></a>

<nav class="navbar">
    <a href={`/home/${id}`}>home</a>
    <a href="#about">about</a>
    <a href="#review">review</a>
    <a href="#blogs">blogs</a>
</nav>

<div id="menu-btn" class="fas fa-bars"></div>

</header>
<h2 className='text-center' style={{marginTop:"120px"}}>Hey {inputs.name} Your ID is: {id}</h2>

<li class="nav-item dropdown" style={{height:"50px",width:"170px",marginLeft:"-100px",marginTop:"-50px"}}>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}> <i class="fa-solid fa-notes-medical" style={{fontSize:"25px"}}></i> Navigate to
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{width:"130px"}}>
          <a class="dropdown-item text-center mt-2" href={`/home/${id}`} style={{marginLeft:"0px"}}>Home</a>
          <a class="dropdown-item text-center mt-2" href={`/emergency/${id}`} style={{marginLeft:"0px"}}>Emergency</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-center mt-2" href="#" style={{marginLeft:"0px"}}>About</a>
          <a class="dropdown-item text-center mt-2" href="#" style={{marginLeft:"0px"}}>Contact</a>
        </div>
      </li>

     
<div>
  <div>
      <div>
      <hr/>
          <div className='row mt-4'>
       
          <div className="col-md-6">
              <img src={Userprofileimg}/>
              </div>
              <div className='col-md-6' style={{marginTop:"100px"}}>
              <h1 className='text-lefts mt-4'>{inputs.name}</h1>
              <p className='text-left mt-4' style={{fontSize:"18px",color:"black"}}>Email- {inputs.email}</p>
              <p className='text-left mt-4' style={{fontSize:"18px",color:"black"}}>Address- {inputs.address}</p>
</div>
              
                  {/* <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/> */}
           
              
              
          </div>

          
      </div>
  </div>
 <hr/>
              <h1 className='m-4'>Your Profile Details</h1>
              <div class="row">
                  <div class="bio-row">
                      <p><span>Your Name </span>: {inputs.name}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Your Address </span>: {inputs.address}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Your State</span>: {inputs.state}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Your District</span>: {inputs.district}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Your Area Pin Code </span>: {inputs.pin}</p>
                  </div>
        
                  <div class="bio-row">
                      <p><span>Your age </span>: {inputs.age}</p>
                  </div>
        
                  <div class="bio-row">
                      <p><span>Mobile Number </span>: (+91) {inputs.ctnumber}</p>
                  </div>
            
          
     

<hr/>
   
    <h1 className='m-4'>other Details</h1>
              <div class="row">
                  <div class="bio-row">
                      <p><span>Your height </span>: {inputs.height}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Your Weight </span>: {inputs.weight}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Your Blood Pressure in mm/hg</span>: {inputs.bp}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Your Suger Level</span>: {inputs.sugerlevel}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Your Gender </span>: {inputs.gender}</p>
                  </div>
        
         
      
      </div>
      <div>
          
          </div>
      </div>
  </div>
<hr/>

  <div className='row'>
<div className='col-md-6'><h1>Reffered Test</h1></div>
<div className='col-md-6'><h1> Detected Diseases</h1></div>

  </div>
  <hr/>
<div className='appointments'>
<h1><a href='#'>Your Reserved Beds</a></h1>
{inputs.bedsarr?.map((bed)=>(
    <div className="row" key={bed._id}>
   <p>Hospital Name: {bed.hospitalname}</p>
    <p>Hospital Contact Number: {bed.contactnumber}</p>
   <p>Fees: {bed.charge}</p>
   <p>Type of Bed: {bed.bedtype}</p>
   <p>Hospital Address: {bed.address}</p>
   <hr/>
    </div>
   
  ))}

</div>
 </div>






  )
}

export default Userdashboard