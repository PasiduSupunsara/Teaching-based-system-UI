import React,{useState} from "react"
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Button, Form, Input, Typography ,Layout} from "antd";


export const Delete = (props) => {
    const [name,setUserName] = useState('');
    let navigate=useNavigate();
    const principalName = JSON.parse(localStorage.getItem('username'));
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    

    const handleSubmit=(e)=>{
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
    return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
      <div className="appLog">
           <Form className="loginForm" onFinish={handleSubmit}>
           <Typography.Title>User Delete</Typography.Title>
                <Form.Item rules={[{
                    required:true,
                    message:"please enter your username"
                }]}label="Username" name={"my username"}>
                    <Input value = {name} onChange={(e) => setUserName(e.target.value)} placeholder="Your User Name"/>
                </Form.Item>
                <Button type="primary" htmlType="submit" block >Delete</Button>
                <Button type="primary" onClick={()=>navigate("/Dashboard")}>Back</Button>
           </Form> 
        </div>
      </Layout.Content>
    </Layout>
        
    )
}