// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {useState } from 'react';
import { UserContext } from './UserContext';
import About from "./components/about/About"
import Home from './components/home/Home';
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp"
import Profile from './components/Profile/Profile';
import Chat from './components/chat/Chat';
import Room from './components/Room/Room';
function App() {

  const [user, setUser] = useState(null)

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
