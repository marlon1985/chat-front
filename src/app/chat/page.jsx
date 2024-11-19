"use client"
import Messageform from "@/components/MessagesForm";
import MessageList from "@/components/MessageList";
import {getMessages} from "@/utils/api-chat";
import {useEffect,useState} from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importar Bootstrap

export default function PresentationPage() {
   const [messages,setMessages]=useState([])
   const [username,setUsername]=useState("")
   async function fetchMessages(){
     try{ const response= await getMessages()
          setMessages(response)
     }catch(error){ console.log("error obteniendo mensajes",error)  } }
   
   useEffect(() => {
    setUsername(localStorage.getItem("chatUsername"));
    fetchMessages();
    const interval = setInterval(fetchMessages, 1000);
    return () => clearInterval(interval);  }, []);
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 mb-4">¡Bienvenido CHAT de {username}!</h1>
      <img src="imagenes/imgchat.png"alt="Imagen de presentación"
      className="img-fluid rounded-circle mb-4" style={{maxWidth:'300px'}} />
      <div className="lead mb-4">
      <MessageList messages={messages}></MessageList>
      <Messageform onMessageSent={fetchMessages}></Messageform>
      </div>
    </div>   );
}
