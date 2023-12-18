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

  const updateAppAuthenticated = (value) => {
    setAppAuthenticated(value);
  };

  const updateUsername = (value) => {
    setUsername(value)
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
                element={<HomePage mainUsername={username} />}
              />
            }
          />
          <Route
            path="/HomePageAdmin"
            element={
              <PrivateRoute
                authenticated={appAuthenticated}
                element={<HomePageAdmin mainUsername={username} />}
              />
            }
          />
          <Route
            path="/login"
            element={<Login updateAppAuthenticated={updateAppAuthenticated} updateUsername={updateUsername} />}
          />
          <Route
            path="/"
            element={<Login updateAppAuthenticated={updateAppAuthenticated} updateUsername={updateUsername} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
