import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:4000/api/Teacher/login', {
      username: username,
      password: password,
    })
      .then((response) => {
        const userType = response.data.userType;
        if (userType === 'teacher') {
          navigate('/homepageadmin');
        } else {
          console.error('Unexpected user type:', userType);
        }
      })
      .catch((error) => {
        console.error('Error during teacher login:', error);
      });

    axios.post('http://localhost:4000/api/Student/login', {
      username: username,
      password: password,
    })
      .then((response) => {
        const userType = response.data.userType;
        if (userType === 'student') {
          navigate('/homepage');
        } else {
          console.error('Unexpected user type:', userType);
        }
      })
      .catch((error) => {
        console.error('Error during student login:', error);
      });
  };

  return (
    <div className='login-holder'>
      <div className='login'>Login</div>
      <div className="welcome">
        <p>Welcome to Pro Edupage!</p>
        <p>Please sign in to your account and start the adventure</p>
      </div>
      <div className="inputs">
        <div className="username">
          <p>Username or Lastname</p>
          <input type="text" placeholder='Bidkhori' onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="password">
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button" onClick={handleLogin}>
          <p>Sign in</p>
        </div>
      </div>
    </div>
  );
}

export default Login;