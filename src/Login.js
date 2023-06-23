import React,{ useState } from "react";
import './Login.css'
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from 'formik';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, updateEmailError] = useState('');
  const [passwordErrorMessage, updatePasswordError] = useState('');
  const errors = {};
  
  // React.useEffect(() => {
  //   axios.get('http://localhost:8000/list').then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);
  

  function validateForm() {
    if (email.length === 0) {
      updateEmailError('Please enter an email');
      return;
    }
  
    if (password.length === 0) {
      updatePasswordError('Please enter a password');
      return;
    }
  


    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    if(email == "admin@scirendering.com" && password == "Sciren1!@")
    {
      navigate("/home");
    }
    else
    {
      alert("Please enter valid email and password");
    }
  }
  
    
  return (
    <>
       <div class="login-page">
      <div class="form">
        <span><marquee>Currently this is in maintenance mode, then only admin can Login.</marquee></span>
        <h2 style={{marginTop:20}}>Login</h2>
        <form>
        <input 
        type="text" 
        placeholder="Username" 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          updateEmailError('');
        }}
/>
{emailErrorMessage && <span className="error">{emailErrorMessage}</span>}

        <input 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          updatePasswordError('');
        }}
/>
{passwordErrorMessage && <span className="error">{passwordErrorMessage}</span>}

          {/* <button onClick={() => {
            validateForm()
          }}>Log in</button> */}
          <button type="button" onClick={validateForm}>Log in</button>

        </form>
        {/* <p class="message">Not registered? <Link to='/signup'><a href="#">Sign Up</a></Link></p> */}
        {/* <p class="message">Forgot your password? <a href="#">Click here to reset it</a></p> */}
      </div>
    </div>
    </>
  );
}
