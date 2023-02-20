import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav className="navbar">
            <h3 className="logo">LOGO</h3>
            <ul className="nav-links">
                <Link to="/">Login</Link>
                <Link to="/Register">Register</Link>
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Home">Logout</Link>
            </ul>

        </nav>
    )
}