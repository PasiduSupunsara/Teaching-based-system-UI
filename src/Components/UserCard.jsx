import { Card } from "antd";
import { MessageOutlined,DeleteOutlined ,UserSwitchOutlined} from '@ant-design/icons';
import { useNavigate} from "react-router-dom"
import { Select,message } from 'antd';
import {useState} from 'react'

export function UserCard(props){
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    let navigate=useNavigate();
    const principalName = JSON.parse(localStorage.getItem('username'));
    const [newRole,setnewRole]= useState("STUDENT");
    let name = props.name;

    function putMessage() {
        navigate("/message" ,{state: {sid:tokenJson.id,name:props.name,cid:"0",state:"0"}})
    }
    const userDelete = () =>{
        const user={name,principalName}
        console.log(user)
        let token = "Bearer "+ tokenJson.accessToken;
        console.log(token);
        fetch('http://localhost:8080/admin/delete',{
          method:"DELETE",
          headers:{"Content-Type":"application/json",
          "Authorization":token
        },
          body:JSON.stringify(user)
    
      }).then(()=>{
        console.log("User Deleted")
      })
      navigate("/Dashboard")
    }

    const roleChange = () =>{
        const user={name,newRole,principalName}
        let token = "Bearer "+ tokenJson.accessToken;
        fetch('http://localhost:8080/admin/update',{
          method:"PUT",
          headers:{"Content-Type":"application/json",
          "Authorization":token
        },
          body:JSON.stringify(user)
      }).then((response)=>{
        if (response.status === 200){
          message.success("Update successful")
          navigate("/Dashboard");
        }
        else if (response.status === 203){
          message.error("You can't update your self")
          navigate("/update");
        }
        else{
          message.error("Something wrong please try again")
          navigate("/update");
        } 
    })
    }

    const onChange = (value) => {
        setnewRole(value);
      };

    
    
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
                {
                    ((tokenJson.role=== "TEACHER")||(tokenJson.role=== "ADMIN"))?
                    <>
                         {<MessageOutlined onClick={putMessage}/>}
                         <br/>
                         {<DeleteOutlined  onClick={userDelete}/>}
                         <br/>
                         <Select
                            className="drop"
                            showSearch
                            placeholder="Select your option"
                            onChange={onChange}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                value: 'STUDENT',
                                label: 'STUDENT',
                                },
                                {
                                value: 'ADMIN',
                                label: 'ADMIN',
                                },
                                {
                                value: 'TEACHER',
                                label: 'TEACHER',
                                },
                        ]} />
                        {<UserSwitchOutlined onClick={roleChange}/>}
                    </>
                    :
                    null
                }
            </div> 
        </Card>
    )
}
