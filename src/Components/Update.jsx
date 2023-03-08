import React,{useState} from "react"
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Typography, Layout } from "antd";
import {Navbar} from './Navbar'

export const Update = (props) => {
    const [name,setUserName] = useState('');
    const principalName = JSON.parse(localStorage.getItem('username'));
    const [newRole,setRole] = useState('');
    let navigate=useNavigate();
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    
    

    const handleSubmit=(e)=>{
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
    return (
      <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
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
      </Layout.Content>
    </Layout>
        
        
    )
}