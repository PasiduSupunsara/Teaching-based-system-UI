import React, { useState, useEffect } from "react";
import { Table, Layout, Button } from "antd";
import { Link} from "react-router-dom";
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

export const Admin = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState("users");
  let tokenJson = JSON.parse(localStorage.getItem('login'));

  useEffect(()=>{
    let token = "Bearer "+ tokenJson.token;
      fetch("http://localhost:8080/admin/getAllUsers",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
      setUsers(result);
      }
      )   
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
      fetch("http://localhost:8080/getAllTeachers",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
      setTeachers(result);
      }
      )
      fetch("http://localhost:8080/getAllAdmins",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
      setAdmin(result);
      }
      )   
  });



  const handleStudentButtonClick = () => {
    setSelected("students");
  };

  const handleTeacherButtonClick = () => {
    setSelected("teachers");
  };

  const handleManagerButtonClick = () => {
    setSelected("admin");
  };

  const handleUserButtonClick = () => {
    setSelected("users");
  };

  let dataSource;
  let tableTitle;
  if (selected === "students") {
    dataSource = students;
    tableTitle = "List of Students";
  } else if (selected === "teachers") {
    dataSource = teachers;
    tableTitle = "List of Teachers";
  } else if (selected === "admin") {
    dataSource = admin;
    tableTitle = "List of Managers";
  } else if (selected === "users") {
    dataSource = users;
    tableTitle = "List of Users";
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
          <Button
            className="home-button"
            type="primary"
            size="large"
            onClick={handleTeacherButtonClick}
          >
            View All Teachers
          </Button>
          <Button
            className="home-button"
            type="primary"
            size="large"
            onClick={handleManagerButtonClick}
          >
            View All Admins
          </Button>
          <Button
            className="home-button"
            type="primary"
            size="large"
            onClick={handleUserButtonClick}
          >
            View All Users
          </Button>
          <Link to="/Update">
            <Button className="home-button" type="default" size="large">
              <i>Update Role</i>
            </Button>
          </Link>
          <Link to="/Delete">
            <Button className="home-button" type="default" size="large">
              <i>Delete User</i>
            </Button>
          </Link>
          <h2 style={{ color: "#1eb2a6" }}>{tableTitle}</h2>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </Layout.Content>
    </Layout>
  );
}