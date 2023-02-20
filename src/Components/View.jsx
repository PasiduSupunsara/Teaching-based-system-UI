import React from "react"
import { useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar";


export const View = (props) => {
    let navigate=useNavigate();
    
    return (
        <div>
            <Navbar/>
        <div className="View-container">
            <h1 className="Header">USER PAGE</h1><br/>
            <button onClick={()=>{navigate("/Update")}} type="submit" >Update</button><br/>
            <button onClick={()=>{navigate("/Delete")}} type="submit" >Delete</button><br/>
            <button onClick={()=>{navigate("/GetAllUsers")}} type="submit" >GetAllUsers</button><br/>
            <button onClick={()=>{navigate("/GetStudents")}} type="submit" >GetStudents</button><br/>
            
        </div>
        </div>
    )
}