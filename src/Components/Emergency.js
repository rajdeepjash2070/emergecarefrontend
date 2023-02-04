import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Emergency = () => {


    const id=useParams().id;
  const [hospitals, sethospitals] = useState();
  const [stxt,setstxt]=useState('');
  useEffect(() => {
    const fetchhospitals = async () => {
      const res = await fetch('https://emergecarebackend.onrender.com/hospitals');
      const data = await res.json();
      sethospitals(data);
      console.log(hospitals);
    };
    fetchhospitals();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://emergecarebackend.onrender.com/hospitals/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const updatedhospitals = hospitals.filter((hospital) => hospital._id !== id);
        sethospitals(updatedhospitals);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>

<div className="row">
      {hospitals && hospitals.filter((hospital)=>{
              if(stxt===""){
                return `<p>Please search any district</p> `
              }
              else if(hospital.state==stxt || hospital.name==stxt || hospital.district==stxt)
              {
                // console.log(docter.district.toLowerCase().includes(stxt.toLocaleLowerCase()))
                return hospital
              }
              // else if(docter.state.toLowerCase().includes(searchstate.toLocaleLowerCase()) ){
              //   console.log(docter.state.toLowerCase().includes(searchstate.toLocaleLowerCase()))
              //      return docter
              // }
            }).map((hospital) => (
        <div className="col-md-3" key={hospital._id} style={{marginLeft:"50px"}}>



        <div class="card mt-4 ml-4">
       
    
        <div class="card-body">
          
        <h4 className="card-title" style={{color:"blue"}}>Hospital Name: {hospital.name}</h4>
      
       
        <p class="card-text">Hospital Contact Number: {hospital.phnumber}</p>
          <p class="card-text" style={{fontSize:"9px"}}>Hospital Address: {hospital.address}</p>
         
          <p className="card-text" style={{backgroundColor:"red",color:"white"}}>Number of Doctors: {hospital.doctor}</p>
          <p className="card-text" style={{backgroundColor:"red",color:"white"}}>Availiable Beds: {hospital.generalbeds}</p>
          <h4 className='text-center'>Call any Ambulance</h4>
          <hr/>
          <p className="card-text text-center" style={{color:"orange"}}><i class="fa-solid fa-truck-medical"></i> {hospital.phnumber1}</p>
          <p className="card-text text-center" style={{color:"orange"}}><i class="fa-solid fa-truck-medical"></i> {hospital.phnumber2}</p>
          <p className="card-text text-center" style={{color:"orange"}}><i class="fa-solid fa-truck-medical"></i> {hospital.phnumber3}</p>
          <p className="card-text text-center" style={{color:"orange"}}><i class="fa-solid fa-truck-medical"></i> {hospital.phnumber4}</p>
          <p className="card-text text-center" style={{color:"orange"}}><i class="fa-solid fa-truck-medical"></i> {hospital.phnumber5}</p>
          <p className="weblink"><a href={`/hospitalprofile/${hospital._id}`}>Reserve a Bed</a></p>
          
        </div>
      </div>
      
        </div>
      
      ))}
    </div>

        
    </div>
  )
}

export default Emergency