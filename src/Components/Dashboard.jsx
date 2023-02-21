import React, { useState, useEffect } from "react";
import {Teacher} from './Teacher'
import {Admin} from './Admin'
import {Student} from './Student'



export const Dashboard = () => {
  const [role, setRole] = useState();
  let tokenJson = JSON.parse(localStorage.getItem('login'));



  useEffect(() => {
    const role = tokenJson.role;
    setRole(role);

  },[tokenJson.role]);

  switch (role) {
    case "ADMIN":
      console.log("Admin")
      return <Admin/>;

    case "STUDENT":
      console.log("Student")
      return <Student/>;
 
    case "TEACHER":
      console.log("Teacher")
      return <Teacher />;
 
    default:
      return ;
  }
}
