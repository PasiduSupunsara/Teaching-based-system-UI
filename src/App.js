import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { About } from './Components/About'
import './App.css';
import { Delete } from './Components/Delete';
import { GetAllUsers } from './Components/GetAllUsers';
import { GetStudents } from './Components/GetStudents';
import { Login } from './Components/Login'
import { Register} from './Components/Register'
import { Update} from './Components/Update'
import { View } from './Components/View'
import { Continue } from './Components/Contunue';

function App(){
  return (  
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Continue" element={<Continue/>}/>
      <Route path="/About" element={<About/>}/>
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



