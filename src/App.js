import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login'
import HomePage from './Pages/HomePage/HomePage'
import HomePageAdmin from './Pages/HomePageAdmin/HomePageAdmin'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Admin" element={<HomePageAdmin/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
