import { Table, Button,Layout } from "antd";
import { useState ,useEffect} from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { Navbar } from "./Navbar";
import { Submission } from "./Submission";
import {CreateAssesment} from "./CreateAssesment"
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import { CourseCard } from "./CourseCard";


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
    const[numberAss,setNumberAss] = useState(0);
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
    const statecount=()=>{
      setCount(count + 1);
    }

    useEffect(()=>{
        let token = "Bearer "+ tokenJson.accessToken;
        let principalid = tokenJson.id;
        const id = location.state.courseid;
        const cid = {id,principalid}
          fetch("http://localhost:8080/getAllAssesmentByCid",{
            method:"POST",
            headers:{"Content-Type":"application/json",
             "Authorization":token
            },
             body:JSON.stringify(cid)
          })
          .then(res=>res.json())
          .then((result)=>{
            if(result.length === 0){
              setNumberAss(1);
            }
            else{
              setCount(count+1);
              setAssesment(result);
            }
            
          }) 
      },[count]);
    

    const handleRowClick = (result) => {
        navigate("/UserDetails",{state: {name:result.name,id:result.id_number,birthday:result.date_of_birth,address:result.address,
          email:result.email,phoneNumber:result.phone_number,role:result.role,firstName:result.first_name,lastName:result.last_name
        }})
      };

    return(
      <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
      <div className="details">
      <h1 className="coursedetailsheader">------------COURSE DETAILS------------</h1>
              <CourseCard name={location.state.coursename} id={location.state.courseid} details={location.state.details}
              duration={location.state.duration} fee={location.state.fee} startdate={location.state.startdate}
              medium={location.state.medium} enroll={location.state.enroll}/>
            {
              ((tokenJson.role === "STUDENT" || tokenJson.role === "TEACHER") && location.state.enroll === "Unenroll")?
              <>
              <h1 className="coursedetailsheader">------------ASSESMENT------------</h1>
              {
                (numberAss === 0)?
                <>{assesment.map((asses) => <Submission Details={asses.details} AssesmentName={asses.assesmentname}/>)}</>
                :
                <h4 className="subDetails">There is not assesment yet</h4>

              }
              </>
              :
              null
            }
            {
              ((tokenJson.role === "TEACHER")&& location.state.enroll === "Unenroll")?
              <>
              <h1 className="coursedetailsheader">------------CREATE NEW ASSESMENT------------</h1>
              <CreateAssesment cid={location.state.courseid} onClick={statecount} count={count}/>
              </>
              :
              null
            }
            {
                ((location.state.role==="TEACHER" && location.state.enroll === "Unenroll")||location.state.role==="ADMIN")?
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
      </Layout.Content>
    </Layout> 
    )
}