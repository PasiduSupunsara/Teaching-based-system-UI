import { Button, Table,Layout } from "antd";
import { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { Navbar } from "./Navbar";
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import { UserCard } from "./UserCard";

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
      <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
      <div className="details">
      <h1 className="coursedetailsheader">------------USER DETAILS------------</h1>
              <UserCard name={location.state.name} id={location.state.id} birthday={location.state.birthday} 
              role={location.state.role} firstName={location.state.firstName} lastName={location.state.lastName}
              address={location.state.address} email={location.state.email} phoneNumber={location.state.phoneNumber}/>
           
            {
                ((tokenJson.role === "ADMIN") &&  ((location.state.role === "STUDENT")||(location.state.role === "TEACHER")))?
                <>
                <h1 className="coursedetailsheader">------------COURSE SUMMARY------------</h1>
                <Button onClick={getCourses}>{showCourses}&nbsp;{(showCourses === "Show Courses")?<> <DownOutlined /></>:<> <UpOutlined /></>}</Button>
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
            <br/>
            <Button onClick={handleSbmit}>Back</Button>
            </div>
      </Layout.Content>
    </Layout>
        
            
        
    )
}