import { useState } from "react"
import { Navbar } from "./Navbar"
import { Button, Form, Input, Typography ,Layout} from "antd";
import { useNavigate, useLocation} from "react-router-dom";


export const Message = () => {
    const [form] = Form.useForm();
    const[message,setmessage] = useState(null);
    const location = useLocation();
    const sid = location.state.sid;
    const name = location.state.name;
    let navigate=useNavigate();
    let tokenJson = JSON.parse(localStorage.getItem('login'));

    const handleSubmit = () =>{
        let token = "Bearer "+ tokenJson.accessToken;
        const messages = {name,sid,message}
        console.log(messages)
        form.resetFields();
         fetch('http://localhost:8080/putMessage',{
             method:"POST",
             headers:{"Content-Type":"application/json",
             "Authorization":token
            },
             body:JSON.stringify(messages)
           })
         }

    
    return (
        <Layout>
          <Layout.Header>
            <Navbar />
          </Layout.Header>
          <Layout.Content>
          <div className="appLog">
               <Form className="loginForm" form={form} onFinish={handleSubmit}>
               <Typography.Title>Send Message</Typography.Title>
                    <Form.Item rules={[{
                        required:true,
                        message:"please enter your username"
                    }]}label="Username" name={"my username"}>
                        <Input value = {message} onChange={(e) => setmessage(e.target.value)} placeholder="Enter your message"/>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" block >Send</Button>
                    <Button type="primary" onClick={()=>navigate("/Dashboard")}>Back</Button>
               </Form>
            </div>
          </Layout.Content>
        </Layout>
        )
}