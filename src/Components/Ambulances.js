import React from 'react'
import "./style.css"
import "./responsive.css"
import "./Adminprofile.css"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGeoLocation from "./LocationGeo";
import haversine from 'haversine-distance'
import { Link } from "react-router-dom";


const Ambulances = () => {

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
<section>

<h1 className='text-center'>Ambulances Contact Numbers</h1>

<div className='amb-phnumber' style={{marginLeft:"400px"}}>
<p>1.{inputs.phnumber1}</p>
<p>2.{inputs.phnumber2}</p>
<p>3.{inputs.phnumber3}</p>
<p>4.{inputs.phnumber4}</p>
<p>5.{inputs.phnumber5}</p>
<p>6.{inputs.phnumber6}</p>
<p>7.{inputs.phnumber7}</p>
<p>8.{inputs.phnumber8}</p>
<p>9.{inputs.phnumber9}</p>
<p>10.{inputs.phnumber10}</p>

</div>
</section>


    </div>
  )
}

export default Ambulances