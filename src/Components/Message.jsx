import { useState } from "react"
import { Navbar } from "./Navbar"
import { Button, Form, Input, Typography ,Layout} from "antd";
import { useNavigate, useLocation} from "react-router-dom";
import { Select } from 'antd';


export const Message = () => {
    const [form] = Form.useForm();
    const[message,setmessage] = useState(null);
    const[sender,setSender]=useState('STUDENTS');
    const location = useLocation();
    const sid = location.state.sid;
    const cid = location.state.cid;
    const name = location.state.name;

    let navigate=useNavigate();
    let tokenJson = JSON.parse(localStorage.getItem('login'));

    const handleSubmit = () =>{
        let token = "Bearer "+ tokenJson.accessToken;
        form.resetFields();
        if(tokenJson.role === "STUDENT"){
          const messages = {name,sid,message,cid};
          console.log(messages);
          fetch('http://localhost:8080/student/putMessage',{
              method:"POST",
              headers:{"Content-Type":"application/json",
              "Authorization":token
             },
              body:JSON.stringify(messages)
            })
        }
        else if(tokenJson.role === "TEACHER"){
          if (cid === "0"){
            const messages = {name,sid,message};
            console.log(messages);
            fetch('http://localhost:8080/teacher/putMessage',{
                method:"POST",
                headers:{"Content-Type":"application/json",
                "Authorization":token
               },
                body:JSON.stringify(messages)
              })
          }
          else{
            const messages = {cid,sid,message,sender};
            console.log(messages);
            fetch('http://localhost:8080/putMessageCourse',{
                method:"POST",
                headers:{"Content-Type":"application/json",
                "Authorization":token
               },
                body:JSON.stringify(messages)
              })
          }
        }
        else if(tokenJson.role === "ADMIN"){
          if (cid === "0"){
            const messages = {name,sid,message};
            console.log(messages);
            fetch('http://localhost:8080/admin/putMessage',{
                method:"POST",
                headers:{"Content-Type":"application/json",
                "Authorization":token
               },
                body:JSON.stringify(messages)
              })
          }
          else{
            const messages = {cid,sid,message,sender};
            console.log(messages);
            fetch('http://localhost:8080/putMessageCourse',{
                method:"POST",
                headers:{"Content-Type":"application/json",
                "Authorization":token
               },
                body:JSON.stringify(messages)
              })
          }
          
        }
          
      }

        const onChange = (value) => {
          setSender(value);
        };

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
                        message:"please enter your message"
                    }]}label="message" name={"my message"}>
                        <Input value = {message} onChange={(e) => setmessage(e.target.value)} placeholder="Enter your message"/>
                    </Form.Item>
                    {
                      (tokenJson.role === "ADMIN" && location.state.state!=="0")?
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
                          value: 'USERS',
                          label: 'All Users',
                        },
                        {
                          value: 'STUDENTS',
                          label: 'All Students',
                        },
                        {
                          value: 'TEACHERS',
                          label: 'Only Teachers',
                        },
                      ]} />
                        :
                        null
                    }
                    <Button type="primary" htmlType="submit" block >Send</Button>
                    <Button type="primary" onClick={()=>navigate("/Dashboard")}>Back</Button>
               </Form>
            </div>
          </Layout.Content>
        </Layout>
        )
}