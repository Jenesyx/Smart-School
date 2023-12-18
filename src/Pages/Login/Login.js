import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ updateAppAuthenticated, updateUsername, updateId }) {

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

    let studentMatch = false;
    let foundStudent = null;

    studentData.forEach((item) => {
      if (item.Nachname === username && item.Password === password) {
        studentMatch = true;
        foundStudent = item;
        setAuthenticated(true);
        updateAppAuthenticated(true);
        updateUsername(username)
        updateId(item.Schueler_ID)
        console.log('Student correct');
        navigate('/HomePage');
      }
    });

    if (!studentMatch) {
      teacherData.forEach((item) => {
        if (item.Username === username && item.Password === password) {
          setAuthenticated(true);
          updateAppAuthenticated(true);
          updateUsername(username)
          updateId(item.Lehrer_ID)
          console.log('Teacher correct');
          navigate('/HomePageAdmin');
        }
      });
    }

    if (!studentMatch) {
      setIsHidden(!isHidden);
      console.log('Wrong info!');
    } else {
      // Access the additional information about the user (e.g., Schueler_ID)
      const schuelerID = foundStudent.Schueler_ID;
      console.log('Schueler_ID:', schuelerID);
    }
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