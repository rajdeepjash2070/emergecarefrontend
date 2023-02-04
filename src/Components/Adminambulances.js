import React from 'react'
import "./style.css"
import "./responsive.css"
import "./Adminprofile.css"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGeoLocation from "./LocationGeo";
import haversine from 'haversine-distance'
import { Link } from "react-router-dom";
import "./Adminambulances.css"

const Adminambulances = () => {

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

export default Adminambulances