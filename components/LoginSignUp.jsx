import React, { useContext } from "react";
import { Context } from "../context/context";
import { useRouter } from "next/router";
import axios from "axios";

function LoginSignUp() {
  const privateKey = process.env.NEXT_PUBLIC_API_KEY
  const {username, secret, setUserName, setSecret } = useContext(Context);
  const router = useRouter()
  
  const onSubmit = async (e) =>{
    e.preventDefault()
    if(username.length === 0 || secret.length === 0){
      return alert('file the input')
    }else{
     await axios.put('https://api.chatengine.io/users/', 
      {username, secret},
      {headers: {"Private-Key": `${privateKey}`}}
      ).then(r => router.push('/chats'))
    }
    
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Chick chat</div>
          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
export default LoginSignUp;
