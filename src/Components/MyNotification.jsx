import { BellOutlined } from '@ant-design/icons';
import { Badge} from 'antd';
import { useState ,useEffect} from 'react';


export function MyNotification(props) {
  const[notificationCount,setNotificationCount] = useState(1)

  useEffect(()=>{
    
  },[notificationCount]);

  return (
      (notificationCount !== 0)?
      <Badge className='notification' color='#0f0' size='default' count={notificationCount}>
        <BellOutlined className='notificationbell'/>
      </Badge>
      :
      <BellOutlined className='notificationbell'/>

    
  )
    
    
  
}
