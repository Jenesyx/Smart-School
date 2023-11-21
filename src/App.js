import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage/>}/> */}
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
