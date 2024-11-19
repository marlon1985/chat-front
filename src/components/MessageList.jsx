
export default function MessageList({messages}){
   let mensaje="";
     messages?.map((message)=>(
     mensaje=mensaje+'id_autor-'+message.Autor+':  '+message.content+'\n'
       ) );
    return(
          <>
     <textarea cols="30" rows="5" value={mensaje} readOnly></textarea>
          </>
       )
}