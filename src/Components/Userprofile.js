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


const Userprofile = () => {
   
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
              const res = await fetch(`http://localhost:5000/users/${id}`);
              const data = await res.json();
              setInputs(data);
              
            };
            fetchdocters();
          }, []);
          console.log(inputs);


  return (


<div class="container">
<h1>Your ID: {id}</h1>
<div>
  <div>
      <div>
          <div className='row mt-4'>
              <a href="#" style={{fontSize:"200px",backgroundColor:"pink",borderRadius:"15px",boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px"}}>
              <h1 className='text-center mt-4'>{inputs.name}</h1>
              <p className='text-center mt-4' style={{fontSize:"35px",color:"black"}}>Email- {inputs.email}</p>
              <p className='text-center mt-4' style={{fontSize:"35px",color:"black"}}> Password- {inputs.password}</p>

              <div className="col-md-6" style={{marginTop:"-200px"}}>
              <i class="fa-solid fa-user"></i>
              </div>
                  {/* <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/> */}
              </a>
              
              
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
<div className='col-md-4'><h1>Reffered Test</h1></div>
<div className='col-md-4'><h1> Detected Diseases</h1></div>
<div className='col-md-4'><h1>Symptoms</h1></div>
  </div>
  <hr/>
<div className='appointments'>
<h1><a href='#'>Your Appointments</a></h1>
{inputs.appointment?.map((docter)=>(
    <div className="row" key={docter._id}>
   <p>Docter Name: {docter.doctername}</p>
    <p>Docter Contact Number: {docter.contactnumber}</p>
    <p>Time of Appointment{docter.time}</p>
   <p>Fees: {docter.fees}</p>
   <p>Docter's Chamber Address: {docter.address}</p>
   <hr/>
    </div>
   
  ))}

</div>
 </div>






  )
}

export default Userprofile