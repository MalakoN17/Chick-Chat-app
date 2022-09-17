import React from 'react'
import firebase from 'firebase/compat/app';
import {auth} from '../Firebase'
function SignIn() {
    const signInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
  return (
    <div>
        <button onClick={signInWithGoogle}>Sign-In with Google</button>
    </div>
  )
}

export default SignIn