import { Button } from "antd";
import { useNavigate, useLocation} from "react-router-dom";
import { Navbar } from "./Navbar";

export function CourseDetails(){
    const navigate = useNavigate();
    const location = useLocation();
    const handleSbmit = (e) =>{
        navigate("/Dashboard");
    }

    return(
        <div>
            <Navbar/>
            <div>
            <p>{location.state.courseid}</p>
            <p>{location.state.coursename}</p>
            <p>{location.state.details}</p>
            <p>{location.state.duration}</p>
            <p>{location.state.fee}</p>
            <p>{location.state.startdate}</p>
            <p>{location.state.medium}</p>
            </div>
            
            <p>{location.state.courseid}</p>
            <p>{location.state.coursename}</p>
            <Button onClick={handleSbmit}>Back</Button>
        </div>
    )
}