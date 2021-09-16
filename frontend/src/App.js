// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {useState,useEffect} from 'react';
import { UserContext } from './UserContext';
import About from "./components/about/About"
import Home from './components/home/Home';
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp"
import Profile from './components/Profile/Profile';
import Chat from './components/chat/Chat';
import Room from './components/Room/Room';
import Cookies from 'js-cookie';
function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const cookie = Cookies.get()
    // document.cookie="user=Tejas";

    const verifyUser = async () => {
      try {
        const res = await fetch('http://localhost:5000/verifyuser', {
        method:"POST",  
        credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({cookie})
        });
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error)
      }


    }
    verifyUser()


  }, [])




  return (

<Router>
<div className="App">
<UserContext.Provider value={{user,setUser}}>

<Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/signin" component={Login}></Route>
    <Route path="/signup" component={SignUp}></Route>
    <Route path="/chat" component={Chat}></Route>
    <Route path="/room" component={Room}></Route>
    <Route path="/profile" component={Profile}></Route>

  </Switch>
</UserContext.Provider>
      
 
    </div>
</Router>


   
  );
}

export default App;
