import { Button } from '@mui/material'
import React from 'react'
import {auth} from '../Firebase'
function SignOut() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button onClick={() => auth.signOut()}>Sign-Out</Button>
    </div>
  )
}

export default SignOut