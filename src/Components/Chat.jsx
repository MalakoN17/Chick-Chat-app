import React, { useState, useEffect } from "react";
import { dataBase } from "../Firebase";
import SendMassage from "./SendMassage";
import SignOut from "./SignOut";
import {onSnapshot} from 'firebase/firestore'

function Chat() {
  const [massages, setMassages] = useState([]);
  useEffect(() => {
    dataBase.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot =>{
      setMassages(snapshot.docs.map(doc => doc.data()))
    })
  }, []);
  console.log(massages);
  return (
    <div>
      <SignOut />
      {massages.map((elem) => {
        return (
          <div key={elem?.id}>
            <img src={elem?.photoURL} alt="user photo" />
            <p>{elem?.text}</p>
          </div>
        );
      })}
      <SendMassage/>
    </div>
  );
}

export default Chat;
