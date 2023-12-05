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
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
          <Route
            path="/HomePage"
            element={<PrivateRoute authenticated={authenticated} element={<HomePage />} />}
          />
          <Route
            path="/HomePageAdmin"
            element={<PrivateRoute authenticated={authenticated} element={<HomePageAdmin />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
