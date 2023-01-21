import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Adminhome.css"
const Adminhome = () => {
  const [hospitals, sethospitals] = useState();
  const [stxt,setstxt]=useState('');
  useEffect(() => {
    const fetchhospitals = async () => {
      const res = await fetch('http://localhost:5000/hospitals');
      const data = await res.json();
      sethospitals(data);
      console.log(hospitals);
    };
    fetchhospitals();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/hospitals/${id}`, {
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
    <div className="post-section" style={{marginLeft:"600px",marginTop:"30px"}}>
   <form className="home-searchcontainer">
<input placeholder="Search by District or State" type="text" name="text" onChange={event=>{setstxt(event.target.value)}}/>

   </form>
    </div>
    <div className="post-section" style={{ maxWidth: 200, margin: "auto" }}>
    <h3 className="text-center">You are the Admin </h3>
    <a href="/addhospital"><button className="btn btn-primary">Add a Hospital Here <i class="fa-solid fa-circle-plus"></i></button></a>
    </div>
    <div className="row">
      {hospitals && hospitals.filter((hospital)=>{
              if(stxt===""){
                return `<p>Please search any district</p> `
              }
              else if(hospital._id==stxt || hospital.name==stxt)
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
        <img src={hospital.avatar} class="card-img-top" alt="..."/>
        <hr/>
        <div class="card-body">
          
        <h4 className="card-title" style={{color:"blue"}}>Hospital Name: {hospital.name}</h4>
        <h4 className="card-title">Hospital ID: {hospital._id}</h4>
       
        <p class="card-text">Hospital Contact Number: {hospital.phnumber}</p>
          <p class="card-text">Hospital Address: {hospital.address}</p>
          <p className="weblink"><a href={hospital.weblink}>GO TO THE Website</a></p>
          <p class="card-text">State: {hospital.state}</p>
          <p class="card-text">District: {hospital.district}</p>
      
          <Link className="btn btn-primary m-2" to={`/adminedithospital/${hospital._id}`} >
                Edit Basic Details of Hospital
              </Link>
              <button
                className="btn p-2 btn-danger btn-sm"
                onClick={() => handleDelete(hospital._id)}
              >
                DELETE X
              </button>
        </div>
      </div>
      
        </div>
      
      ))}
    </div>
    </div>
  )
}

export default Adminhome;