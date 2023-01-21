import React from 'react'
import "./Patientdetails.css"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGeoLocation from "./LocationGeo";
import haversine from 'haversine-distance'
import { Link } from "react-router-dom";
const Patientdetails = () => {

    const id=useParams().id;
      console.log(id);
      const [checked,setChecked]=useState(false);
      const [inputs,setInputs]=useState({});
      const [docters, setdocters] = useState();
      const location = useGeoLocation();
  
    const history=useNavigate();
     
  
        useEffect(() => {
            const fetchdocters = async () => {
                const res = await fetch(`http://localhost:5000/docters/${id}`);
                const data = await res.json();
                setInputs(data);
                
              };
              fetchdocters();
            }, []);
            console.log(inputs);
 


  return (
    <div>




<h1 className='text-center'>Appointments at Your Chamber Address:{inputs.address}</h1>
  
    <table class="table table-bordered">
        <thead class="thead-dark" style={{backgroundColor:"rgb(84, 0, 180)"}}>
            <tr class="success">
                <th scope="col" style={{color:"white"}}>Sl no.</th>
                <th scope="col" style={{color:"white"}}>Patient Name</th>
                <th scope="col" style={{color:"white"}}>Address</th>
                <th scope="col" style={{color:"white"}}>Contact Number</th>
                <th scope="col" style={{color:"white"}}>Email id</th>
                <th scope="col" style={{color:"white"}}>Age</th>
                <th scope="col" style={{color:"white"}}>Gender</th>
                <th scope="col" style={{color:"white"}}>State</th>
                <th scope="col" style={{color:"white"}}>District</th>
                <th scope="col" style={{color:"white"}}>height</th>
                <th scope="col" style={{color:"white"}}>Weight</th>
                <th scope="col" style={{color:"white"}}>Blood Pressure</th>
                <th scope="col" style={{color:"white"}}>Suger Level</th>
                <th scope="col" style={{color:"white"}}>Symptom 1</th>
                <th scope="col" style={{color:"white"}}>Symptom 2</th>
                <th scope="col" style={{color:"white"}}>Symptom 3</th>
                <th scope="col" style={{color:"white"}}>Symptom 4</th>
                <th scope="col" style={{color:"white"}}>Symptom 5</th>
                <th scope="col" style={{color:"white"}}>Any Comment</th>
            </tr>
        </thead>


        
            {
                inputs.patientarr?.map((patient,i)=>(
                    
        <tbody key={i}>
       
                    <tr>

        <td scope='col'>{i+1}</td>
        <td scope='col'>{patient.name}</td>

      
        <td scope='col'> {patient.address}</td>
         <td scope='col'>{patient.phnumber}</td>
         <td scope='col'>{patient.email}</td>
         <td scope='col'>{patient.age}</td>
         <td scope='col'>{patient.gender}</td>
         <td scope='col'>{patient.state}</td>
         <td scope='col'>{patient.district}</td>
         <td scope='col'>{patient.height}</td>
         <td scope='col'>{patient.weight}</td>
         <td scope='col'>{patient.bp}</td>
         <td scope='col'>{patient.sugerlevel}</td>
         <td scope='col'>{patient.symptoms1}</td>
         <td scope='col'>{patient.symptoms2}</td>
         <td scope='col'>{patient.symptoms3}</td>
         <td scope='col'>{patient.symptoms4}</td>
         <td scope='col'>{patient.symptoms5}</td>
         <td scope='col'>{patient.comment}</td>
       
       
         </tr>
         
        </tbody>
       
                ))
            }
       
    </table>
   
    </div>
  )
}

export default Patientdetails