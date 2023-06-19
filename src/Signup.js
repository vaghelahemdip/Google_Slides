import React, { useState } from "react";
import './Signup.css'
import {Link, Navigate, useNavigate} from "react-router-dom";


export default function Signup()
{
  const navigate = useNavigate();

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signup() {
    navigate("/login");
  }


  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (firstName.length == 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }

    // Check if the Email is an Empty string or not.

    if (email.length == 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0
    // variable to count lowercase characters in the password.
    let countLowerCase = 0
    // variable to count digit characters in the password.
    let countDigit = 0
    // variable to count special characters in the password.
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (password[i] == password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++
        }
        if (password[i] == password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++
        }
      }
    }

    if (countLowerCase == 0) {
      // invalid form, 0 lowercase characters
      alert('Invalid Form, 0 lower case characters in password')
      return
    }

    if (countUpperCase == 0) {
      // invalid form, 0 upper case characters
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

    if (countDigit == 0) {
      // invalid form, 0 digit characters
      alert('Invalid Form, 0 digit characters in password')
      return
    }

    if (countSpecialCharacters == 0) {
      // invalid form, 0 special characters characters
      alert('Invalid Form, 0 special characters in password')
      return
    }

    // if all the conditions are valid, this means that the form is valid

    alert('Form is valid')
  }
    return(
        <>
   <div class="login-page">
      <div class="form">
        <h2>Sign Up</h2>
        <form>
        <input 
        type="text"
        placeholder="First Name"
        value={firstName}
          onChange={(e) => {
            setfirstName(e.target.value);
        }}
        >
        </input><br></br>
        <input 
        type="text" 
        placeholder="Last Name"
        value={lastName}
          onChange={(e) => {
            setlastName(e.target.value);
        }}>
          </input><br></br>
        <input 
        type="text" 
        placeholder="Phone Number"
        value={phoneNumber}
          onChange={(e) => {
            setphoneNumber(e.target.value);
        }}>
          </input><br></br>
        <input 
        type="text" 
        placeholder="Email"
        value={email}
          onChange={(e) => {
            setEmail(e.target.value);
        }}>
          </input><br></br>
        <input 
        type="password" 
        placeholder="Password"
        value={password}
          onChange={(e) => {
            setPassword(e.target.value);
        }}>
          </input><br></br>
          <button onClick={signup}>Sign up</button>
        </form>
        <p class="message">Already registered? <Link to='/login'><a href="#">Login</a></Link></p>
        {/* <p class="message">Forgot your password? <a href="#">Click here to reset it</a></p> */}
      </div>
    </div>
    </>
    )
}