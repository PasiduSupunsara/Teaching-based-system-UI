import { Card ,Checkbox} from "antd";
import { useState,useEffect } from "react";

export function MessageCard(props){
    const[state,setState] = useState(false);
    const[count,setCount] = useState(0);
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    let mid = props.mid;

    const handleCheckboxChange = () => {
        if(state=== false){
            setCount(0)
            setState(true);
        }
        else if(state===true){
            setCount(1)
            setState(false);
        }
        
        let token = "Bearer "+ tokenJson.accessToken;
        let id = {mid,count}
        fetch('http://localhost:8080/updateStatus',{
          method:"PUT",
          headers:{"Content-Type":"application/json",
          "Authorization":token
        },
          body:JSON.stringify(id)
            }).then((response)=>{  
            })
        
      };

      useEffect(()=>{
        let token = "Bearer "+ tokenJson.accessToken;
        let id = props.mid;
        const mid = {id}
         fetch('http://localhost:8080/getstatus',{
             method:"POST",
             headers:{"Content-Type":"application/json",
             "Authorization":token
            },
             body:JSON.stringify(mid)
           }).then((response)=>
           response.json())
           .then((result)=>{
            if(result===1){
                setCount(0)
                setState(true);
            }
            else if(result===0){
                setCount(1)
                setState(false);
            }
       })
      },[props.mid,state,tokenJson.accessToken]);
    
    return(
        <Card className="MessageCard">
            <div >
                <h1>{props.sid}</h1>
                <h1>{props.message} </h1>
                <h1>{props.mid} </h1>
                <Checkbox checked={state} onChange={handleCheckboxChange}>Read</Checkbox>
                
            </div> 
        </Card>
    )
}