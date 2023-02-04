import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'




const Beds = () => {
  const id=useParams().id;

  const [bedcharges,setbedcharges]=useState({});

  useEffect(() => {
    const fetchhospitals = async () => {
        const res = await fetch(`https://emergecarebackend.onrender.com/hospitals/${id}`);
        const data = await res.json();
        setbedcharges(data);
        
      };
      fetchhospitals();
      
    }, []);
  console.log(bedcharges);
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/ambulances/${id}`} style={{color:"white"}}><i class="fa-sharp fa-solid fa-truck-medical"></i> Ambulances</a>
      </li>
     
      <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/doctors/${id}`} style={{color:"white"}}><i class="fa-solid fa-user-doctor"></i> Doctors</a>
      </li>
      <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/beds/${id}`} style={{color:"white"}}><i class="fa-solid fa-bed-pulse"></i> Beds</a>
      </li>
      <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/reviews/${id}`} style={{color:"white"}}><i class="fa-solid fa-star-sharp"></i> Reviews</a>
      </li>
    </ul>
  </div>

</nav>
<div className='row' style={{marginTop:"100px"}}>
<div class="card col-md-3 mt-4" style={{backgroundColor:"rgb(0, 187, 255)"}}>
  <div class="card-body">
    <h2 class="card-title text-center">COVID BEDS</h2>
  
   <p className="p-4" style={{color:"white",width:"100%"}}>24 available</p>
   <p className="p-4" style={{color:"white",width:"100%",}}>Charge: {bedcharges.covidbedscharge} Per Day</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4" style={{backgroundColor:"rgb(119, 0, 255)"}}>
  <div class="card-body">
    <h2 class="card-title text-center">ICUs</h2>
   <p className="p-4" style={{color:"white",width:"100%",}}>14 available</p>
   <p className="p-4" style={{color:"white",width:"100%",}}>Charge: {bedcharges.icucharge} Per Day</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4" style={{backgroundColor:"rgb(255, 0, 195)"}}>
  <div class="card-body">
    <h2 class="card-title text-center">CCUs</h2>
   <p className="p-4" style={{color:"white",width:"100%",}}>12 available</p>
   <p className="p-4" style={{color:"white",width:"100%",}}>Charge: {bedcharges.ccucharge} Per Day</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4" style={{backgroundColor:"rgb(255, 106, 0)"}}>
  <div class="card-body">
    <h2 class="card-title">Dengue Beds</h2>
    <p className="p-4" style={{color:"white",width:"100%",}}>20 available</p>
    <p className="p-4" style={{color:"white",width:"100%",}}>Charge: {bedcharges.denguebedscharge} Per Day</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4" style={{backgroundColor:"rgba(255, 225, 0, 0.856)"}}>
  <div class="card-body">
    <h2 class="card-title">Malaria Beds</h2>
    <p className="p-4" style={{width:"100%",}}>12 available</p>
    <p className="p-4" style={{width:"100%",}}>Charge: {bedcharges.malariabedscharge} Per Day</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4" style={{backgroundColor:"rgba(0, 215, 82, 0.856)"}}>
  <div class="card-body">
    <h2 class="card-title">Burn Beds</h2>
   <p className="p-4" style={{color:"white",width:"100%",}}>10 available</p>
   <p className="p-4" style={{color:"white",width:"100%",}}>Charge: {bedcharges.burnbedscharge} Per Day</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4" style={{backgroundColor:"rgba(255, 65, 65, 0.856)"}}>
  <div class="card-body">
    <h2 class="card-title">Cabins</h2>
   <p className="p-4" style={{color:"white",width:"100%",}}>12 available</p>
   <p className="p-4" style={{color:"white",width:"100%",}}>Charge: {bedcharges.cabinscharge} Per Day</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4" style={{backgroundColor:"rgba(116, 0, 161, 0.856)"}}>
  <div class="card-body">
    <h2 class="card-title">General Beds</h2>
   <p className="p-4" style={{color:"white",width:"100%",}}>45 available</p>
   <p className="p-4" style={{color:"white",width:"100%",}}>Charge: {bedcharges.generalbedscharge} Per Day</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h2 class="card-title">Pathology Lab</h2>
   
    <a href={`/bookbed/${id}`} class="btn btn-primary">Available</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h2 class="card-title">Blood Bank</h2>
   
    <a href={`/bookbed/${id}`} class="btn btn-primary">Available</a>
  </div>
</div>
</div>
    </div>
  )
}

export default Beds