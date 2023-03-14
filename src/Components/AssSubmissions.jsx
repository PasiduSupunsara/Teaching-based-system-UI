import { Layout } from "antd";
import { Navbar } from "./Navbar";
import {DocumentCard} from "./DocumentCard";
import { useLocation} from "react-router-dom";
import { useState,useEffect } from "react";

export function AssSubmissions(){

    const location = useLocation();
    const[sids,setSid]=useState([]);
    const assid = location.state.assid;
    const courseid = location.state.cid;
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    let token = "Bearer "+ tokenJson.accessToken; 

    useEffect(()=>{
        const details = {assid,courseid}
          fetch('http://localhost:8080/teacher/getSubmissions',{
          method:"POST",
          headers:{"Content-Type":"application/json",
          "Authorization":token
          },
          body:JSON.stringify(details)
          })
          .then(res=>res.json())
          .then((result)=>{
            setSid(result)
          }) 
  
      },[assid,courseid,tokenJson]);

    return(
      <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
        <>
        {sids.map((sid) => <DocumentCard assid={location.state.assid} courseid={location.state.cid} sid={sid}/>)}
        </>
      </Layout.Content>
    </Layout>
        
            
        
    )
}