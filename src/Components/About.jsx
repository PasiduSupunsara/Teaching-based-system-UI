import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/Register">Register</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/">Logout</Link>
                </ul>
            </nav>
            <h1>This is about page</h1>
        </div>
    )
}