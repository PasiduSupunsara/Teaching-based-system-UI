import React from "react"
import { Link } from "react-router-dom"
import {MyNotification} from './MyNotification'
import {UserProfile} from './UserProfile'

export const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('username'));
   
    return(
        <nav className="navbar">
            <text className="notification">LEARNING MANAGEMENT SYSTEM</text>
            <ul className="notification">
                <Link to="/Home" className="link">Home</Link>
                <Link to="/About"className="link">About</Link>
                
                {
                    user?
                    <>
                    <Link to="/Dashboard"className="link">Dashboard</Link>
                    <MyNotification />
                    </>
                    :
                    <><Link to="/"className="link">Login</Link>
                    <Link to="/Register"className="link">Register</Link>
                    </>
                }
                
            </ul>
            <UserProfile/>

        </nav>
    )
};