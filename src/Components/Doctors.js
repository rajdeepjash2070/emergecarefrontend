import React from 'react'
import "./Doctors.css"

import { Link, useParams } from "react-router-dom";


const Doctors = () => {
	const id=useParams().id;
  return (
    <div>

<header class="header" style={{height:"90px"}}>
<Link className="btn btn-primary m-2 navberlinks" to={`/dashboard/${id}`} style={{borderRadius:"60px"}}><i class="fa-sharp fa-solid fa-circle-user" style={{fontSize:"25px"}}></i> Dashboard
              </Link>
              {/* <Link className="btn btn-primary m-2" to={`/patientdetails/${id}`} >
                GO TO YOUR DASHBOARD
              </Link> */}
              <Link className="btn btn-primary m-2 navberlinks" to={`/emergency/${id}`} style={{borderRadius:"60px"}}><i class="fa-sharp fa-solid fa-truck-medical"></i> Emergency
              </Link>
              <Link className="btn btn-primary m-2 navberlinks" to={`/login`} style={{borderRadius:"60px"}}><i class="fa-sharp fa-solid fa-arrow-right-from-bracket"></i> Log Out
              </Link>
    <div class="search-form">
      <form action="">
        <input
          type="search"
          name=""
          id="search-box"
          placeholder="search here..."
        />
        <label for="search-box">
          <ion-icon name="search-outline"></ion-icon>
        </label>
      </form>
    </div>

    <div class="shopping-cart">
      <h2>No products in the cart.</h2>
  </div>

    <div class="login-form">
      <form action="">
        <h3>Login Now</h3>
        <input type="email" name="" placeholder="UserName" />
        <input type="password" name="" placeholder="Password" />
        <p>forgot your password? <a href="#">click here</a></p>
        <p>Don't have an account! <a href="#">create now</a></p>
        <input type="submit" value="Login Now" class="btn" />
      </form>
    </div>
  </header>
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