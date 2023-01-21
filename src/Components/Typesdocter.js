import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css"
import useGeoLocation from "./LocationGeo";
import haversine from 'haversine-distance'
import Buttonclick from "./button-click.wav"
import useSound from 'use-sound';
import { useParams } from 'react-router-dom'



const Typesdocter = () => {

    const [docters, setdocters] = useState();
  const [stxt,setstxt]=useState('');
  const id=useParams().id;
  console.log(id);
  useEffect(() => {
    const fetchdocters = async () => {
      const res = await fetch('http://localhost:5000/docters');
      const data = await res.json();
      setdocters(data);
      console.log(docters);
    };
    fetchdocters();
  }, []);

  const location = useGeoLocation();

  const getdistance=(a1,a2)=>{
    const b1=parseFloat(a1);
    const b2=parseFloat(a2);
 // console.log(b1,b2)
    const d1=parseFloat(`${location.coordinates.lat}`)
    const d2=parseFloat(`${location.coordinates.lng}`)
    console.log(d1,d2)
    const a = [b1, b2]
    const d=[d1,d2]
  //console.log("Distance is")
   const dist=haversine(a,d)
   return (dist/1000)
  
  }

  location.loaded?JSON.stringify(location.coordinates):console.log("Location data not available yet")
//   const handleChange=(e)=>{
//     setstxt((prevState)=>({
// ...prevState,
// [e.target.name]:e.target.value
//     }))
//   }

  //const searchterm=()=>{
  
//     docters.filter((docter)=>{
     
// //if(docterlogin.email.toLocaleLowerCase().includes((inputs.email).toLocaleLowerCase()) && docterlogin.password.toLowerCase().includes((inputs.password).toLocaleLowerCase())){
// if(docter.name==stxt.text){

// console.log("yes")

// }else{
// console.log("no")
// }

//   })

//   }
const [audio] = useSound(Buttonclick);

  const handleSubmit=(e)=>{
    e.preventDefault();
    

    // sendRequest().then(()=>history('/'))
    
}

  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item">
        <Link onClick={audio} to={`/userprofile/${id}`}>YOUR DASHBOARD</Link>
      </li>
      <li class="nav-item">
        <Link onClick={audio} to={`/login`}>LOG OUT</Link>
      </li>
    
    </ul>
   
  </div>
</nav>

<div className="row docter-card-container">
      
        <div className="col-md-4">
        <div class="card mt-4 home-card">
       
        <div class="card-body">
          
        
         
          <p class="card-text">Specialization: Medicine</p>
          
       
          
         <Link className="btn btn-primary m-2" to={`/medicine/${id}`} onClick={audio}>Got to the Page of MEDICINE Doctors</Link>
        </div>
      </div>
      </div>
<div className='col-md-4'>
      <div class="card mt-4 home-card">
       
       <div class="card-body">
         
       
        
         <p class="card-text">Specialization: Cardiology</p>
         
      
         
        <Link className="btn btn-primary m-2" to={`/cardiology/${id}`} onClick={audio}>Got to the Page of Cardiology Doctors</Link>
       </div>
     </div>
     </div>

     <div className='col-md-4'>
      <div class="card mt-4 home-card">
       
       <div class="card-body">
         
       
        
         <p class="card-text">Specialization: Orthopedic</p>
         
      
         
        <Link className="btn btn-primary m-2" to={`/orthopedic/${id}`} onClick={audio}>Got to the Page of Orthopedic Doctors</Link>
       </div>
     </div>
     </div>

     <div className='col-md-4'>
      <div class="card mt-4 home-card">
       
       <div class="card-body">
         
       
        
         <p class="card-text">Specialization: Gastroenterologist</p>
         
      
         
        <Link className="btn btn-primary m-2" to={`/gastroenterologist/${id}`} onClick={audio}>Got to the Page of Gastroenterologist Doctors</Link>
       </div>
     </div>
     </div>

     <div className='col-md-4'>
      <div class="card mt-4 home-card">
       
       <div class="card-body">
         
       
        
         <p class="card-text">Specialization: Gynecologist</p>
         
      
         
        <Link className="btn btn-primary m-2" to={`/gynecologist/${id}`} onClick={audio}>Got to the Page of Gynecologist Doctors</Link>
       </div>
     </div>
     </div>
     
     <div className='col-md-4'>
      <div class="card mt-4 home-card">
       
       <div class="card-body">
         
       
        
         <p class="card-text">Specialization: Urologist-General & Laparoscopic Surgeon</p>
         
      
         
        <Link className="btn btn-primary m-2" to={`/UrologistGeneralLaparoscopicSurgeon/${id}`} onClick={audio}>Got to the Page of Urologist-General & Laparoscopic Surgeon Doctors</Link>
       </div>
     </div>
     </div>
     

     <div className='col-md-4'>
      <div class="card mt-4 home-card">
       
       <div class="card-body">
         
       
        
         <p class="card-text">Specialization: Dermatology</p>
         
      
         
        <Link className="btn btn-primary m-2" to={`/dermatology/${id}`} onClick={audio}>Got to the Page of Dermatology Doctors</Link>
       </div>
     </div>
     </div>
     
        </div>
      
        
    </div>
  
  )
}

export default Typesdocter