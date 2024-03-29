import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Pages/Login/Login'
import HomePage from './Pages/HomePage/HomePage'
import HomePageAdmin from './Pages/HomePageAdmin/HomePageAdmin'

const PrivateRoute = ({ element, authenticated, ...props }) => {
  return authenticated ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: props.location }} replace />
  );
};

function App() {
  const [appAuthenticated, setAppAuthenticated] = useState(false);
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState('')
  const [token, setToken] = useState('')


  const updateAppAuthenticated = (value) => {
    setAppAuthenticated(value);
  };

  const updateUsername = (value) => {
    setUsername(value)
  }

  const updateId = (value) => {
    setUserId(value)
  }

  const updateToken = (value) => {
    setToken(value)
  }


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/HomePage"
            element={
              <PrivateRoute
                authenticated={appAuthenticated}
                element={<HomePage mainUsername={username} userId={userId} token={token}/>}
              />
            }
          />
          <Route
            path="/HomePageAdmin"
            element={
              <PrivateRoute
                authenticated={appAuthenticated}
                element={<HomePageAdmin mainUsername={username} userId={userId} token={token}/>}
              />
            }
          />
          <Route
            path="/login"
            element={<Login updateAppAuthenticated={updateAppAuthenticated} updateUsername={updateUsername} updateId={updateId} updateToken={updateToken}/>}
          />
          <Route
            path="/"
            element={<Login updateAppAuthenticated={updateAppAuthenticated} updateUsername={updateUsername} updateId={updateId} updateToken={updateToken}/>}
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
