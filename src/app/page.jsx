"use client"

import{useRouter} from "next/navigation";
import{useState} from "react";

export default function LobbyChat() {
  const [username,setusername]=useState("")
  const router=useRouter()
   async function handlesubmit(e){
    e.preventDefault();
    if(username.trim()){
      localStorage.setItem("chatUsername",username);
      router.push("/chat");  } }
  return (
   <>
     <h1>lobbychat</h1>
     <form onSubmit={handlesubmit}>
      <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" placeholder="ingrese su nombre de usuario" required></input>
      <button>enviar</button>
     </form>
   </>
  );  }

