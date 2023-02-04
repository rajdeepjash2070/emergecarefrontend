import logo from './logo.svg';
import './App.css';
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login"
import Register from "./Components/Register"
import Admineditdocter from "./Components/Adminedithospital"
import Adminhome from "./Components/Adminhome"
import Home from './Components/Home';
import Docterprofile from './Components/Docterprofile';
import Bookappointment from './Components/Bookappointment';

import Adminprofile from "./Components/Adminprofile"
import Patientdetails from './Components/Patientdetails';
import Userprofile from './Components/Userprofile';
import Addhospital from './Components/Addhospital';
import Hospitallogin from './Components/Hospitallogin';
import Adminambulances from "./Components/Adminambulances"
import Adminbeds from "./Components/Adminbeds"
import Adminreviews from "./Components/Adminreviews"
import Admindoctors from "./Components/Admindoctors"
import Adminaddambulances from "./Components/Adminaddambulances"
import Bookdoctorappointment from './Components/Bookdoctorappointment';
import Hospitalprofile from './Components/Hospitalprofile';
import Beds from './Components/Beds';
import Ambulances from './Components/Ambulances';
import Doctors from "./Components/Doctors"
import Bookbed from './Components/Bookbed';
import Success from './Components/Success';
import Userdashboard from './Components/Userdashboard';
import Emergency from './Components/Emergency';
import Emergecarehome from './Components/Emergecarehome';

function App() {
  return (
    <div className="App">
   
     <Suspense fallback={null}>
    <Router>
   
       <Routes>
              <Route path="/home/:id" element={<Home/>}/>
              <Route path="/register" element={<Register/>}/>
          
              <Route path="/" element={<Emergecarehome/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/userprofile/:id" element={<Userprofile/>}/>
              <Route path="/docterprofile/:id" element={<Docterprofile/>}/>
              <Route path="/adminprofile/:id" element={<Adminprofile/>}/>
              <Route path="/hospitalprofile/:id" element={<Hospitalprofile/>}/>
              <Route path="/bookappointment/:id" element={<Bookappointment/>}/>
              <Route path="/addhospital" element={<Addhospital/>}/>
              <Route path="/adminedithospital/:id" element={<Admineditdocter/>}/>
              <Route path="/adminhome" element={<Adminhome/>}/>
              <Route path="/hospitallogin" element={<Hospitallogin/>}/>
              <Route path="/patientdetails/:id" element={<Patientdetails/>}/>
              <Route path="/adminambulances/:id" element={<Adminambulances/>}/>
              <Route path="/:id/adminaddambulances" element={<Adminaddambulances/>}/>
              <Route path="/admindoctors/:id" element={<Admindoctors/>}/>
              <Route path="/adminreviews/:id" element={<Adminreviews/>}/>
              <Route path="/adminbeds/:id" element={<Adminbeds/>}/>
              <Route path="/beds/:id" element={<Beds/>}/>
              <Route path="/ambulances/:id" element={<Ambulances/>}/>
              <Route path="/doctors/:id" element={<Doctors/>}/>
              <Route path="/bookbed/:id" element={<Bookbed/>}/>
              <Route path="/dashboard/:id" element={<Userdashboard/>}/>
              <Route path="/emergency/:id" element={<Emergency/>}/>
              <Route path="/success" element={<Success/>}/>
              <Route path="/bookdoctorappointment" element={<Bookdoctorappointment/>}/>
            </Routes>
            </Router>
            </Suspense>
          
    </div>
  );
}

export default App;
