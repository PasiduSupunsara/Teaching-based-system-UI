import React from "react";
import { Table,Layout} from "antd";
import "./Dashboard";
import { Navbar } from "./Navbar";
import {CardComponent} from './CardComponent'
import {useState,useEffect} from 'react'

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
  let tokenJson = JSON.parse(localStorage.getItem('login'));


  useEffect(()=>{
    let token = "Bearer "+ tokenJson.accessToken; 
      fetch("http://localhost:8080/student/getAllCourses",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
      setCourses(result);
      }
      )
  },[]);

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
      {courses.map((course) => <CardComponent courseid={course.courseid} coursename={course.coursename} 
      name={course.medium} startdate={course.startdate} id={tokenJson.id}/>)}
    </Layout>
  );
}