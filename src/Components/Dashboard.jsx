import React, { useState, useEffect } from "react";
import {Teacher} from './Teacher'
import {Admin} from './Admin'
import {Student} from './Student'


export const Dashboard = () => {
  const [role, setRole] = useState();


  
  useEffect(() => {
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    if (tokenJson){
      const role = tokenJson.role;
      setRole(role);
    }
    

  },[]);

  switch (role) {
    case "ADMIN":
      return <Admin/>;

    case "STUDENT":
      return <Student/>;
 
    case "TEACHER":
      return <Teacher />;
 
    default:
      return ;
  }
}
