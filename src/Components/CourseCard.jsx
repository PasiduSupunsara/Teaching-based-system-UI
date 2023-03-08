import { Card } from "antd";

export function CourseCard(props){
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    <h1>{tokenJson.role}</h1> 
    
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

            </div> 
        </Card>
    )
}
