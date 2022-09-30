import React, { useState, useEffect, useRef } from "react";
import { auth, dataBase } from "../Firebase";
import SendMassage from "./SendMassage";
import SignOut from "./SignOut";
import { onSnapshot } from "firebase/firestore";

function Chat() {
  const [massages, setMassages] = useState([]);
  useEffect(() => {
    dataBase
      .collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMassages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {massages.map((elem, index) => {
          return (
            <div>
              <div key={index} className={`msg ${elem.uid == auth.currentUser.uid ? "sent" : "received"}`}>
                <img src={elem?.photoURL} alt="user photo" />
                <p>{elem?.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <SendMassage/>
    </div>
  );
}

export default Chat;
