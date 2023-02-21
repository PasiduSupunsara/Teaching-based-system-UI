import React,{useState} from "react"
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
import {Navbar} from './Navbar'

export const Update = (props) => {
    const [name,setUserName] = useState('');
    const [newRole,setRole] = useState('');
    let navigate=useNavigate();
    let tokenJson = JSON.parse(localStorage.getItem('login'));

    const handleSubmit=(e)=>{
        const user={name,newRole}
        console.log(user)
        let token = "Bearer "+ tokenJson.accessToken;
        console.log(token);
        fetch('http://localhost:8080/admin/update',{
          method:"PUT",
          headers:{"Content-Type":"application/json",
          "Authorization":token
        },
          body:JSON.stringify(user)
    
      }).then(()=>{
        console.log("User Updated")
      })
      navigate("/Dashboard")
    }
    return (
      <div>
        <Navbar/>
        <div className="appLog">
           <Form className="loginForm" onFinish={handleSubmit}>
           <Typography.Title>User Update</Typography.Title>
                <Form.Item rules={[{
                    required:true,
                    message:"please enter your username"
                }]}label="Username" name={"my username"}>
                    <Input value = {name} onChange={(e) => setUserName(e.target.value)} placeholder="Your User Name"/>
                </Form.Item>
                <Form.Item rules={[{
                    required:true,
                    message:"please enter NEW ROLE"
                }]}label="newRole" name={"NEW ROLE"}>
                    <Input value = {newRole} onChange={(e) => setRole(e.target.value)} placeholder="New Role"/>
                </Form.Item>
                <Button type="primary" htmlType="submit" block >Update</Button>
                <Button type="primary" onClick={()=>navigate("/Dashboard")}>Back</Button>
           </Form> 
           
        </div>
        </div>
    )
}