import { Card } from "antd";

export function UserCard(props){
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    <h1>{tokenJson.role}</h1> 
    
    return(
        <Card className="UserCard">
            <div >
              

               <h1>{props.firstName} {props.lastName}</h1>

                <h1>{props.role}</h1>
                <h1>{props.name}</h1>
                
                <h1>{props.birthday}</h1>
                <h1>{props.address}</h1>
                <h1>{props.phoneNumber}</h1>
                <h1>{props.email}</h1>

            </div> 
        </Card>
    )
}
