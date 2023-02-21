import React, { useState, useEffect } from "react";
import { Table, Layout, Button } from "antd";
import { Navbar } from "./Navbar";

const columns = [

  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "User Name",
    dataIndex: "name",
    key: "username",
  },
  {
    title: "Birthday",
    dataIndex: "dateOfBirth",
    key: "Birthday",
  },
  {
    title: "Phone number",
    dataIndex: "phoneNumber",
    key: "Phone Number",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "ID number",
    dataIndex: "idNumber",
    key: "ID number",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "Address",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "Role",
  },
];

export const Teacher = () => {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState("users");
  let tokenJson = JSON.parse(localStorage.getItem('login'));

  useEffect(()=>{
    let token = "Bearer "+ tokenJson.token;  
      fetch("http://localhost:8080/getAllStudent",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
      setStudents(result);
      }
      )
  });



  const handleStudentButtonClick = () => {
    setSelected("students");
  };


  let dataSource;
  let tableTitle;
  if (selected === "students") {
    dataSource = students;
    tableTitle = "List of Students";
  } 

  return (
    <Layout>
      <Layout.Header>
        < Navbar/>
      </Layout.Header>
      <Layout.Content>
        <div style={{ padding: " 50px" }}>
          <Button
            className="home-button"
            type="primary"
            size="large"
            onClick={handleStudentButtonClick}
          >
            View All Students
          </Button>
          <h2 style={{ color: "#1eb2a6" }}>{tableTitle}</h2>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </Layout.Content>
    </Layout>
  );
}