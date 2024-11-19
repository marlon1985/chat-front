
import axios from 'axios';

const API_URL=process.env.API_URL;
/*"http://127.0.0.1:8000/api/chat/"; 
http://chat-clase-452hbhknb-marlons-projects-9cba0676.vercel.app/api/chat/*/

export async function getMessages(){
  try {
    const response= await axios.get(API_URL+"mensajes/");
    return response.data
  } catch (error) {
    console.log("error obteniendo mensajes ",error)
  }
}
export async function createMessage(username,content){
  try {
    const message={username,content}
    const response= await axios.post(API_URL+"mensajes/create/",message);
    console.log(response);
    return response.data
   } catch (error) {
    console.log("error creando mensaje ",error)
     }
}