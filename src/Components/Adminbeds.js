import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import useGeoLocation from "./LocationGeo";
import haversine from 'haversine-distance'
import { Link } from "react-router-dom";
import Buttonclick from "./button-click.wav"
import useSound from 'use-sound';



const Adminbeds = () => {
  const [inputs,setInputs]=useState({});
  const id=useParams().id;

  useEffect(() => {
    const fetchbeds = async () => {
        const res = await fetch(`https://emergecarebackend.onrender.com/hospitals/${id}`);
        const data = await res.json();
        setInputs(data);
        
      };
      fetchbeds();
    }, []);
    console.log(inputs);
  return (
    <div>
<div className='row'>
<div class="card col-md-3 mt-2" >
  <div class="card-body">
    <h5 class="card-title">COVID BEDS</h5>
   <p>24 available</p>
    
  </div>
</div>
<div class="card card col-md-3 mt-2">
  <div class="card-body">
    <h5 class="card-title">ICUs</h5>
   <p>14 available</p>
    
  </div>
</div>
<div class="card card col-md-3 mt-2">
  <div class="card-body">
    <h5 class="card-title">CCUs</h5>
   <p>12 available</p>
    
  </div>
</div>
<div class="card card col-md-3 mt-2">
  <div class="card-body">
    <h5 class="card-title">Dengue Beds</h5>
    <p>20 available</p>
    
  </div>
</div>
<div class="card card col-md-3 mt-2">
  <div class="card-body">
    <h5 class="card-title">Malaria Beds</h5>
    <p>12 available</p>
    
  </div>
</div>
<div class="card card col-md-3 mt-2">
  <div class="card-body">
    <h5 class="card-title">Burn Beds</h5>
   <p>10 available</p>
    
  </div>
</div>
<div class="card card col-md-3 mt-2">
  <div class="card-body">
    <h5 class="card-title">Cabins</h5>
   <p>12 available</p>
    
  </div>
</div>
<div class="card card col-md-3 mt-2">
  <div class="card-body">
    <h5 class="card-title">General Beds</h5>
   <p>45 available</p>
    
  </div>
</div>
<div class="card card col-md-3 mt-2">
  <div class="card-body">
    <h5 class="card-title">Pathology Lab</h5>
   
    <a href="#" class="btn btn-primary">Available</a>
  </div>
</div>
<div class="card card col-md-3 mt-2">
  <div class="card-body">
    <h5 class="card-title">Blood Bank</h5>
   
    <a href="#" class="btn btn-primary">Available</a>
  </div>
</div>
</div>

<div className='appointments'>
<h1><a href='#'>Reserved Beds of this Hospital</a></h1>
{inputs.generalbedsarr?.map((bed)=>(
    <div className="row" key={bed._id}>
   <p>Patient Name: {bed.name}</p>
    <p>Patient Contact Number: {bed.contactnumber}</p>
    <p>Patient Address: {bed.address}</p>
    <p>Type of Bed: {bed.bedtype}</p>
   <p>Charge per Beds: {bed.generalbedscharge}</p>
   
   <p>Age of the Patient: {bed.age}</p>
   <p>State: {bed.state}</p>
   <p>District: {bed.district}</p>
  
   <hr/>
    </div>
   
  ))}

</div>
    </div>
  )
}

export default Adminbeds