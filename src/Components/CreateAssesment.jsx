import { Form,Button,Card,Input } from "antd"
import { useState } from "react"


export const CreateAssesment = (props) => {
    const[duedate,setADueDate] = useState(null)
    const[assesmentname,setAssesmentname] = useState(null)
    const[details,setDetails] = useState(new Date())
    let cid = props.cid;
    let tokenJson = JSON.parse(localStorage.getItem('login'));

    const handleSubmit=(e)=>{
        const assesment={assesmentname,details,cid,duedate}
        console.log(assesment)
        let token = "Bearer "+ tokenJson.accessToken;
        fetch('http://localhost:8080/teacher/CreateNewAssesment',{
          method:"POST",
          headers:{"Content-Type":"application/json",
          "Authorization":token
        },
          body:JSON.stringify(assesment)
        }).then((response)=>{
        })
        }
    return (
        <Card >
           <Form onFinish={handleSubmit}>
            <Form.Item rules={[{
                    required:true,
                    message:"please enter Assesment Name"
                }]}label="Assesment Name" name={"Assesment Name"}>
                    <Input value = {assesmentname} onChange={(e) => setAssesmentname(e.target.value)} placeholder="Enter Assesment Name"/>
            </Form.Item>
            <Form.Item rules={[{
                    required:true,
                    message:"please enter Details"
                }]}label="Details" name={"Details"}>
                    <Input type="text" value = {details} onChange={(e) => setDetails(e.target.value)} placeholder="Enter Assesment Details"/>
            </Form.Item> 
            <Form.Item rules={[{
                    required:true,
                    type:"date",
                    message:"please enter dueDate"
                }]}label="DueDate" name={"DueDate"}>
                    <Input type="date" value = {duedate}  onChange={(e) => setADueDate(e.target.value)} placeholder="Enter Assesment dueDate"/>
            </Form.Item> 
                <Button type="primary" htmlType="submit" >CREATE</Button>
            </Form>
        </Card>
    )
}



