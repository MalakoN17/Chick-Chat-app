import React, { useState, useEffect } from "react";
import { dataBase } from "../Firebase";
import SendMassage from "./SendMassage";
import SignOut from "./SignOut";

function Chat() {
  const [massages, setMassages] = useState([]);
  const getFirebaseData = async () =>{
    let response = await dataBase.collection('messages').orderBy('createdAt').limit(50).get()
    let msg = []
    response.forEach(doc =>{
        let obj = {
            id: doc.id,
            text: doc.data().text,
            photoURL: doc.data().photoURL
        }
        console.log(obj);
        msg.push(obj)
    })
    setMassages(msg)
  }
  useEffect(() => {
    getFirebaseData()
  }, []);
  return (
    <div>
      <SignOut />
      {massages.map(({ id, text, photoURL }) => {
        return (
          <div key={id}>
            <img src={photoURL} alt="user photo" />
            <p>{text}</p>
          </div>
        );
      })}
      <SendMassage/>
    </div>
  );
}

export default Chat;
