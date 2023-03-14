import React from "react";
import { Card } from "antd";

export function DocumentCard(props){
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    let token = "Bearer "+ tokenJson.accessToken;
    let courseid = props.courseid;
    let assid = props.assid;
    let sid = props.sid;

    const handleDownload = () => {
        const messages = {courseid,assid,sid}
        console.log(messages);
        fetch('http://localhost:8080/pdf',
        {method:"POST",
          headers:{ "Authorization":token,
          "Content-Type":"application/json",
        },
        body:JSON.stringify(messages)
        })
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf');
            document.body.appendChild(link);
            link.click();
            console.log(link);
          })
          .then((result)=>{
           console.log(result) 
          }) 
      }

      return(
      <Card className="documentCard">
        <p onClick={handleDownload}>{sid}----submission here</p>
      </Card>
      )
}



  