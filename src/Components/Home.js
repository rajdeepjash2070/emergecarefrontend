import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Home.css"
const Home = () => {
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
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a href="#" class="logo" style={{color:"green",fontSize:"25px",marginLeft:"100px"}}><i class="fas fa-heartbeat" style={{color:"red"}}></i> <span style={{marginTop:"-10px",marginLeft:"5px"}}>EmergeCare</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/dashboard/${id}`} style={{color:"white"}}>Dashboard</a>
      </li>
     
      <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/emergency/${id}`} style={{color:"white"}}>Emergency</a>
      </li>
      <li class="nav-item text-center mt-2">
        <a class="nav-link" href="/login" style={{color:"white"}}>Log out</a>
      </li>
     
    </ul>
  </div>

</nav>

    <div className="post-section" style={{marginTop:"100px"}}>
   <form className="home-searchcontainer">
<input placeholder="Search by District , State or Hospital Name" type="text" name="text" onChange={event=>{setstxt(event.target.value)}}/>

   </form>
    </div>
   
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
        <img src={hospital.avatar} class="card-img-top" alt="Hospital Image"/>
       
        <div class="card-body">
          <div className="card-body-upper">
        <h4 className="card-title" style={{color:"white",fontWeight:"bold"}}>Hospital Name: {hospital.name}</h4>
       
       
        <p class="card-text" style={{color:"white",fontWeight:"bold"}}>Hospital Contact Number: {hospital.phnumber}</p>

        </div>
        <div className="card-body-lower">
          <p class="card-text">Hospital Address: {hospital.address}</p>
          <p className="weblink"><a href={hospital.weblink}>GO TO THE Website</a></p>
          <p class="card-text">State: {hospital.state}</p>
          <p class="card-text">District: {hospital.district}</p>
          <p className="card-text" style={{backgroundColor:"red",color:"white"}}>Number of Doctors: {hospital.doctor}</p>
          <p className="card-text" style={{backgroundColor:"red",color:"white"}}>Total Beds: {hospital.generalbeds}</p>
          <p className="weblink"><a href={`/hospitalprofile/${hospital._id}`}>GO TO THE Profile</a></p>
          </div>
              
        </div>
      </div>
      
        </div>
      
      ))}
    </div>
    </div>
  )
}

export default Home;