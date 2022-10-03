import React from 'react'
import { Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import {auth} from '../Firebase'
import { Container } from '@mui/system';
function SignIn() {
    const signInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
  return (
    
    <Container maxWidth="sm">
    <div style={{textAlign:'center'}}>
      <h1>welcome to Chick Chat</h1>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button onClick={signInWithGoogle}>Sign-In with Google</Button>
    </div>
    </Container>
  
  )
}

export default SignIn