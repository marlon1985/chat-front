"use client"
import{useRouter} from "next/navigation";
import{useState} from "react";
import { createMessage } from "@/utils/api-chat";

export default function Messageform({onMessageSent}){
const [content,setcontent]=useState("")
const Router=useRouter()

async function handlesubmit(e){
    e.preventDefault();
    const username=localStorage.getItem("chatUsername")
    if(!username){ Router.push("/")}
    if(content.trim()){
       try{ await createMessage(username,content);
            setcontent("");
            onMessageSent();
       } catch(error){ console.log("error enviando mensaje....",error)
       }
    }
}
return(
     <>
        <form onSubmit={handlesubmit}>
        <textarea value={content} onChange={(e) => setcontent(e.target.value)} 
         rows={3} placeholder="escribe un mensaje...."  required /> 
        <button type="submit">enviar</button>  
        </form>         
     </>
    );
 }









