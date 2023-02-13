import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { About } from './Components/About'
import './App.css';
import { Delete } from './Components/Delete';
import { GetAllUsers } from './Components/GetAllUsers';
import { Login } from './Components/Login'
import { Register} from './Components/Register'
import { Update} from './Components/Update'
import { View } from './Components/View'
import { Home } from './Components/Home';



function App(){

  return (  


    
    <div >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Delete" element={<Delete/>}/>
      <Route path="/GetAllUsers" element={<GetAllUsers/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Update" element={<Update/>}/>
      <Route path="/View" element={<View/>}/>
      <Route path="/Register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>

    
  );
}


export default App;



