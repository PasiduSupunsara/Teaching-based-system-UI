import React,{useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const GetAllUsers = (props) => {
    const [user,setUser] = useState([]);
    let navigate=useNavigate();

useEffect(()=>{
    fetch("http://localhost:8080/getAllUsers")
    .then(res=>res.json())
    .then((result)=>{
    setUser(result);
    }
    )
    
}, []);



return (
    <>
    <nav>
                <ul>
                    
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/">Logout</Link>
                </ul>
            </nav>
    <h1>User Details</h1>
    <ul>
      {user.map((item, index) => (
        <li key={index}>Name {" "}:{" "}{item.name} <br/>  Role{" "}:{" "}{item.role}<br/><hr style={{ border: '1px solid black', margin: '20px 0' }} /></li>
        
      ))}
    </ul>
    <button onClick={() => navigate('/View')}>Back</button>
    
    </>
  )
}
