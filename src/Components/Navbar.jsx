import React from "react";

export const Navbar = () => {
    return(
        <div>
            <nav>
                <ul>
                    
                    <Link to="/Login">Login</Link>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/">Logout</Link>
                </ul>
            </nav>
        </div>
    )
}