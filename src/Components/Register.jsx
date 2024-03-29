import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, Input, message, Typography,Layout } from "antd";
import {Navbar} from './Navbar';


export const Register = (props) => {
    const [name,setUserName] = useState(null);
    const [firstName,setFirstName] = useState(null);
    const [lastName,setLastName] = useState(null);
    const [email,setEmail] = useState(null);
    const [address,setAddress] = useState(null);
    const [password,setPassword] = useState(null);
    const [phoneNumber,setPhoneNumber] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [idNumber, setIdNumber] = useState(null);
    const [form] = Form.useForm();
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 100); 
    const mindate = minDate.toISOString().substr(0, 10); 

    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 10); 
    const maxdate = maxDate.toISOString().substr(0, 10); 



    let navigate=useNavigate();

    const handleSubmit=(e)=>{
        const user={firstName,name,password,lastName,address,phoneNumber,email,dateOfBirth,idNumber}
        form.resetFields();
        fetch('http://localhost:8080/signup',{
          method:"POST",
          headers:{"Content-Type":"application/json"
        },
          body:JSON.stringify(user)
    
        }).then((response)=>{
            console.log("response",response.status);
            if(response.status===200){
                message.success("Registration successful")
                navigate("/");
                console.log("New User added");
                console.log(user);
            }
            else if(response.status===201){
                message.warning("Please Enter Valid Password")
                navigate("/Register");
                console.log(user);
            }
            else if(response.status===400){
                message.warning("Please Enter Valid Name")
                navigate("/Register");
                console.log(user);
            }
            else if(response.status===406){
                message.warning("Please enter valid User Name")
                navigate("/Register");
                console.log(user);
            }
            else if(response.status===411){
                message.warning("Please Enter Valid Phone Number")
                navigate("/Register");
                console.log(user);
            }
            else if(response.status===207){
                message.warning("Please Enter Valid ID Number")
                navigate("/Register");
                console.log(user);
            }
            else if(response.status===500){
                message.warning("Some details are used previously/Fill all details")
                message.warning("Shello")
                navigate("/Register");
                console.log(user);
            }
            else if(response.status===303){
                message.warning("Please enter valid birthday (It should be within past 100 years and past 20 years")
                message.warning("Shello")
                navigate("/Register");
                console.log(user);
            }

            else{
                message.warning("Please try with correct username and password")
               navigate("/Register");
               console.log(user);
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
           <Form className="regForm" form={form} onFinish={handleSubmit}>
           <Typography.Title>Welcome Back!</Typography.Title>
           <Form.Item rules={[{
                    required:true,
                    type:"string",
                    message:"please enter your username"
                }]}label="Username" name={"my username"}>
                    <Input value = {name} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your username"/>
            </Form.Item>
            <Form.Item rules={[{
                    required:true,
                    message:"please enter your password"
                }]}label="password" name={"my password"}>
                    <Input.Password value = {password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
            </Form.Item>
            <Form.Item rules={[{
                    required:true,
                    message:"please enter your FirstName"
                }]}label="FirstName" name={"my FirstName"}>
                    <Input value = {firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your FirstName"/>
            </Form.Item> 
            <Form.Item rules={[{
                    required:true,
                    message:"please enter your LastName"
                }]}label="LastName" name={"my LastName"}>
                    <Input value = {lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your LastName"/>
            </Form.Item> 
            <Form.Item rules={[{
                    required:true,
                    type:"email",
                    message:"please enter your Email"
                }]}label="Email" name={"my Email"}>
                    <Input value = {email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email"/>
            </Form.Item> 
            <Form.Item rules={[{
                    required:true,
                    message:"please enter your Address"
                }]}label="Address" name={"my Address"}>
                    <Input value = {address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your Address"/>
            </Form.Item> 
            <Form.Item rules={[{
                    required:true,
                    message:"please enter your PhoneNumber"
                }]}label="Phone Number" name={"my PhoneNumber"}>
                    <Input value = {phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your PhoneNumber"/>
            </Form.Item> 
            <Form.Item rules={[{
                    required:true,
                    type:"date",
                    message:"please enter your Birthday"
                }]}label="Birthday" name={"my Birthday"}>
                    
                    <Input type="date" value = {dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} 
                     min={mindate} max={maxdate} placeholder="yyyy/mm/dd"/>
                    
                     
            </Form.Item> 
            <Form.Item rules={[{
                    required:true,
                    message:"please enter your ID Number"
                }]}label="ID Number" name={"my ID Number"}>
                    <Input value = {idNumber} onChange={(e) => setIdNumber(e.target.value)} placeholder="Enter your ID Number"/>
            </Form.Item> 
                <Button type="primary" htmlType="submit" block>Register</Button>
                <button className="link-btn" onClick={()=>navigate("/")}>Already have an account?<br/> Login here.</button>
            </Form>
        </div>
      </Layout.Content>
    </Layout>
        
        

    )
}







