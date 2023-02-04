import React from 'react'
import "./style.css"
import "./responsive.css"
import "./Hospitalprofile.css"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGeoLocation from "./LocationGeo";
import haversine from 'haversine-distance'
import { Link } from "react-router-dom";


const Hospitalprofile = () => {
    const [checked,setChecked]=useState(false);
    const [inputs,setInputs]=useState({});
    const [hospitals, sethospitals] = useState();
    const location = useGeoLocation();

  const history=useNavigate();
      const id=useParams().id;
      console.log(id);
      useEffect(() => {
          const fetchhospitals = async () => {
              const res = await fetch(`https://emergecarebackend.onrender.com/hospitals/${id}`);
              const data = await res.json();
              setInputs(data);
              
            };
            fetchhospitals();
          }, []);
          console.log(inputs);

          const getdistance=(a1,a2)=>{
            const b1=parseFloat(a1);
            const b2=parseFloat(a2);
          console.log(b1,b2)
            const d1=parseFloat(`${location.coordinates.lat}`)
            const d2=parseFloat(`${location.coordinates.lng}`)
            console.log(d1,d2)
            const a = [b1, b2]
            const d=[d1,d2]
          console.log("Distance is")
           const dist=haversine(a,d)
           return (dist/1000)
          
          }

          const handleDelete = async (id) => {
            try {
              const res = await fetch(`https://emergecarebackend.onrender.com/hospitals/${id}`, {
                method: "DELETE",
              });
              if (res.ok) {
                const updatedhospitals = hospitals.filter((docter) => docter._id !== id);
                sethospitals(updatedhospitals);
              }
            } catch (error) {
              console.log(error);
            }
          };


  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/ambulances/${inputs._id}`} style={{color:"white"}}><i class="fa-sharp fa-solid fa-truck-medical"></i> Ambulances</a>
      </li>
     
      <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/doctors/${inputs._id}`} style={{color:"white"}}><i class="fa-solid fa-user-doctor"></i> Doctors</a>
      </li>
      <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/beds/${inputs._id}`} style={{color:"white"}}><i class="fa-solid fa-bed-pulse"></i> Beds</a>
      </li>
      <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/reviews/${inputs._id}`} style={{color:"white"}}><i class="fa-solid fa-star-sharp"></i> Reviews</a>
      </li>
    </ul>
  </div>

</nav>

{/*Home Section*/}
  <section class="home-section section" id="home-section">
    <div class="container grid grid-two-col">
      <div class="home-data">
        <h1>Hospital Name: {inputs.name}</h1>
        <p>
         {inputs.address}
        </p>
        <a href={inputs.weblink} class="btn">WEBSITE</a>
      </div>
      <div class="home-img">
        <img src={inputs.avatar} alt="" class="home-pic" />
       
      </div>
    </div>
  </section>

 {/*about us section*/}
 <section className='near'>
<div><i class="fa-solid fa-location-dot"></i>{inputs.name} is {getdistance(inputs.lati,inputs.longi)}KM far From You near {inputs.near}</div>
<p style={{color:"white"}}>State: {inputs.state} District: {inputs.district}</p>
<div style={{backgroundColor:"orange"}}>Specialization in {inputs.specialist}</div>


 </section>
  <section class="about-section section" id="about-section">
    <div class="container grid grid-two-col">
      <h1>About Your Hospital</h1>
     
      <div class="about-data">
       
        <p>
         {inputs.description}
        </p>
      </div>
    </div>
  </section>
 

 {/*top rated learning tutorials*/}
  <section class="top-rated section" id="top-rated">
    <div class="container">
      <div class="top-btn">
  
        <div class="btn t-btn" data-btn-num="3" style={{textTransform:"lowercase"}}>Email: {inputs.email}</div>
        <div class="btn t-btn" data-btn-num="4">Contact Number: {inputs.phnumber}</div>
        <div class="btn t-btn" data-btn-num="4">Experience in {inputs.specialist} about:  {inputs.experience}</div>
       
      </div>

    </div>
  </section>

  {/* Category */}

 {/* Details */}
 <h1 className='text-center' style={{marginBottom:"50px"}}>Facilities</h1>
 <section className='facilities row'>
<a href={`/ambulances/${inputs._id}`} className="col-md-3 text-center" style={{fontSize:"20px"}}>Ambulances</a>
<a href={`/doctors/${inputs._id}`}  className="col-md-3 text-center" style={{fontSize:"20px"}}>Doctors</a>
<a href={`/beds/${inputs._id}`}  className="col-md-3 ml-4 text-center" style={{fontSize:"20px"}}>Beds</a>
<a href={`/reviews/${inputs._id}`}  className="col-md-3 text-center" style={{fontSize:"20px"}}>Reviews</a>

 </section>

 {/* contact  */}
  <section class="contact-section section" id="contact-section">
      <h1 class="primary-heading">Contact me</h1>
      <div class="container boxes grid grid-three-col ">
          <div class="contact-box">
              <ion-icon name="call-outline"></ion-icon>
              <h2>Contact</h2>
              <p>{inputs.phnumber}</p>
              
          </div>
          <div class="contact-box">
              <ion-icon name="mail-outline"></ion-icon>
              <h2>Our Mail</h2>
              <p>{inputs.email}</p>
              
          </div>
          <div class="contact-box">
              <ion-icon name="location-outline"></ion-icon>
              <h2>Location</h2>
              <p>{inputs.address}</p>
              
          </div>
         
      </div>
      
     
  </section>
  

 {/* footer */}
  

    
    
    
    </div>
  )
}

export default Hospitalprofile