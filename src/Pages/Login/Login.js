import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ updateAppAuthenticated, updateUsername }{ updateAppAuthenticated, updateUsername, updateId }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [teacherData, setTeacherData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
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

  const checkInfo = ()=> {
    studentData.forEach((item) => {
      console.log(item.Nachname)
      console.log(item.Password)
      if(item.Nachname === username && item.Password === password){
        setAuthenticated(true);
        navigate('/HomePage')
      }
      else {
        console.log('wrong info!')
      }
    })

    teacherData.forEach((item) => {
      if(item.Username === username && item.Password === password){
        setAuthenticated(true);
        navigate('/HomePageAdmin')
      }
      else {
        console.log('wrong info!')
      }
    })
  }

  useEffect(() => {
    if (authenticated) {
      navigate('/HomePage'); // or '/HomePageAdmin' based on your requirements
    }
  }, [authenticated, navigate]);

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