import {Button, Card, message, Progress} from 'antd'
import { useState } from 'react';

export function CardComponent(props){
    const sid = props.id;
    const courseid = props.courseid;
    const[switchEnroll,setSwitchEnroll]= useState("Enroll")

    let tokenJson = JSON.parse(localStorage.getItem('login'));

    function precentageCal(startDate,date){
        const val = (((date - startDate)/ (1000 * 60 * 60 * 24))/(6*30))*100;
        return Math.round(val)
    }

    const handleSubmit = (e) =>{
        const id = {sid,courseid}
        let token = "Bearer "+ tokenJson.accessToken;
        const mapcoursestudent= {id}
         fetch('http://localhost:8080/student/mapStudentCourse',{
             method:"POST",
             headers:{"Content-Type":"application/json",
             "Authorization":token
            },
             body:JSON.stringify(mapcoursestudent)
           }).then((response)=>{  
            if (response.status === 200){
                message.success("success")
                setSwitchEnroll("Unenroll");
            }else{
                message.error("something wrong")
            }
           })
         }
    
    return(
        <Card className="dashboard-card">
            <div className='container-card'>
            <h2>{props.coursename}</h2>
            <h4>{props.courseid}</h4>
            <h4>{props.name}</h4>
            <Progress className='progerss' percent={precentageCal(new Date(props.startdate),new Date())}></Progress>
            <Button>Details</Button>
            <Button onClick={handleSubmit} htmlType="submit">{switchEnroll}</Button>
            </div> 
        </Card>
    )
}
