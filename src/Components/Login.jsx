import React,{useState} from "react"
import { useNavigate } from "react-router-dom"

export const Login = (props) => {
    const [name,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState(null);
    let navigate=useNavigate();
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        const user = {name,password}
        console.log(user);

        fetch('http://localhost:8080/login',{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(user)
        }).then((response)=>{

            console.log("response",response);
            console.log(response.status);
            if(response.status===200){
                navigate("/View")
            }
            else{
               setError("Please try with correct username and password"); 
               navigate("/Login")
            }
        })}
    return (
        <div className="Auth-form-container">
            
            <h1  >LOGIN PAGE</h1>
            

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor ="UserName">UserName</label>
                <input value = {name} onChange={(e) => setUserName(e.target.value)} type= "UserName" placeholder = "Your User Name" id = "UserName" name = "UserName"/>
                <br/>
                <label htmlFor = "Password">Password</label>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type = "Password" placeholder = "Password" id = "Password" name = "Password"/>
                <br/>
                <button type="submit" >Login</button>
                
            </form>
            
            <button className="link-btn" onClick={()=>navigate("/Register")}> Don't have an account? Register here.</button><br/>
            { error}
        </div>
    )
}