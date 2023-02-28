import { Button } from "antd";
import React, { useState } from "react";


export const GetCourseById=() =>{
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    const[course,setCourse]=useState([])
    

    const handleSubmit=(e)=>{
      const id =tokenJson.id;
      console.log(id)
      let token = "Bearer "+ tokenJson.accessToken;
      console.log(token);
      fetch('http://localhost:8080/student/findAllCoursesById',{
        method:"POST",
        headers:{"Content-Type":"application/json",
        "Authorization":token
      },
        body:JSON.stringify(id)
    }).then((response)=>
      response.json())
      .then((result)=>{
    setCourse(result);
    console.log(course);
  })

  }
      return(
        <Button onClick={handleSubmit}>hello</Button>

      )
}