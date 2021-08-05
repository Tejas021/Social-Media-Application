// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/utilities/Navbar"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Signup from "./components/login/Signup"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Login />
      <Signup />
 
    </div>
  );
}

export default App;
