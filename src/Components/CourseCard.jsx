import { Card } from "antd";
import { MessageOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom"

export function CourseCard(props){
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    <h1>{tokenJson.role}</h1> 
    let navigate=useNavigate();
    function putMessage() {
        navigate("/message" ,{state: {sid:tokenJson.id,cid:props.id}})
    }
    
    return(
        <Card className="UserCard">
            <div >
              

               <h1>{props.name} </h1>

               
                <h1>{props.id}</h1>
                
                <h1>{props.details}</h1>
                <h1>{props.duration}</h1>
                <h1>{props.fee}</h1>
                <h1>{props.startdate}</h1>
                <h1>{props.medium}</h1>
                {<MessageOutlined onClick={putMessage}/>}
            </div> 
        </Card>
    )
}
