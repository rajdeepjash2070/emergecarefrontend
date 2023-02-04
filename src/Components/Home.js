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
    <div className="post-section" style={{marginLeft:"600px",marginTop:"100px"}}>
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