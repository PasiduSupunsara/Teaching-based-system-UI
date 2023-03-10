import { Card } from "antd";

export function MessageCard(props){
    return(
        <Card className="MessageCard">
            <div >
                <h1>{props.sid}</h1>
                <h1>{props.message} </h1>
                
            </div> 
        </Card>
    )
}