import { Button, Table } from "antd";
import { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { Navbar } from "./Navbar";
import {DownOutlined, UpOutlined} from '@ant-design/icons';

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

export function UserDetails(){
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    const navigate = useNavigate();
    const location = useLocation();
    const [course,setCourse] = useState([]);
    const[showCourses,setShowCourses]=useState("Show Courses");
    const handleSbmit = () =>{
        navigate("/Dashboard");

    }

    const getCourses = (e) => {
      if(location.state.role=== "STUDENT"){
        if(showCourses === "Show Courses"){
          let token = "Bearer "+ tokenJson.accessToken;
          const name = location.state.name;
          const sname = {name}
          fetch("http://localhost:8080/admin/findAllCoursesById",{
              method:"POST",
              headers:{"Content-Type":"application/json",
              "Authorization":token
              },
              body:JSON.stringify(sname)
            })
            .then(res=>res.json())
            .then((result)=>{
                setCourse(result)
            }
            )  
            setShowCourses("Hide Courses");
        }
        else if(showCourses === "Hide Courses"){
            setShowCourses("Show Courses");
        }
      }
      else if(location.state.role=== "TEACHER"){
        if(showCourses === "Show Courses"){
          let token = "Bearer "+ tokenJson.accessToken;
          const name = location.state.name;
          const sname = {name}
          fetch("http://localhost:8080/admin/findAllCoursesByTId",{
              method:"POST",
              headers:{"Content-Type":"application/json",
              "Authorization":token
              },
              body:JSON.stringify(sname)
            })
            .then(res=>res.json())
            .then((result)=>{
                setCourse(result)
            }
            )  
            setShowCourses("Hide Courses");
          }
          else if(showCourses === "Hide Courses"){
              setShowCourses("Show Courses");
          }
      }
        
    }

    return(
        <div>
            <Navbar/>
            <div className="details">
            <p>{location.state.name}</p>
            <p>{location.state.id}</p>
            <p>{location.state.birthday}</p>
            <p>{location.state.address}</p>
            <p>{location.state.email}</p>
            <p>{location.state.phoneNumber}</p>
            <p>{location.state.role}</p>
            <p>{location.state.firstName}</p>
            <p>{location.state.lastName}</p>
            
            {
                (tokenJson.role === "ADMIN")?
                <>
                <Button onClick={getCourses}>{showCourses}&nbsp;{(showCourses === "Show Courses")?<> <DownOutlined /></>:<> <UpOutlined /></>}</Button>
                {
                    (location.state.role === "STUDENT")?
                    <>
                        {
                            (showCourses==="Hide Courses")?
                            <>
                                <Table dataSource={course} columns={columns}/>
                            </>
                            :
                            null

                        }
                    </>
                    :
                    null
                }
                {
                    (location.state.role === "TEACHER")?
                    <>
                        {
                            (showCourses==="Hide Courses")?
                            <>
                                <Table dataSource={course} columns={columns}/>
                            </>
                            :
                            null

                        }
                    </>
                    :
                    null
                }
                </>
                :
                <>
                good
                </>
            }
            <br/>
            <Button onClick={handleSbmit}>Back</Button>
            </div>
        </div>
    )
}