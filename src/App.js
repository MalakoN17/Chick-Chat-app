import './app.css'
import SignIn from "./Components/SignIn";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './Firebase'
import Chat from "./Components/Chat";


function App() {
  const [user] = useAuthState(auth)
  return (
    <>
    {user ? <Chat/> :<SignIn/>}
    
    </>
  );
}

export default App;
