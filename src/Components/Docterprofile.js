import React from 'react'
import "./style.css"
import "./responsive.css"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGeoLocation from "./LocationGeo";
import haversine from 'haversine-distance'
import { Link } from "react-router-dom";
import Buttonclick from "./button-click.wav"
import useSound from 'use-sound';


const Docterprofile = () => {
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
              const res = await fetch(`http://localhost:5000/docters/${id}`);
              const data = await res.json();
              setInputs(data);
              
            };
            fetchdocters();
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
  return (
    <div>

<header class="header">


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
{/*Home Section*/}
  <section class="home-section section" id="home-section">
    <div class="container grid grid-two-col">
      <div class="home-data">
        <h1>DR. {inputs.name}</h1>
        <p>
         {inputs.address}
        </p>
        <p>
         {inputs.edu}
        </p>
        <a href={inputs.weblink} class="btn" onClick={audio}>WEBSITE</a>
      </div>
      <div class="home-img">
        <img src={inputs.avatar} alt="" class="home-pic" />
       
      </div>
    </div>
  </section>

 {/*about us section*/}
 <section className='near'>
<div><i class="fa-solid fa-location-dot"></i> Dr. {inputs.name} is {getdistance(inputs.lati,inputs.longi)}KM far From You near {inputs.near}</div>
<p style={{color:"white"}}>State: {inputs.state} District: {inputs.district}</p>
<div style={{backgroundColor:"orange"}}>Specialization in {inputs.specialist}</div>


 </section>
  <section class="about-section section" id="about-section">
    <div class="container grid grid-two-col">
      <h1>About The Docter</h1>
     
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
        <div class="btn t-btn" data-btn-num="0">Time :{inputs.time}</div>
        <div class="btn t-btn" data-btn-num="1">Fees: {inputs.fees}</div>
        <div class="btn t-btn" data-btn-num="2">Age Duration: {inputs.ageduration}</div>
        <div class="btn t-btn" data-btn-num="3" style={{textTransform:"lowercase"}}>Email: {inputs.email}</div>
        <div class="btn t-btn" data-btn-num="4">Contact Number: {inputs.phnumber}</div>
        <div class="btn t-btn" data-btn-num="4">Experience in {inputs.specialist} about:  {inputs.experience}</div>
       
      </div>

    </div>
  </section>

  {/* Category */}
  <section class="cat-section section" id="cat-section">
    <h1 class="primary-heading">Chamber in Hospitals and their Locations</h1>
    <div className='hospitals'>
   <p style={{color:"green"}}>{inputs.hospitals}</p>
   </div>
  </section>

 {/* Details */}
 <section>

    <div class="container ads grid grid-two-col payment">
        <div class="ad-data col-md-6">
         
          <Link to={`/bookappointment/${id}`} class="btn" onClick={audio}>Book an Appointment</Link>
        </div>
        <div class="ad-data col-md-6">
         
          <a href="#" class="btn" onClick={audio}>Pay Now {inputs.fees}</a>
        </div>
       
    </div>
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
 <footer class="section footer mt-4">
      <div class="container grid grid-four-col">
          <div class="f-about">
              <a href="#" class="logo"><span>Swasth Sandhan</span></a>
              <p>We support docters that create advancement for people</p>
              <div class="f-social-links">
                  <a href="https://www.instagram.com/?hl=en" target="_blank" style={{backgroundColor:"orangered",color:"white",borderRadius:"10px"}}><i class="fa-brands fa-instagram" style={{backgroundColor:"orangered",color:"white",borderRadius:"10px"}}></i></a>
                  <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                  <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
              </div>
          </div>

          <div class="f-links">
              <h3>Links</h3>
              <ul>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#home-section">Home</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#about-section">About</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#contact-section">Contact</a></li>
              </ul>
          </div>

         

          <div class="f-address"> 
              <h3>Have a Questions?</h3>
              <address>
                <div>
                  <p><span><ion-icon name="location-outline"></ion-icon></span> <a href="https://goo.gl/maps/egiuCAXr4Xpg5F3z8">West Bengal, India</a> </p>
                </div>    
                <div>
                  <p><span><ion-icon name="call-outline"></ion-icon></span> <a href="tel:+91987654321"> +91 9883493809 </a></p>
                </div>
                <div>
                  <p><span><ion-icon name="mail-outline"></ion-icon></span> <a href="mailto:info@nevillejarvis.com"> rajdeepjash2070@gmail.com</a> </p>
                </div>
              </address>
            </div>

      </div>

          <div class="credits"> © Copyright 2022 Rajdeep jash All rights reserved.</div>
          <div class="scrollTop-style">
              <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>
          </div>
  </footer>
    
    
    </div>
  )
}

export default Docterprofile