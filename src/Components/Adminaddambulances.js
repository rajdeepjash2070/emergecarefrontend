import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import useGeoLocation from "../Components/LocationGeo";

const Adminaddambulances = () => {
    const id=useParams().id;
  const history = useNavigate();
  const location = useGeoLocation();
  const [data, setData] = useState({
    phnumber1:"",
    phnumber2:"",
    phnumber3:"",
    phnumber4:"",
    phnumber5:"",
    phnumber6:"",
    phnumber7:"",
    phnumber8:"",
    phnumber9:"",
    phnumber10:"",

  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
    
      formData.append("name", data.phnumber1);
      formData.append("address", data.phnumber2);
      formData.append("description", data.phnumber3);
      formData.append("phnumber", data.phnumber4);
      formData.append("weblink", data.phnumber5);
      formData.append("specialist", data.phnumber6);
      formData.append("state", data.phnumber7);
      formData.append("district", data.phnumber8);
      formData.append("near", data.phnumber9);
      formData.append("pin", data.phnumber10);
      
     
      const res = await fetch(`https://emergecarebackend.onrender.com/hospitals/ambulances/${id}`, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        setData({  
            phnumber1:"",
            phnumber2:"",
            phnumber3:"",
            phnumber4:"",
            phnumber5:"",
            phnumber6:"",
            phnumber7:"",
            phnumber8:"",
            phnumber9:"",
            phnumber10:"",
    
    });
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
          placeholder="Phone Number 1"
          type="text"
          name="name"
          value={data.phnumber1}
          onChange={handleChange("phnumber1")}
        />
        
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Phone Number 2"
      type="text"
      name="address"
      value={data.phnumber2}
      onChange={handleChange("phnumber2")}
    />
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Phone Number 3"
      type="text"
      name="description"
      value={data.phnumber3}
      onChange={handleChange("phnumber3")}
    />
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Phone Number 4"
      type="text"
      name="phnumber"
      value={data.phnumber4}
      onChange={handleChange("phnumber4")}
    />
      </div>
      
  
  
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Phone Number 5"
  type="text"
  name="weblink"
  value={data.phnumber5}
  onChange={handleChange("phnumber5")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Phone Number 6"
  type="text"
  name="specialist"
  value={data.phnumber6}
  onChange={handleChange("phnumber6")}
/>
  </div>
 
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Phone Number 7"
  type="text"
  name="state"
  value={data.phnumber7}
  onChange={handleChange("phnumber7")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Phone Number 8"
  type="text"
  name="district"
  value={data.phnumber8}
  onChange={handleChange("phnumber8")}
/>
  </div>
 
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Phone Number 9"
  type="text"
  name="near"
  value={data.phnumber9}
  onChange={handleChange("phnumber9")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Phone Number 10"
  type="text"
  name="pin"
  value={data.phnumber10}
  onChange={handleChange("phnumber10")}
/>
  </div>

  
 
  
  
  
  
  

  
 
     
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
         Add Ambulances
        </button>
      </div>
      </div>
     
      </div>
    </div>
  );
};

export default Adminaddambulances;