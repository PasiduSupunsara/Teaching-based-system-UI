import React from "react";
import { Table,Layout, Button} from "antd";
import "./Dashboard";
import { Navbar } from "./Navbar";
import {CardComponent} from './CardComponent'
import {useState,useEffect} from 'react'
import { Input, Space } from 'antd';


const { Search } = Input;

const columns = [
  {
    title: "Course",
    dataIndex: "Course",
    key: "Course",
  },
  {
    title: "DueDate",
    dataIndex: "DueDate",
    key: "DueDate",
  },
  {
    title: "Homework",
    dataIndex: "Homework",
    key: "Homework",
  },
];

export const Student = () => {
  const [courses, setCourses] = useState([]);
  const [coursesId, setCoursesId] = useState([]);
  const [mode,setMode] = useState("Enrolled Courses")
  let tokenJson = JSON.parse(localStorage.getItem('login'));
  let token = "Bearer "+ tokenJson.accessToken; 
  const id = tokenJson.id

  const onSearch = (value) => console.log(value);

  

  useEffect(()=>{
    const sid = {id}
      fetch('http://localhost:8080/student/findAllCoursesById',{
      method:"POST",
      headers:{"Content-Type":"application/json",
      "Authorization":token
      },
      body:JSON.stringify(sid)
      })
      .then(res=>res.json())
      .then((result)=>{
      setCoursesId(result)
      }) 
      fetch("http://localhost:8080/student/getAllCourses",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
      setCourses(result);
      })   
  },[]);

  const handleSubmit = (e) =>{
    if(mode === "All Courses"){
      setMode("Enrolled Course")
    }
    else{ 
      setMode("All Courses")
    }   
  }

  return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
        <div style={{ padding: "50px" }}>
         
          <Table
            style={{ borderBlockEndWidth: "5px", marginTop: 50 }}
            dataSource={""}
            columns={columns}
          />
        </div>
      </Layout.Content>
      <Space direction="vertical">
        <Search placeholder="input search text" allowClear enterButton="Search" size="middle" onSearch={onSearch}/>
      </Space>
      <Button onClick={handleSubmit}>Switch    :  {mode}</Button>
      {
        (mode === "All Courses")?
        <>{coursesId.map((course) => <CardComponent courseid={course.courseid} coursename={course.coursename} 
        name={course.medium} startdate={course.startdate} id={tokenJson.id} state={mode}/>)}</>
        :
        <>{courses.map((course) => <CardComponent courseid={course.courseid} coursename={course.coursename} 
        name={course.medium} startdate={course.startdate} id={tokenJson.id} state={mode}/>)}
        </>
        
        
      } 
    </Layout>
  );
}