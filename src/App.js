import './app.css'
import SignIn from "./Components/SignIn";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './Firebase'
import Chat from "./Components/Chat";
import HomePage from './pages/HomePage';


function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
    {user ? <Chat/> :<HomePage/>}
    </div>
    
  );
}

export default App;
