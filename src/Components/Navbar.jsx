import React from "react"
import { Link,useNavigate } from "react-router-dom"
import {Nav, NavDropdown} from 'react-bootstrap';

export const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('username'));
    let navigate=useNavigate();
    function logout(){
        localStorage.clear();
        navigate("/")
    }
    return(
        <nav className="navbar">
            
            <h3 className="logo">LEARNING MANAGEMENT SYSTEM</h3>
            <ul className="nav-links">
                {
                    user?
                    null
                    :
                    <><Link to="/">Login</Link>
                    <Link to="/Register">Register</Link></>
                }
                
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
            </ul>
            <Nav className="nav">
                {
                    user?
                    <NavDropdown className="profile" title={user}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>:null
                }
                
            </Nav>

        </nav>
    )
};