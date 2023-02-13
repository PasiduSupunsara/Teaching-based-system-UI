import React from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


export const View = (props) => {
    let navigate=useNavigate();
    
    return (
        <>
            <nav>
                <ul>
                    
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/">Logout</Link>
                </ul>
            </nav>
            <h1>This is user viewing page</h1><br/>
            <button onClick={()=>{navigate("/Update")}} type="submit" >Update</button><br/>
            <button onClick={()=>{navigate("/Delete")}} type="submit" >Delete</button><br/>
            <button onClick={()=>{navigate("/GetAllUsers")}} type="submit" >GetAllUsers</button><br/>
            <button onClick={()=>{navigate("/")}} type="submit" >Logout</button>
         
      
        </>
    )
}