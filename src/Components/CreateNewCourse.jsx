import React,{useState} from "react"
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography ,Layout} from "antd";
import {Navbar} from './Navbar'

export const CreateNewCourse = (props) => {
    const [courseid,setCourseid] = useState('');
    const [coursename,setCourseName] = useState('');
    const [medium,setmedium] = useState('');
    const [description,setDescription] = useState('');
    const [startdate,setStartdate] = useState(new Date());
    const [duration,setDuration] = useState('');
    const [fee,setFee] = useState('');


    let navigate=useNavigate();
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    
    

    const handleSubmit=(e)=>{
        const user={courseid,coursename,medium,description,startdate,duration,fee}
        console.log(user)
        let token = "Bearer "+ tokenJson.accessToken;
        console.log(token);
        fetch('http://localhost:8080/admin/saveCourse',{
          method:"POST",
          headers:{"Content-Type":"application/json",
          "Authorization":token
        },
          body:JSON.stringify(user)
      }).then((response)=>{
        navigate("/Dashboard")
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
           <Typography.Title>Course Creation</Typography.Title>
                <Form.Item rules={[{
                    required:true,
                    message:"please enter courseid"
                }]}label="courseid" name={"courseid"}>
                    <Input value = {courseid} onChange={(e) => setCourseid(e.target.value)} placeholder="courseid"/>
                </Form.Item>

                <Form.Item rules={[{
                    required:true,
                    message:"please enter coursename"
                }]}label="coursename" name={"coursename"}>
                    <Input value = {coursename} onChange={(e) => setCourseName(e.target.value)} placeholder="coursename"/>
                </Form.Item>

                <Form.Item rules={[{
                    required:true,
                    message:"please enter medium"
                }]}label="medium" name={"medium"}>
                    <Input value = {medium} onChange={(e) => setmedium(e.target.value)} placeholder="medium"/>
                </Form.Item>

                <Form.Item rules={[{
                    required:true,
                    message:"please enter description"
                }]}label="description" name={"description"}>
                    <Input value = {description} onChange={(e) => setDescription(e.target.value)} placeholder="description"/>
                </Form.Item>

                <Form.Item rules={[{
                    required:true,
                    message:"please enter startdate"
                }]}label="startdate" name={"startdate"}>
                    <Input type="date" value = {startdate} onChange={(e) => setStartdate(e.target.value)} placeholder="startdate"/>
                   
                </Form.Item>

                <Form.Item rules={[{
                    required:true,
                    message:"please enter duration"
                }]}label="duration" name={"duration"}>
                    <Input value = {duration} onChange={(e) => setDuration(e.target.value)} placeholder="duration"/>
                </Form.Item>

                <Form.Item rules={[{
                    required:true,
                    message:"please fee"
                }]}label="fee" name={"fee"}>
                    <Input value = {fee} onChange={(e) => setFee(e.target.value)} placeholder="fee"/>
                </Form.Item>

                <Button type="primary" htmlType="submit" block >Save</Button>
                <Button type="primary" onClick={()=>navigate("/Dashboard")}>Back</Button>
           </Form> 
           
        </div>
      </Layout.Content>
    </Layout>
      
        
        
    )
}