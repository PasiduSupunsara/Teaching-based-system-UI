import React,{useState} from "react"
import { useNavigate } from "react-router-dom";


export const Delete = (props) => {
    const [name,setUserName] = useState('');
    let navigate=useNavigate();
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        const user={name}
        console.log(user)
        let token = "Bearer "+ tokenJson.token;
        console.log(token);
        fetch('http://localhost:8080/admin/delete',{
          method:"DELETE",
          headers:{"Content-Type":"application/json",
          "Authorization":token
        },
          body:JSON.stringify(user)
    
      }).then(()=>{
        console.log("User Deleted")
      })
      navigate("/View")
    }
    return (
        <div className="Delete-form-container">
            <form className="Header" onSubmit={handleSubmit}>
            <h1 className="Header">This is Delete page</h1>
                <label htmlFor ="UserName">UserName</label>
                <input value = {name} onChange={(e) => setUserName(e.target.value)} type= "UserName" placeholder = "Your User Name" id = "UserName" name = "UserName"/>
                <br/>
                <button type="submit">Delete</button>
                
                
            </form>
            <button onClick={() => navigate('/View')}>Back</button>
        </div>
    )
}