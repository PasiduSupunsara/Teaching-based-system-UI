import React, { useState, useEffect } from "react";
import { Table, Layout} from "antd";
import { Navbar } from "./Navbar";



const columns = [

  {
    title: "Course Id",
    dataIndex: "courseid",
    key: "courseid",
  },
  {
    title: "course name",
    dataIndex: "coursename",
    key: "coursename",
  },
  {
    title: "medium",
    dataIndex: "medium",
    key: "medium",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "startdate",
    dataIndex: "startdate",
    key: "startdate",
  },
  {
    title: "duration",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "fee",
    dataIndex: "fee",
    key: "fee",
  },
];

export const GetAllCourses = () => {
  let tokenJson = JSON.parse(localStorage.getItem('login'));
  const[course,setCourse] = useState([]);
  

  useEffect(()=>{
    let token = "Bearer "+ tokenJson.accessToken;
      fetch("http://localhost:8080/admin/getAllCourses",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
        setCourse(result)
      }
      )  
  },[]);


  return (
    <div>
    <Layout>
      <Layout.Header>
        < Navbar/>
      </Layout.Header>
      <Layout.Content >
        <div className="table">     
          </div>
          <h2 style={{ color: "#591E66" }}>Courses</h2>
          <div>
          <Table dataSource={course} columns={columns} />
        </div>
      </Layout.Content>
    </Layout>
    </div>
  );
}