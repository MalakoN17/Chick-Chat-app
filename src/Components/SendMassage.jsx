import React, { useRef, useState } from "react";
import {scrollIntoView} from 'react-scroll-into-view'
import { Button, Input } from "@mui/material";
import firebase from "firebase/compat/app";
import { dataBase, auth } from "../Firebase";
function SendMassage() {
  const [msg, setMsg] = useState("");
  const sendMassage = async (e) => {
    e.preventDefault();
    const { uid , photoURL } = auth.currentUser;
    await dataBase.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
  };
  return (
    <div>
      <form onSubmit={sendMassage}>
        <Input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="massage..."
        />
        <Button type="submit">send</Button>
      </form>
    </div>
  );
}

export default SendMassage;
