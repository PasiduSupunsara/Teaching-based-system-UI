import {Card,Form, Input} from 'antd'

export function Submission(props){
    let tokenJson = JSON.parse(localStorage.getItem('login'));

    
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
                    }]}label="Username" name={"my username"}></Form>
                   <Input className='fileSubmission' type="file" />
                   </>
                   :
                   <></>
                }            
            </div> 
        </Card>
    )
}
