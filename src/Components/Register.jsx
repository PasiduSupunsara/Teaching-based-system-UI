import React,{useState} from "react"
import { useNavigate } from "react-router-dom"


export const Register = (props) => {
    const [name,setUserName] = useState(null);
    const [firstName,setFirstName] = useState(null);
    const [lastName,setLastName] = useState(null);
    const [email,setEmail] = useState(null);
    const [address,setAddress] = useState(null);
    const [password,setPassword] = useState(null);
    const [phoneNumber,setPhoneNumber] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [idNumber, setIdNumber] = useState(null);
    const [error, setError] = useState(null);


    let navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
        const user={firstName,name,password,lastName,address,phoneNumber,email,dateOfBirth,idNumber}
        fetch('http://localhost:8080/signup',{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(user)
    
        }).then((response)=>{
            console.log("response",response.status);
            if(response.status===200){
                setError("Successful registration. You can log now.");
                navigate("/Login");
                console.log("New User added");
                console.log(user);
            }
            else if(response.status===201){
                setError("Please Enter Valid Password"); 
                navigate("/Register");
                console.log(user);
            }
            else if(response.status===411){
                setError("Please Enter Valid Phone Number"); 
                navigate("/Register");
                console.log(user);
            }
            else if(response.status===207){
                setError("Please Enter Valid ID Number"); 
                navigate("/Register");
                console.log(user);
            }
            else if(response.status===500){
                setError("Some details are used previously"); 
                navigate("/Register");
                console.log(user);
            }

            else{
               setError("Please try with correct username and password"); 
               navigate("/Register");
               console.log(user);
            }
        })
        }
    return (
        <div className="auth-form-container">
            <h1>This is Register page</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                
                <label htmlFor ="UserName">User Name</label>
                <input value = {name} onChange={(e) => setUserName(e.target.value)} type= "UserName" placeholder = "Your User Name" id = "UserName" name = "UserName"/>
                <br/>
                <label htmlFor = "Password">Password</label>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type = "Password" placeholder = "Password" id = "Password" name = "Password"/>
                <br/>
                <label htmlFor ="FirstName">First Name</label>
                <input value = {firstName} onChange={(e) => setFirstName(e.target.value)} type= "FirstName" placeholder = "First Name" id = "FirstName" name = "FirstName"/>
                <br/>
                <label htmlFor ="LastName">Last Name</label>
                <input value = {lastName} onChange={(e) => setLastName(e.target.value)} type= "LastName" placeholder = "Last Name" id = "LastName" name = "LastName"/>
                <br/>
                <label htmlFor = "Email">Email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "Email" placeholder = "Email" id = "Email" name = "Email"/>
                <br/>
                <label htmlFor = "Address">Address</label>
                <input value = {address} onChange={(e) => setAddress(e.target.value)} type = "Address" placeholder = "Address" id = "Address" name = "Address"/>
                <br/>
                <label htmlFor = "PhoneNumber">Phone Number</label>
                <input value = {phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type = "PhoneNumber" placeholder = "Phone Number" id = "PhoneNumber" name = "PhoneNumber"/>
                <br/>
                <label htmlFor = "DateOfBirth">Birthday</label>
                <input value = {dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type = "DateOfBirth" placeholder = "year/mm/dd" id = "DateOfBirth" name = "DateOfBirth"/>
                <br/>
                <label htmlFor = "IdNumber">ID Number</label>
                <input value = {idNumber} onChange={(e) => setIdNumber(e.target.value)} type = "IdNumber" placeholder = "Id Number" id = "IdNumber" name = "IdNumber"/>
                <br/>
                
                
                
                <button type="submit">Register</button>
                
                
            </form>
            
            <button className="link-btn" onClick={()=>navigate("/Login")}>Already have an account? Login here.</button><br/>
            {error}
        </div>
    )
}