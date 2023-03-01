import { Button } from "antd";
import { useNavigate, useLocation} from "react-router-dom";

export function CourseDetails(props){
    const navigate = useNavigate();
    const location = useLocation();
    const handleSbmit = (e) =>{
        navigate("/Dashboard");
    }

    return(
        <div>
            <p>{location.state.courseid}</p>
            <p>{location.state.coursename}</p>
            <p>{location.state.details}</p>
            <p>{location.state.duration}</p>
            <p>{location.state.fee}</p>
            <p>{location.state.startdate}</p>
            <p>{location.state.medium}</p>
            <Button onClick={handleSbmit}>Back</Button>
        </div>
    )
}