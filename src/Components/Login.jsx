import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, Input, message, Typography } from "antd";
import { Navbar } from "./Navbar";

export const Login = (props) => {
    const [name,setUserName] = useState('');
    const [password,setPassword] = useState('');
    let navigate=useNavigate();
    

    const handleSubmit = (e) =>{
       const user = {name,password}
        fetch('http://localhost:8080/login',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
          }).then((response)=>{
              if (response.status === 200){
                response.json().then((result) => {
                    localStorage.setItem('username',JSON.stringify(user.name));
                    localStorage.setItem('login',JSON.stringify({
                        login:true,
                        accessToken:result.accessToken,
                        refreshToken:result.refreshToken,
                        role:result.role,
                        id:result.uid
                    }))
                    message.success("Login succesful")
                navigate("/Dashboard")
                  })
                
              }
              if (response.status === 401){
                message.error("Please Try again with correct username and password")
                
              }
              
              
          })
        }
    return (
        <div>
            <Navbar/>
        <div className="appLog">
           <Form className="loginForm" onFinish={handleSubmit}>
           <Typography.Title>Welcome Back!</Typography.Title>
                <Form.Item rules={[{
                    required:true,
                    message:"please enter your username"
                }]}label="Username" name={"my username"}>
                    <Input value = {name} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your username"/>
                </Form.Item>
                <Form.Item rules={[{
                    required:true,
                    message:"please enter your password"
                }]}label="Password" name={"my password"}>
                    <Input.Password value = {name} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
                </Form.Item>
                <Button type="primary" htmlType="submit" block >Login</Button>
                <button className="link-btn" onClick={()=>navigate("/Register")}>You don't have an account?<br/> Register here.</button>
                
           </Form>
           
        </div>
        </div>
    )
}