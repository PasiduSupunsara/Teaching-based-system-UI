import React,{useState} from "react"
import { useNavigate } from "react-router-dom";
import {Navbar} from './Navbar'

export const Update = (props) => {
    const [name,setUserName] = useState('');
    const [newRole,setRole] = useState('');
    let navigate=useNavigate();
    let tokenJson = JSON.parse(localStorage.getItem('login'));

    const handleSubmit=(e)=>{
        e.preventDefault()
        const user={name,newRole}
        console.log(user)
        let token = "Bearer "+ tokenJson.token;
        console.log(token);
        fetch('http://localhost:8080/admin/update',{
          method:"PUT",
          headers:{"Content-Type":"application/json",
          "Authorization":token
        },
          body:JSON.stringify(user)
    
      }).then(()=>{
        console.log("User Updated")
      })
      navigate("/View")
    }
    return (
      <div>
        <Navbar/>
        <div className="Delete-form-container">
            <h1 className="Header"> UPDATE PAGE</h1>
            <form className="delete-form" onSubmit={handleSubmit}>
                <label htmlFor ="UserName">User Name</label>
                <input value = {name} onChange={(e) => setUserName(e.target.value)} type= "UserName" placeholder = "Your User Name" id = "UserName" name = "UserName"/>
                <br/>
                <label htmlFor = "New Role">New Role</label>
                <input value = {newRole} onChange={(e) => setRole(e.target.value)} type = "New Role" placeholder = "New Role" id = "New Role" name = "New Role"/>
                <br/>
                
                <button type="submit">Update</button>
                
                
            </form>
            <button onClick={() => navigate('/View')}>Back</button>
        </div>
        </div>
    )
}