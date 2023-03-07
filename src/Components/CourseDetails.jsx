import { Table, Button } from "antd";
import { useState ,useEffect} from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { Navbar } from "./Navbar";
import { Submission } from "./Submission";
import {CreateAssesment} from "./CreateAssesment"
import {DownOutlined, UpOutlined} from '@ant-design/icons';


const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "lastName",
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "username",
    },
    {
      title: "Birthday",
      dataIndex: "date_of_birth",
      key: "Birthday",
    },
    {
      title: "Phone number",
      dataIndex: "phone_number",
      key: "Phone Number",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "ID number",
      dataIndex: "id_number",
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

export function CourseDetails(){
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    const navigate = useNavigate();
    const location = useLocation();
    const[count,setCount]=useState(0);
    const[student, setStudent] = useState([]);
    const[assesment,setAssesment] = useState([]);
    const[showStudent,setShowStudent]=useState("Show Students");
    const handleSbmit = (e) =>{
        if(location.state.role === "TEACHER" || location.state.role === "ADMIN"){
            navigate("/Dashboard");
        }
        else{
            navigate("/Dashboard")
        }
    }

    const getStudent = (e) => {
        if(showStudent === "Show Students"){
          if(location.state.role==="TEACHER" || location.state.role==="ADMIN"){
            let token = "Bearer "+ tokenJson.accessToken;
            const id = location.state.courseid;
            const cid = {id}
              fetch("http://localhost:8080/getAllStudentForCourse",{
                method:"POST",
                headers:{"Content-Type":"application/json",
                 "Authorization":token
                },
                 body:JSON.stringify(cid)
              })
              .then(res=>res.json())
              .then((result)=>{
                setStudent(result) 
              }) 
          }
            setShowStudent("Hide Students");
        }
        else if(showStudent === "Hide Students"){
            setShowStudent("Show Students");
        }
        
    }

    useEffect(()=>{
        let token = "Bearer "+ tokenJson.accessToken;
        const id = location.state.courseid;
        const cid = {id}
        console.log(cid)
          fetch("http://localhost:8080/getAllAssesmentByCid",{
            method:"POST",
            headers:{"Content-Type":"application/json",
             "Authorization":token
            },
             body:JSON.stringify(cid)
          })
          .then(res=>res.json())
          .then((result)=>{
            setCount(count+1)
            setAssesment(result) 
          }) 
      },[count]);
    

    const handleRowClick = (result) => {
        navigate("/UserDetails",{state: {name:result.name,id:result.id_number,birthday:result.date_of_birth,address:result.address,
          email:result.email,phoneNumber:result.phone_number,role:result.role,firstName:result.first_name,lastName:result.last_name
        }})
      };

    return(
        <div>
            <Navbar/>
            <div className="details">
            <p>{location.state.courseid}</p>
            <p>{location.state.coursename}</p>
            <p>{location.state.details}</p>
            <p>{location.state.duration}</p>
            <p>{location.state.fee}</p>
            <p>{location.state.startdate}</p>
            <p>{location.state.medium}</p>
            <p>{location.state.role}</p>
            <p>{location.state.enroll}</p>
            {
              (tokenJson.role === "STUDENT" || tokenJson.role === "TEACHER")?
              <>
              <h1 className="coursedetailsheader">------------ASSESMENT------------</h1>
              <>{assesment.map((asses) => <Submission Details={asses.details} AssesmentName={asses.assesmentname}/>)}
              </>
              </>
              :
              null
            }
            {
              (tokenJson.role === "TEACHER")?
              <>
              <h1 className="coursedetailsheader">------------CREATE NEW ASSESMENT------------</h1>
              <CreateAssesment cid={location.state.courseid}/>
              </>
              :
              null
            }
            {
                (location.state.role==="TEACHER"||location.state.role==="ADMIN")?
                <>
                <h1 className="coursedetailsheader">------------STUDENT SUMMARY------------</h1>
                <Button onClick={getStudent}>{showStudent}&nbsp;{(showStudent === "Show Students")?<> <DownOutlined /></>:<> <UpOutlined /></>}</Button>
                {
                    (showStudent === "Hide Students")?
                    <>
                    <div className="table">
                        <Table dataSource={student} columns={columns} onRow={(record) => {
                            return {
                            onClick: () => handleRowClick(record)
                            };
                        }}/>
                    </div>
                    </>

                    :
                    null
                  }  
                </>
                :
                null
            }
            <br/>
            {
                (location.state.role==="TEACHER")?
                <>
                </>
                :
                null
            }
            <Button onClick={handleSbmit}>Back</Button>
            </div>
           
        </div>
        
    )
}