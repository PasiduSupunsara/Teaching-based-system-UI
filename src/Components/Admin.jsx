import React, { useState } from "react";
import { Table, Layout, Button } from "antd";
import { Link} from "react-router-dom";
import { Navbar } from "./Navbar";
import { useNavigate} from "react-router-dom";



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
  const [selected, setSelected] = useState(null);
  let tokenJson = JSON.parse(localStorage.getItem('login'));
  const navigate = useNavigate();
  let token = "Bearer "+ tokenJson.accessToken;

  const handleRowClick = (result) => {
    navigate("/UserDetails",{state: {name:result.name,id:result.idNumber,birthday:result.dateOfBirth,address:result.address,
      email:result.email,phoneNumber:result.phoneNumber,role:result.role,firstName:result.firstName,lastName:result.lastName
    }})

  };
  


  const handleStudentButtonClick = () => {
    fetch("http://localhost:8080/admin/getAllStudent",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
      setStudents(result);
      }
      )
    setSelected("students");
  };

  const handleTeacherButtonClick = () => {
    fetch("http://localhost:8080/admin/getAllTeachers",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
      setTeachers(result);
      }
      )
    setSelected("teachers");
  };

  const handleManagerButtonClick = () => {
    fetch("http://localhost:8080/admin/getAllAdmins",{
        method:"GET",
        headers:{"Authorization":token
          },
      })
      .then(res=>res.json())
      .then((result)=>{
      setAdmin(result);
      }
      )   
    setSelected("admin");
  };

  const handleUserButtonClick = () => {
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
    <div>
    <Layout>
      <Layout.Header>
        < Navbar/>
      </Layout.Header>
      <Layout.Content >
        <div className="table">
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

          <Link to="/CreateNewCourse">
            <Button className="home-button" type="primary" size="large">
              <i>Create course</i>
            </Button>
          </Link>

          <Link to="/GetAllCourses">
            <Button className="home-button" type="primary" size="large">
              <i>Get All Courses</i>
            </Button>
          </Link>

          <Link to="/Update">
            <Button className="home-button" type="primary" size="large">
              <i>Update Role</i>
            </Button>
          </Link>
          <Link to="/Delete">
            <Button className="home-button" type="primary" size="large">
              <i>Delete User</i>
            </Button>
          </Link>
          </div>
          <h2 style={{ color: "#591E66" }}>{tableTitle}</h2>
          <div>
          <Table dataSource={dataSource} columns={columns} pagination={{pageSize:10,}} onRow={(record) => {
              return {
                onClick: () => handleRowClick(record)
              };
            }}/>
        </div>
      </Layout.Content>
    </Layout>
    </div>
  );
}