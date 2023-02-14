import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <form>
            
        
        <nav>
            <ul>
                <Link to="/Register">Register</Link>
                <Link to="/Login">Login</Link>
                <Link to="/About">About</Link>
            </ul>
        </nav>
        <h1 >This is Home page</h1>
        </form>
        
            
            
        
    )
}