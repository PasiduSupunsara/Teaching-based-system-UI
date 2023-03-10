import {Button, Card,Form, Input} from 'antd'
import { useState } from 'react';

export function Submission(props){
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    const[selectedFile,setSelectedFile]= useState(null)
    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
        
      };

      const handleSubmit = (event) => {
        const formData = new FormData();
        formData.append("file", selectedFile);
        console.log(selectedFile)
      }
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
            </div> 
        </Card>
    )
}
