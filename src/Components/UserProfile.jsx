import React, { useState } from "react"
import {useNavigate} from "react-router-dom"
import { UserOutlined,PoweroffOutlined} from '@ant-design/icons';
import { Button} from 'antd';

export const UserProfile = () => {
    const user = JSON.parse(localStorage.getItem('username'));
    const tokenJson = JSON.parse(localStorage.getItem('login'));
    let token = "Bearer "+ tokenJson.accessToken;
    let navigate=useNavigate();
    
    const[state,setState]=useState(false);


    function logout(){

        const name = user
        const name1 = {name}
        console.log(name)
         fetch('http://localhost:8080/userlogout',{
             method:"POST",
             headers:{"Content-Type":"application/json",
             "Authorization":token
            },
             body:JSON.stringify(name1)
           }).then((response)=>{
               if (response.status === 200){
                localStorage.clear();
                navigate("/")
               }
               else{
                console.log("error");
               }
               
           })
    }
    function print(){
        if(state===true){
            setState(false)

        }
        if(state===false){
            setState(true)
        }
        
    }

    return(
        user?
            <>
            <Button onClick={print}  className="profilebutton">{ <UserOutlined className="icon"/>}</Button>
            {
                (state===true)?
                <div className="flex flex-col dropDownProfile">
                    <div className="flex flex-col gap-4">
                        <h3>{user}</h3>
                        <h3>{tokenJson.role}</h3>
                        <Button onClick={logout}>LOGOUT <PoweroffOutlined/></Button>
                    </div>
                </div>
                :
                null

            } 
            </>
             :
            null
                    

    )
}

