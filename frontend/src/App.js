// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

import About from "./components/about/About"
import Home from './components/home/Home';
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp"
import Profile from './components/Profile/Profile';
import Chat from './components/chat/Chat';
function App() {
  return (

<Router>
<div className="App">

      <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route exact path="/signin" component={Login}></Route>
    <Route path="/signup" component={SignUp}></Route>
    <Route path="/chat" component={Chat}></Route>
    <Route path="/profile" component={Profile}></Route>

  </Switch>
 
    </div>
</Router>


   
  );
}

export default App;
