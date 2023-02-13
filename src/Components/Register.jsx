import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


export const Register = (props) => {
    const [id,setUserId] = useState('');
    const [name,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState('');
    let navigate=useNavigate();
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        const user={id,name,password,role}
        console.log(user)
        fetch('http://localhost:8080/signup',{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(user)
    
      }).then(()=>{
        console.log("New User added")
      })
      navigate("/View")
    }
    return (
        <>
            <nav>
                <ul>
                    
                    <Link to="/Login">Login</Link>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/">Logout</Link>
                </ul>
            </nav>
            <h1>This is Register page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor ="UserId">UserId</label>
                <input value = {id} onChange={(e) => setUserId(e.target.value)} type= "UserId" placeholder = "Your User Id" id = "UserId" name = "UserId"/>
                <br/>
                <label htmlFor ="UserName">UserName</label>
                <input value = {name} onChange={(e) => setUserName(e.target.value)} type= "UserName" placeholder = "Your User Name" id = "UserName" name = "UserName"/>
                <br/>
                <label htmlFor = "Password">Password</label>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type = "Password" placeholder = "Password" id = "Password" name = "Password"/>
                <br/>
                <label htmlFor = "Role">Role</label>
                <input value = {role} onChange={(e) => setRole(e.target.value)} type = "Role" placeholder = "Role" id = "Role" name = "Role"/>
                <br/>
                
                <button type="submit">Register</button>
                
                
            </form>
            
            <button onClick={()=>navigate("/Login")}>Already have an account? Login here.</button>
        </>
    )
}