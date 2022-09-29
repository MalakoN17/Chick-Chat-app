import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { dataBase, auth } from "../Firebase";
function SendMassage() {
  const [msg, setMsg] = useState("");
  let photoURL = auth.currentUser._delegate.photoURL
  console.log(photoURL);
  const sendMassage = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;
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
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="massage..."
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default SendMassage;
