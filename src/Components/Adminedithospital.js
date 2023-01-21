
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGeoLocation from "./LocationGeo";

const Adminedithospital = () => {
  const [checked,setChecked]=useState(false);
  const [inputs,setInputs]=useState({});
  const [hospitals, sethospitals] = useState();
const history=useNavigate();
const location = useGeoLocation();
    const id=useParams().id;
    console.log(id);
    useEffect(() => {
        const fetchhospitals = async () => {
            const res = await fetch(`http://localhost:5000/hospitals/${id}`);
            const inputs = await res.json();
            setInputs(inputs);
            
          };
          fetchhospitals();
        }, []);
        console.log(inputs);
    
  
 


    const sendRequest = async(e)=>{    
const { name,
address,
image, 
description,
phnumber,
weblink,
specialist,
state,
district,
near,
pin,
email,
oxygen,
plasmabank,
bloodbank,
icu,
ccu,
doctor,
covidoxygen,
covidbeds,
denguebeds,
malariabeds,
generalbeds,
pathologylab,
pregnantbeds,
burnbeds,
cabins,
longi,
lati,
    }=inputs;
    
        const res2 = await fetch(`http://localhost:5000/hospitals/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,
                address,
                image, 
                description,
                phnumber,
                weblink,
                specialist,
                state,
                district,
                near,
                pin,
                email,
                oxygen,
                plasmabank,
                bloodbank,
                icu,
                ccu,
                doctor,
                covidoxygen,
                covidbeds,
                denguebeds,
                malariabeds,
                generalbeds,
                pathologylab,
                pregnantbeds,
                burnbeds,
                cabins,
                longi,
                lati,
    

            })
        });

        const inputs2 = await res2.json();
        console.log(inputs2);

        if(res2.status === 422 || !inputs2){
            alert("fill the inputs");
        }else{
           
            setInputs(inputs2);
        }

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history(`/adminprofile/${id}`));
            }
            const handleChange=(e)=>{
                setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
                }))
              }
  return (
    <div>  <h1  className='text-center bg-warning text-white'>Update The Hospital with Accurate Details</h1>
    <h3 id='htag' className='text-center bg-danger text-white'>Your Details can Save a Pateint's Life and also Wrong Details can Finish a pateint's Life </h3>

    { inputs && (<form className='p-4 form-container' onSubmit={handleSubmit}>
<div><img src={inputs.avatar} alt="Docter Image"/></div>
 <div className="mb-3">
 Name:
 <input
   className="form-control"
   placeholder="Enter name"
   type="text"
   name="name"
   value={inputs.name}
   onChange={handleChange}
 />
 </div>

 <div className="mb-2">
 Address
 <input
 className="form-control"
 placeholder="Work Address"
 type="text"
 name="address"
 value={inputs.address}
 onChange={handleChange}
/>
 </div>
 <div className="mb-2">
 Description
 <input
 className="form-control"
 placeholder="Give a description of your Job"
 type="text"
 name="description"
 value={inputs.description} onChange={handleChange}
/>
 </div>
 <div className="mb-2">
 Contact Number
 <input
 className="form-control"
 placeholder="Give Your Phone number so they can contact you"
 type="text"
 name="phnumber"
 value={inputs.phnumber}
 onChange={handleChange}
/>
 </div>
 


<div className="mb-2">
Your Website Link:
<input
className="form-control"
placeholder="Your Website Link if any"
type="text"
name="weblink"
value={inputs.weblink}
onChange={handleChange}
/>
</div>
<div className="mb-2">
Your Specialization:
<input
className="form-control"
placeholder="Your Specialization"
type="text"
name="specialist"
value={inputs.specialist}
onChange={handleChange}
/>
</div>

<div className="mb-2">
Your State
<input
className="form-control"
placeholder="The name of the State Where your Chamber is established "
type="text"
name="state"
value={inputs.state}
onChange={handleChange}
/>
</div>
<div className="mb-2">
District
<input
className="form-control"
placeholder="The name of the District Where your Chamber is established"
type="text"
name="district"
value={inputs.district}
onChange={handleChange}
/>
</div>

<div className="mb-2">
Near the Landmark
<input
className="form-control"
placeholder="Near the Landmark"
type="text"
name="near"
value={inputs.near}
onChange={handleChange}
/>
</div>
<div className="mb-2">
Pin Code of the Area
<input
className="form-control"
placeholder="The Pincode of the area"
type="text"
name="pin"
value={inputs.pin}
onChange={handleChange}
/>
</div>




<div className="mb-2">
  <input
  className="form-control"
  placeholder="Current amount of Oxygen in Litres"
  type="text"
  name="oxygen"
  value={inputs.oxygen}
  onChange={handleChange}
/>
  </div>
  <div class="form-group mb-3">
    <label for="exampleFormControlSelect1">select if pathologylab exist in your hospital or not</label>
    <select id="inputState" className="form-select"  name="pathologylab" value={inputs.pathologylab} onChange={handleChange}>
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Total Number of Physicians in Your Hospital"
  type="Number"
  name="doctor"
  value={inputs.doctor}
  onChange={handleChange}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Blood Bank in Your Hospital"
  type="Number"
  name="bloodbank"
  value={inputs.bloodbank}
  onChange={handleChange}
/>
  </div>
  <div class="form-group mb-3">
    <label for="exampleFormControlSelect1">select if there exist any plasma bank in your hospital or not</label>
    <select id="inputState" className="form-select"  name="plasmabank" value={inputs.plasmabank} onChange={handleChange}>
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
      
            </select>
  </div>

  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of General Beds Available"
  type="Number"
  name="generalbeds"
  value={inputs.generalbeds}
  onChange={handleChange}
/>
  </div>

  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Covid Beds Available"
  type="Number"
  name="covidbeds"
  value={inputs.covidbeds}
  onChange={handleChange}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Covid Beds with Oxygen Support Available"
  type="Number"
  name="covidoxygen"
  value={inputs.covidoxygen}
  onChange={handleChange}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of ICU Beds Available"
  type="Number"
  name="icu"
  value={inputs.icu}
  onChange={handleChange}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of CCU Beds Available"
  type="Number"
  name="ccu"
  value={inputs.ccu}
  onChange={handleChange}
/>
  </div>

  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Dengue Beds Available"
  type="Number"
  name="denguebeds"
  value={inputs.denguebeds}
  onChange={handleChange}
/>
  </div>

  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Malaria Beds Available"
  type="Number"
  name="malariabeds"
  value={inputs.malariabeds}
  onChange={handleChange}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Pregnant Beds Available"
  type="Number"
  name="pregnantbeds"
  value={inputs.pregnantbeds}
  onChange={handleChange}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Burn Beds Available"
  type="Number"
  name="burnbeds"
  value={inputs.burnbeds}
  onChange={handleChange}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Cabins Available"
  type="Number"
  name="cabins"
  value={inputs.cabins}
  onChange={handleChange}
/>
  </div>
<div className="mb-2">
Your Email
<input
className="form-control"
placeholder="Your Email"
type="text"
name="email"
value={inputs.email}
onChange={handleChange}
/>
</div>


  {/* state , district,  address, fees, description, time,weblink,specialist,postoff,near,edu,pin,ageduration,others */}
 
  <button type="submit" class="btn btn-primary">Update Your Hospital</button>
</form>)}

    </div>
  )
}

export default Adminedithospital