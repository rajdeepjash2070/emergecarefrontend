import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGeoLocation from "../Components/LocationGeo";
import "./Addhospital.css"
const Addhospital = () => {
  const history = useNavigate();
  const location = useGeoLocation();
  const [data, setData] = useState({
    name: "",
    address:"",
    image: "",
    description: "",
    phnumber: "",
    weblink:"",
    specialist:"",
    state:"",
    district:"",
    near:"",
    pin:"",
    email:"",
    oxygen:"",
    plasmabank:"",
    bloodbank:"",
    icu:"",
    ccu:"",
    doctor:"",
    covidoxygen:"",
    covidbeds:"",
    denguebeds:"",
    malariabeds:"",
    generalbeds:"",
    pathologylab:"",
    pregnantbeds:"",
    burnbeds:"",
    cabins:"",
    longi:"",
    lati:"",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("description", data.description);
      formData.append("phnumber", data.phnumber);
      formData.append("weblink", data.weblink);
      formData.append("specialist", data.specialist);
      formData.append("state", data.state);
      formData.append("district", data.district);
      formData.append("near", data.near);
      formData.append("pin", data.pin);
      formData.append("doctor", data.doctor);
      formData.append("oxygen", data.oxygen);
      formData.append("plasmabank", data.plasmabank);
      formData.append("bloodbank", data.bloodbank);
      formData.append("icu", data.icu);
      formData.append("pathologylab", data.pathologylab);
      formData.append("ccu", data.ccu);
      formData.append("covidoxygen", data.covidoxygen);
      formData.append("covidbeds", data.covidbeds);
      formData.append("denguebeds", data.denguebeds);
      formData.append("malariabeds", data.malariabeds);
      formData.append("generalbeds", data.generalbeds);
      formData.append("pregnantbeds", data.pregnantbeds);
      formData.append("burnbeds", data.burnbeds);
      formData.append("cabins", data.cabins);
      formData.append("email", data.email);
      formData.append("longi", location.coordinates.lng);
      formData.append("lati", location.coordinates.lat);
     
      const res = await fetch(`http://localhost:5000/hospitals`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({  name: "",
        address:"",
        image: "",
        description: "",
        phnumber: "",
        doctor:"",
        weblink:"",
        specialist:"",
       
        state:"",
        district:"",
      
        near:"",
        pin:"",
       pathologylab:"",
        oxygen:"",
    plasmabank:"",
    bloodbank:"",
    icu:"",
    ccu:"",
    covidoxygen:"",
    covidbeds:"",
    denguebeds:"",
    malariabeds:"",
    generalbeds:"",
    pregnantbeds:"",
    burnbeds:"",
    cabins:"",
        email:"",
        longi:"",
        lati:""});
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  location.loaded
  ? JSON.stringify(location.coordinates)
  : console.log("Location data not available yet.")
  return (
    <div>
    <h1 className="text-center" style={{backgroundColor:"yellow"}}>Please Fill the Form with Accurate Details as these Details can save a Patients Life</h1>
    <div style={{ maxWidth: 600, margin: "auto" }}>
    <div className="mt-4">
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Name of Your Hospital"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
        
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Address of Hospital"
      type="text"
      name="address"
      value={data.address}
      onChange={handleChange("address")}
    />
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Give a description of the Hospital"
      type="text"
      name="description"
      value={data.description}
      onChange={handleChange("description")}
    />
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Give Hospital's Contact Numbers"
      type="text"
      name="phnumber"
      value={data.phnumber}
      onChange={handleChange("phnumber")}
    />
      </div>
      
  
  
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="If there is any Hospitals's Website then give the link"
  type="text"
  name="weblink"
  value={data.weblink}
  onChange={handleChange("weblink")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="If Your Hospital is Specialized for something then give the specialization"
  type="text"
  name="specialist"
  value={data.specialist}
  onChange={handleChange("specialist")}
/>
  </div>
 
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="The name of the State Where your Hospital is established "
  type="text"
  name="state"
  value={data.state}
  onChange={handleChange("state")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="The name of the District Where your Hospital is established"
  type="text"
  name="district"
  value={data.district}
  onChange={handleChange("district")}
/>
  </div>
 
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Near the Landmark"
  type="text"
  name="near"
  value={data.near}
  onChange={handleChange("near")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="The Pincode of the area"
  type="text"
  name="pin"
  value={data.pin}
  onChange={handleChange("pin")}
/>
  </div>

  
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Current amount of Oxygen in Litres"
  type="text"
  name="oxygen"
  value={data.oxygen}
  onChange={handleChange("oxygen")}
/>
  </div>
  <div class="form-group mb-3">
    <label for="exampleFormControlSelect1">select if pathologylab exist in your hospital or not</label>
    <select id="inputState" className="form-select"  name="pathologylab" value={data.pathologylab} onChange={handleChange("pathologylab")}>
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
  value={data.doctor}
  onChange={handleChange("doctor")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Blood Bank in Your Hospital"
  type="Number"
  name="bloodbank"
  value={data.bloodbank}
  onChange={handleChange("bloodbank")}
/>
  </div>
  <div class="form-group mb-3">
    <label for="exampleFormControlSelect1">select if there exist any plasma bank in your hospital or not</label>
    <select id="inputState" className="form-select"  name="plasmabank" value={data.plasmabank} onChange={handleChange("plasmabank")}>
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
  value={data.generalbeds}
  onChange={handleChange("generalbeds")}
/>
  </div>

  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Covid Beds Available"
  type="Number"
  name="covidbeds"
  value={data.covidbeds}
  onChange={handleChange("covidbeds")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Covid Beds with Oxygen Support Available"
  type="Number"
  name="covidoxygen"
  value={data.covidoxygen}
  onChange={handleChange("covidoxygen")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of ICU Beds Available"
  type="Number"
  name="icu"
  value={data.icu}
  onChange={handleChange("icu")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of CCU Beds Available"
  type="Number"
  name="ccu"
  value={data.ccu}
  onChange={handleChange("ccu")}
/>
  </div>

  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Dengue Beds Available"
  type="Number"
  name="denguebeds"
  value={data.denguebeds}
  onChange={handleChange("denguebeds")}
/>
  </div>

  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Malaria Beds Available"
  type="Number"
  name="malariabeds"
  value={data.malariabeds}
  onChange={handleChange("malariabeds")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Pregnant Beds Available"
  type="Number"
  name="pregnantbeds"
  value={data.pregnantbeds}
  onChange={handleChange("pregnantbeds")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Burn Beds Available"
  type="Number"
  name="burnbeds"
  value={data.burnbeds}
  onChange={handleChange("burnbeds")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Number of Cabins Available"
  type="Number"
  name="cabins"
  value={data.cabins}
  onChange={handleChange("cabins")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Your Email"
  type="text"
  name="email"
  value={data.email}
  onChange={handleChange("email")}
/>
  </div>

  
 
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
         Post
        </button>
      </div>
      </div>
     
      </div>
    </div>
  );
};

export default Addhospital;