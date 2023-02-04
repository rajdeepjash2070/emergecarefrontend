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