import { useEffect, useState } from "react"
import { Navbar } from "./Navbar"
import { Layout} from "antd";
import { MessageCard } from "./MessageCard";

export const SeeNotification = () => {
    let tokenJson = JSON.parse(localStorage.getItem('login'));
    const[messages,setMessages] = useState([]);

    useEffect(()=>{
      let token = "Bearer "+ tokenJson.accessToken;
        let id = tokenJson.id;
        const messages = {id}
         fetch('http://localhost:8080/getMessages',{
             method:"POST",
             headers:{"Content-Type":"application/json",
             "Authorization":token
            },
             body:JSON.stringify(messages)
           }).then((response)=>
           response.json())
           .then((result)=>{
           setMessages(result);
       })
    },[]);
  

    
    return (
        <Layout>
          <Layout.Header>
            <Navbar />
          </Layout.Header>
          <Layout.Content>
            {
              <>{messages.map((message) => <MessageCard message={message.message} mid={message.mid} sname={message.sname}
              />)}
              </>
            }
          </Layout.Content>
        </Layout>
        )
}