import { BellOutlined } from '@ant-design/icons';
import { Badge} from 'antd';
import { useState ,useEffect} from 'react';
import { useNavigate} from "react-router-dom";


export function MyNotification() {
  const[notificationCount,setNotificationCount] = useState(0)
  let tokenJson = JSON.parse(localStorage.getItem('login'));
  const navigate = useNavigate();
  useEffect(()=>{
    let token = "Bearer "+ tokenJson.accessToken;
    let id = tokenJson.id;
    const messages = {id}
    fetch('http://localhost:8080/countMessages',{
      method:"POST",
      headers:{"Content-Type":"application/json",
      "Authorization":token
     },
      body:JSON.stringify(messages)
    }).then((response)=>
    response.json())
    .then((result)=>{
    setNotificationCount(result);
    })
     
  },[notificationCount,tokenJson.id,tokenJson.accessToken]);

  function handle(){
    navigate("/SeeNotification")
  }

  return (
      (notificationCount !== 0)?
      <Badge className='notification' color='#0f0' size='default' count={notificationCount}>
        <BellOutlined className='notificationbell' onClick={handle}/>
      </Badge>
      :
      <BellOutlined className='notificationbell' onClick={handle}/> 
  )
}
