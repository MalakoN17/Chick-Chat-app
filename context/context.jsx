import React, {useState, createContext} from 'react'

export const Context = createContext();

function ContextProvider(props) {
    const [username, setUserName] = useState("");
    const [secret, setSecret] = useState("");

    const value = {
        username,
        setUserName,
        secret,
        setSecret,
    }
  return (
    <Context.Provider value={value}>{props.children}</Context.Provider>
  )
}

export default ContextProvider 