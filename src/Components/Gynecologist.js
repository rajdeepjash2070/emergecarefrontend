import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css"
import useGeoLocation from "./LocationGeo";
import haversine from 'haversine-distance'
import Buttonclick from "./button-click.wav"
import useSound from 'use-sound';
import { useParams } from 'react-router-dom'


const Gynecologist = () => {
  const [docters, setdocters] = useState();
  const [stxt,setstxt]=useState('');
  const id=useParams().id;
  console.log(id);
  useEffect(() => {
    const fetchdocters = async () => {
      const res = await fetch('http://localhost:5000/docters');
      const data = await res.json();
      setdocters(data);
      console.log(docters);
    };
    fetchdocters();
  }, []);

  const location = useGeoLocation();

  const getdistance=(a1,a2)=>{
    const b1=parseFloat(a1);
    const b2=parseFloat(a2);
 // console.log(b1,b2)
    const d1=parseFloat(`${location.coordinates.lat}`)
    const d2=parseFloat(`${location.coordinates.lng}`)
    console.log(d1,d2)
    const a = [b1, b2]
    const d=[d1,d2]
  //console.log("Distance is")
   const dist=haversine(a,d)
   return (dist/1000)
  
  }

  location.loaded?JSON.stringify(location.coordinates):console.log("Location data not available yet")
//   const handleChange=(e)=>{
//     setstxt((prevState)=>({
// ...prevState,
// [e.target.name]:e.target.value
//     }))
//   }

  //const searchterm=()=>{
  
    // docters.filter((docter)=>{
     
// //if(docterlogin.email.toLocaleLowerCase().includes((inputs.email).toLocaleLowerCase()) && docterlogin.password.toLowerCase().includes((inputs.password).toLocaleLowerCase())){
// if(docter.name==stxt.text){

// console.log("yes")

// }else{
// console.log("no")
// }

//   })

//   }
const [audio] = useSound(Buttonclick);

  const handleSubmit=(e)=>{
    e.preventDefault();
    

    // sendRequest().then(()=>history('/'))
    
}


  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item">
        <Link onClick={audio} to={`/userprofile/${id}`}>YOUR DASHBOARD</Link>
      </li>
      <li class="nav-item">
        <Link onClick={audio} to={`/login`}>LOG OUT</Link>
      </li>
    
    </ul>
   
  </div>
</nav>
    <div className="post-section" style={{marginLeft:"600px"}}>
   <form className="home-searchcontainer" onSubmit={handleSubmit}>
<input placeholder="Search by District or State" type="text" name="text" onChange={event=>{setstxt(event.target.value)}} onClick={audio}/>

   </form>
    </div>
    <div className="row docter-card-container">
      {docters && docters.filter((docter)=>{
        if(docter.specialist=="Gynecologist"){
            return docter
          }
             else if(docter.state==stxt || docter.district==stxt || docter.fees==stxt || docter.name==stxt && getdistance(docter.lati,docter.longi)<=30 && docter.specialist=="Medicine")
              {
                // console.log(docter.district.toLowerCase().includes(stxt.toLocaleLowerCase()))
                return docter
              } 
            
              // else if(docter.state.toLowerCase().includes(searchstate.toLocaleLowerCase()) ){
              //   console.log(docter.state.toLowerCase().includes(searchstate.toLocaleLowerCase()))
              //      return docter
              // }
            }).map((docter) => (
        <div className="col-md-4" key={docter._id}>
        <div class="card mt-4 home-card">
        <img src={docter.avatar} class="card-img-top" alt="..."/>
        <hr/>
        <div class="card-body">
          
        <h4 className="card-title">Docter Name: Dr.{docter.name}</h4>

        <p class="card-text">Contact Number: {docter.phnumber}</p>
          <p class="card-text">Chamber Address:{docter.address}</p>
          <p class="card-text">Time of Appointment: {docter.time}</p>
          <p class="card-text">Fees: {docter.fees}</p>
         
          <p class="card-text">State: {docter.state}</p>
          <p class="card-text">District: {docter.district}</p>
         
          <p class="card-text">Experience: {docter.experience}</p>
          <h4>{getdistance(docter.lati,docter.longi)} KM From You</h4>
       
          {/* <p class="card-text">{docter.longi}</p>
          <p class="card-text">{docter.lati}</p> */}
          {/*weblink:req.body.weblink,
      specialist:req.body.specialist,
      edu:req.body.edu,
      state:req.body.state,
      district:req.body.district,
      postoff:req.body.postoff,
      near:req.body.near,
      pin:req.body.pin,
      ageduration:req.body.ageduration,
      others:req.body.others,
      experience:req.body.experience,
      docters:req.body.docters,
      email:req.body.email,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
      longi:req.body.longi,
      lati:req.body.lati,*/}
         <Link className="btn btn-primary m-2" to={`/docterprofile/${docter._id}`} onClick={audio}>Got to the Profile and Book an Appointment</Link>
        </div>
      </div>
      
        </div>
      
      ))}
    </div>
    <footer class="section footer mt-4">
      <div class="container grid grid-four-col">
          <div class="f-about">
              <a href="#" class="logo"><span>Healthalyzer</span></a>
              <p>We support docters that create advancement for people</p>
              <div class="f-social-links">
                  <a href="https://www.instagram.com/?hl=en" target="_blank" style={{backgroundColor:"orangered",color:"white",borderRadius:"10px"}}><i class="fa-brands fa-instagram" style={{backgroundColor:"orangered",color:"white",borderRadius:"10px"}}></i></a>
                  <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                  <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
              </div>
          </div>

          <div class="f-links">
              <h3>Links</h3>
              <ul>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#home-section">Home</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#about-section">About</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#contact-section">Contact</a></li>
              </ul>
          </div>

         

          <div class="f-address"> 
              <h3>Have a Questions?</h3>
              <address>
                <div>
                  <p><span><ion-icon name="location-outline"></ion-icon></span> <a href="https://goo.gl/maps/egiuCAXr4Xpg5F3z8">West Bengal, India</a> </p>
                </div>    
                <div>
                  <p><span><ion-icon name="call-outline"></ion-icon></span> <a href="tel:+91987654321"> +91 9883493809 </a></p>
                </div>
                <div>
                  <p><span><ion-icon name="mail-outline"></ion-icon></span> <a href="mailto:info@nevillejarvis.com"> rajdeepjash2070@gmail.com</a> </p>
                </div>
              </address>
            </div>

      </div>

          <div class="credits"> © Copyright 2022 Rajdeep jash All rights reserved.</div>
          <div class="scrollTop-style">
              <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>
          </div>
  </footer>
    </div>
  )
}

export default Gynecologist;