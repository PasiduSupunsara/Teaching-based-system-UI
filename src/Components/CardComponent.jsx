import {Button, Card, message, Progress} from 'antd'
import { useEffect, useState } from 'react';

export function CardComponent(props){
    const sid = props.id;
    const courseid = props.courseid;
    const[switchEnroll,setSwitchEnroll]= useState("Enroll")

    let tokenJson = JSON.parse(localStorage.getItem('login'));

    function precentageCal(startDate,date){
        const val = (((date - startDate)/ (1000 * 60 * 60 * 24))/(6*30))*100;
        return Math.round(val)
    }


    useEffect(()=>{
        const id = {sid,courseid}
        let token = "Bearer "+ tokenJson.accessToken;
        fetch('http://localhost:8080/student/CountCourseStudent',{
             method:"POST",
             headers:{"Content-Type":"application/json",
             "Authorization":token
            },
             body:JSON.stringify(id)
           }).then(res=>res.json()).then((result)=>{
            if (result === 1){
                setSwitchEnroll("Unenroll");
            }      
            else{
                setSwitchEnroll("Enroll")
            }  
           })
   
      },[]);

    const handleSubmit = (e) =>{
        const id = {sid,courseid}
        let token = "Bearer "+ tokenJson.accessToken;
        const mapcoursestudent= {id}
        if(switchEnroll === "Enroll"){
            fetch('http://localhost:8080/student/mapStudentCourse',{
             method:"POST",
             headers:{"Content-Type":"application/json",
             "Authorization":token
            },
             body:JSON.stringify(mapcoursestudent)
           }).then((response)=>{  
            if (response.status === 200){
                setSwitchEnroll("Unenroll");
                message.success("success")
            }else{
                message.error("something wrong")
            }
           })
        }
        else if(switchEnroll === "Unenroll"){
            fetch('http://localhost:8080/student/deleteMappingstudentcourse',{
             method:"DELETE",
             headers:{"Content-Type":"application/json",
             "Authorization":token
            },
             body:JSON.stringify(id)
           }).then((response)=>{  
            if (response.status === 200){
                setSwitchEnroll("Enroll");
                message.success("success")
            }else{
                message.error("something wrong")
            }
           })
        }
         
    }
    
    return(
        <Card className="dashboard-card">
            <div className='container-card'>
            <h2>{props.coursename}</h2>
            <h4>{props.courseid}</h4>
            <h4>{props.name}</h4>
            {
                ((new Date() - new Date(props.startdate)) > 0 )?
                <Progress className='progerss' percent={precentageCal(new Date(props.startdate),new Date())}></Progress>:null
            }
            
            <Button>Details</Button>
            {
                ((new Date(props.startdate) - new Date() ) > 0 )?
                <Button onClick={handleSubmit} htmlType="submit">{switchEnroll}</Button>:null
            }
            
            </div> 
        </Card>
    )
}
