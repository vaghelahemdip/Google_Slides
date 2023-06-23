import logo from './logo.svg';
import './App.css';
import Home from './home';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from './privateRoute/auth';


function App() {
  const userEmail = localStorage.getItem("email");
  if(!userEmail)
  {
    console.log("user not loggedIn");
  } 
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/home" element={
            <PrivateRoute>
            <Home />
            </PrivateRoute>
            }>
            </Route> 
            <Route exact path="/" element={<Login />}></Route> 
            <Route exact path="/signup" element={<Signup />}></Route> 
            <Route exact path="/login" element={<Login />}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
