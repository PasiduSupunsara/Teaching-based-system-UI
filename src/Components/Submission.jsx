import {Button, Card,Form, Input} from 'antd'
import { useState } from 'react';
import { useNavigate} from "react-router-dom";


export function Submission(props){
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    const [file, setFile] = useState(null);
    const navigate = useNavigate(); 
    const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
   };

  function goSubmission(){
    navigate("/AssSubmissions",{state: {assid:props.AssesmentId,cid:props.cid }})
  }

  const handleSubmit = (event) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('sid', tokenJson.id);
    formData.append('assid', props.AssesmentId);
    formData.append('cid', props.cid);
    let token = "Bearer "+ tokenJson.accessToken;
    console.log(formData);
    fetch('http://localhost:8080/upload', {
        method: 'POST',
        headers:{"Authorization":token },
        body: formData
      })
      .then(response => {
        if (response.ok) {
          console.log('File uploaded successfully');
        } else {
          console.error('File upload failed');
        }
    })  
  };

    return(
        <Card className="submission-card">
            <div className='submissionContainer-card'>
                <h2>{props.Details}</h2>
                <h3>{props.AssesmentName}</h3>
               
                <h5>Submission status</h5>
                
                {
                   (tokenJson.role==="STUDENT")?
                   <>
                   <Form rules={[{
                    required:true,
                    message:"please enter your username"
                    }]}label="Username" name={"my username"}
                    ></Form>
                   <Input className='fileSubmission' type="file" onChange={handleFileInputChange}/>
                   <Button onClick={handleSubmit}>Submit</Button>
                   </>
                   :
                   <></>
                } 
                {
                  (tokenJson.role==="TEACHER")?
                  <Button onClick={goSubmission}>Go Submissions</Button> 
                  :
                  null
                }
                       
            </div> 
        </Card>
    )
}
