import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { About } from './Components/About';
import './App.css';
import { Delete } from './Components/Delete';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { Register} from './Components/Register';
import { Update} from './Components/Update';
import { Dashboard } from './Components/Dashboard';
import {CreateNewCourse} from './Components/CreateNewCourse'
import { GetAllCourses } from './Components/GetAllCourses';
import {GetCourseById} from './Components/GetCoureseById';
import { CourseDetails } from './Components/CourseDetails';
import { UserDetails } from './Components/UserDetails';
import {Submission} from './Components/Submission';
import {Message} from './Components/Message'
import {SeeNotification} from './Components/SeeNotification'

function App(){
  return (  
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Delete" element={<Delete/>}/>
      <Route path="/Update" element={<Update/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/CreateNewCourse" element={<CreateNewCourse/>}/>
      <Route path="/GetAllCourses" element={<GetAllCourses/>}/>
      <Route path="/GetCourseById" element={<GetCourseById/>}/>
      <Route path="/CourseDetails" element={<CourseDetails/>}/>
      <Route path="/UserDetails" element={<UserDetails/>}/>
      <Route path='/Submission' element={<Submission/>}/>
      <Route path="/message" element={<Message/>}/>
      <Route path="/SeeNotification" element={<SeeNotification/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
  );
}
export default App;



