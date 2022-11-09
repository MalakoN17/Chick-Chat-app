import React, {useState, useEffect, useContext} from "react";
import { Context } from '../context/context'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic' 
import { Button } from "react-chat-engine";

const ChatEngine = dynamic(()=>
import('react-chat-engine').then((module)=>module.ChatEngine)
)
const MessageFormSocial = dynamic(()=>
import('react-chat-engine').then((module)=>module.MessageFormSocial)
)
export default function Chats() {
  const logOut = ()=>{
    username === "";
     secret === "" ;
      router.push("/");
  }
  const {username, secret} = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  useEffect(()=>{
    if( typeof document !== null){
      setShowChat(true)
    }
  },)

  useEffect(() => {
  }, [username, secret]);

  if(!showChat) return <div />

  return( 
  <div className="background">
    <div className="shadow">
      <button className="exit-btn" onClick={()=> logOut()}>Log out X</button>
      <ChatEngine 
       height = "calc(100vh - 200px"
       projectID="04ae6e82-aa0a-4456-a28b-b442091bdd5f"
       userName={username}
       userSecret={secret}
       renderNewMessageForm ={() => <MessageFormSocial/>}
      />
    </div>
  </div>
  )
}