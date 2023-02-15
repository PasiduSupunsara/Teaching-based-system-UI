import React from "react"
import { useNavigate } from "react-router-dom";

export const Continue = () => {
    let navigate=useNavigate();
    return(
        <div>
            <h1>Successful Registration</h1>
            <button onClick={() => navigate("/View")}>Continue</button>
        </div>
    )
}