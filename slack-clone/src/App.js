import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <div>
      <Router>
        
          <Routes>
             <Route path='/' exact element={<HomePage />} />
             <Route path='/login' exact element={<LoginPage />} />
            <Route path='/signup' exact element={<SignupPage />} />
          </Routes>

          
        
      </Router>
    </div>
  );
}

export default App;


