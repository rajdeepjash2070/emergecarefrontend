import React from 'react'
import "./Doctors.css"

import { Link, useParams } from "react-router-dom";


const Doctors = () => {
	const id=useParams().id;
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
<div class="container d-flex justify-content-center">
    <div class="card p-3 py-4">
        <div class="text-center"> 
		<i class="fa-solid fa-user-doctor"></i>
            <h2 class="mt-2 text-center" style={{fontSize:"12px"}}>Sourav Nag(Medicine Specialist)</h2>
			<span class="mt-1 clearfix">Chamber in Barasat,West Bengal</span>
			
			<div class="row mt-3 mb-3">
			<h2 className='text-center'>Timings</h2>
			  <div class="col-md-4">
				<h5>Monday</h5>
				<span class="num">4.00 p.m</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Wednesday</h5>
				<span class="num">5.00 p.m</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Saturday</h5>
				<span class="num">4.30 p.m</span>
			  </div>
			
			</div>
			
			<hr class="line"/>
			
			
           
			  
			 <div class="profile mt-5">
			 
			  <Link className="btn btn-primary m-2 navberlinks" to={`/bookdoctorappointment`} style={{borderRadius:"60px"}}> Book an Appointment
              </Link>

		</div>

    
			   
        </div>

        
    </div>

    <div class="card p-3 py-4">
        <div class="text-center"> 
		<i class="fa-solid fa-user-doctor"></i>
            <h2 class="mt-2 text-center" style={{fontSize:"12px"}}>Abhishek Ray(Medicine Specialist)</h2>
			<span class="mt-1 clearfix">Chamber in Asansol,West Bengal</span>
			
			<div class="row mt-3 mb-3">
			<h2 className='text-center'>Timings</h2>
			  <div class="col-md-4">
				<h5>Monday</h5>
				<span class="num">4.00 p.m</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Wednesday</h5>
				<span class="num">5.00 p.m</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Saturday</h5>
				<span class="num">4.30 p.m</span>
			  </div>
			
			</div>
			
			<hr class="line"/>
			
		
           
			  
			 <div class="profile mt-5">
			 
			  <Link className="btn btn-primary m-2 navberlinks" to={`/bookdoctorappointment`} style={{borderRadius:"60px"}}> Book an Appointment
              </Link>

		</div>

    
			   
        </div>

        
    </div>

    <div class="card p-3 py-4">
        <div class="text-center"> 
		<i class="fa-solid fa-user-doctor"></i>
            <h2 class="mt-2 text-center" style={{fontSize:"12px"}}>Prerna Pallvi(Medicine Specialist)</h2>
			<span class="mt-1 clearfix">Chamber in Asansol,West Bengal</span>
			
			<div class="row mt-3 mb-3">
			<h2 className='text-center'>Timings</h2>
			  <div class="col-md-4">
				<h5>Monday</h5>
				<span class="num">4.00 p.m</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Wednesday</h5>
				<span class="num">5.00 p.m</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Saturday</h5>
				<span class="num">4.30 p.m</span>
			  </div>
			
			</div>
			
			<hr class="line"/>
			
		
           
			  
			 <div class="profile mt-5">
			 
			  <Link className="btn btn-primary m-2 navberlinks" to={`/bookdoctorappointment`} style={{borderRadius:"60px"}}> Book an Appointment
              </Link>

		</div>

    
			   
        </div>

        
    </div>

    <div class="card p-3 py-4">
        <div class="text-center"> 
		<i class="fa-solid fa-user-doctor"></i>
            <h2 class="mt-2 text-center" style={{fontSize:"12px"}}>Sudipta Bhattacharjya(Cardiology Specialist)</h2>
			<span class="mt-1 clearfix">Chamber in BidhanNagar Durgapur,West Bengal</span>
			
			<div class="row mt-3 mb-3">
			<h2 className='text-center'>Timings</h2>
			  <div class="col-md-4">
				<h5>Monday</h5>
				<span class="num">4.00 p.m</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Wednesday</h5>
				<span class="num">5.00 p.m</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Saturday</h5>
				<span class="num">4.30 p.m</span>
			  </div>
			
			</div>
			
			<hr class="line"/>
			
		
           
			  
			 <div class="profile mt-5">
			 
			  <Link className="btn btn-primary m-2 navberlinks" to={`/bookdoctorappointment`} style={{borderRadius:"60px"}}> Book an Appointment
              </Link>

		</div>

    
			   
        </div>

        
    </div>
</div>



      
    </div>
  )
}

export default Doctors