import React from "react"
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Continue = () => {
    let navigate=useNavigate();
    return(
        <div>
            <Navbar/>
            <h1>Successful Registration</h1>
            <button onClick={() => navigate("/View")}>Continue</button>
        </div>
    )
}