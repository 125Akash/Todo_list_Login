
import LandingPage from "./LandingPage";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Components/Loader";
import './App.css';
function App() {
  const { isAuthenticated,isLoading } = useAuth0();
  if(isLoading){
    return <div className="loader"><Loader/></div>
  }
 return(<>
 {isAuthenticated ? (<Home/>) : (<LandingPage/>)}
 </>);
}

export default App;
