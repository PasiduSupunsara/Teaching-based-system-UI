import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { About } from './Components/About'
import './App.css';
import { Delete } from './Components/Delete';
import { GetAllUsers } from './Components/GetAllUsers';
import { GetStudents } from './Components/GetStudents';
import { Login } from './Components/Login'
import { Home } from './Components/Home'
import { Register} from './Components/Register'
import { Update} from './Components/Update'
import { View } from './Components/View'
import { Continue } from './Components/Contunue';
import { Navbar } from './Components/Navbar';

function App(){
  return (  
    <div className="App" >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Continue" element={<Continue/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Delete" element={<Delete/>}/>
      <Route path="/GetAllUsers" element={<GetAllUsers/>}/>
      <Route path="/GetStudents" element={<GetStudents/>}/>
      <Route path="/Update" element={<Update/>}/>
      <Route path="/View" element={<View/>}/>
      <Route path="/Register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
  );
}
export default App;



