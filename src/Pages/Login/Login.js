import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ updateAppAuthenticated, updateUsername, updateId, updateToken }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [teacherData, setTeacherData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/Student')
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching "Student" data:', error);
      });

    axios.get('http://localhost:4000/api/Teacher')
      .then((response) => {
        setTeacherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching "Teacher" data:', error);
      });
  },[]);

  const checkInfo = () => {
    axios.post('http://localhost:4000/api/auth/login',{ username, password })
    .then(response => {
      const { data } = response;
      updateToken(response.data.token);
      console.log(`this is it ${response.data.token}`)
      if (data.auth === true) {
        setAuthenticated(true);
        updateAppAuthenticated(true);
        if (data.userRole === 'student') {
          updateUsername(username);
          updateId(data.userId);
          console.log('Student login successful');
          navigate('/HomePage');
        } else if (data.userRole === 'teacher') {
          updateUsername(username);
          updateId(data.userId);
          console.log('Teacher login successful');
          navigate('/HomePageAdmin');
        } else {
          console.log('User/Admin Login error!');
        }
      } else {
        setIsHidden(!isHidden);
        console.log('Login failed');
      }
    })
    .catch(error => {
      console.error('Login error:', error);
      setIsHidden(!isHidden);
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
          <input type="text" placeholder='' onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="password">
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <p className={`err ${isHidden ? 'highlight' : ''}`}>Username or Password is wrong</p>
        </div>
        <div>
        </div>
        <div className="button" onClick={checkInfo}>
          <p>Sign in</p>
        </div>
      </div>
    </div>
  );
}

export default Login;