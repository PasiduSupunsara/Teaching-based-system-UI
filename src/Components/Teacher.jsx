import React from "react";
import { Table,Layout} from "antd";
import "./Dashboard";
import { Navbar } from "./Navbar";
import {CardComponent} from './CardComponent'
import {useState,useEffect} from 'react'
import { Input, Space } from 'antd';
import { Select } from 'antd';


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

export const Teacher = () => {
  const [courses, setCourses] = useState([]);
  const [coursesId, setCoursesId] = useState([]);
  const [mode,setMode] = useState("Enrolled Courses")
  let tokenJson = JSON.parse(localStorage.getItem('login'));
  let token = "Bearer "+ tokenJson.accessToken; 
  const id = tokenJson.id

  useEffect(()=>{
    const sid = {id}
      fetch('http://localhost:8080/teacher/findAllCoursesById',{
      method:"POST",
      headers:{"Content-Type":"application/json",
      "Authorization":token
      },
      body:JSON.stringify(sid)
      })
      .then(res=>res.json())
      .then((result)=>{
        console.log(result)
      setCoursesId(result)
      }) 
  },[]);


  const onChange = (value) => {
    if(value === "Enrolled Courses"){
      const sid = {id}
      fetch('http://localhost:8080/teacher/findAllCoursesById',{
      method:"POST",
      headers:{"Content-Type":"application/json",
      "Authorization":token
      },
      body:JSON.stringify(sid)
      })
      .then(res=>res.json())
      .then((result)=>{
        console.log(result)
      setCoursesId(result)
      }) 
      setMode("Enrolled Course")
    }
    else if(value === "All Courses"){ 
      fetch("http://localhost:8080/teacher/getAllCourses",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
      setCourses(result);
      })   
      setMode("All Courses")
    }   
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

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
      <text>Course Overview</text>
      <div>
        <Space direction="vertical">
          <Search placeholder="Filter my courses" allowClear enterButton="Search" size="middle" onSearch={onSearch}/>
        </Space>
        <br/>
        <Select
          showSearch
          placeholder="Select your option"
          onChange={onChange}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: 'All Courses',
              label: 'All Courses',
            },
            {
              value: 'Enrolled Course',
              label: 'Enroll Courses',
            },
          ]} />
    </div>
      
      {
        (mode === "All Courses")?
        <>{courses.map((course) => <CardComponent courseid={course.courseid} coursename={course.coursename} 
        name={course.medium} startdate={course.startdate} id={tokenJson.id}/>)}
        </>
        :
        <>{coursesId.map((course) => <CardComponent courseid={course.courseid} coursename={course.coursename} 
        name={course.medium} startdate={course.startdate} id={tokenJson.id}/>)}</>

      } 
    </Layout>
  
  );
}