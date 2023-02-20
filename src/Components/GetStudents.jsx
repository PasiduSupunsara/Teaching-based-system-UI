import React,{useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const GetStudents = (props) => {
    const [user,setUser] = useState([]);
    let navigate=useNavigate();
    let tokenJson = JSON.parse(localStorage.getItem('login'));

useEffect(()=>{
  let token = "Bearer "+ tokenJson.token;
  //console.log(token);
    fetch("http://localhost:8080/getAllStudent",{
      method:"GET",
      headers:{"Authorization":token
        },
    })
    .then(res=>res.json())
    .then((result)=>{
    setUser(result);
    }
    )   
});

return (
    <div >
      <Navbar/>
    <h1 className="Header">User Details</h1>
    <ul >
      {user.map((item, index) => (
        <li  key={index}>
        <form  className="All-Details">
        User Name {" "}:{" "}{item.name} <br/> 
        First Name{" "}:{" "}{item.firstName  }<br/>
        Last Name{" "}:{" "}{item.lastName}<br/>
        ID Number{" "}:{" "}{item.idNumber}<br/>
        Email{" "}:{" "}{item.email}<br/>
        Address{" "}:{" "}{item.address}<br/>
        Role{" "}:{" "}{item.role}<br/>
        BirthDay{" "}:{" "}{item.dateOfBirth}<br/>
        Phone Number{" "}:{" "}{item.phoneNumber}<br/>
        </form>
        <hr style={{ border: '1px solid black', margin: '20px 0' }} /></li>
        
      ))}
    </ul>
    <button onClick={() => navigate('/View')}>Back</button>
    
    </div>
  )
}
