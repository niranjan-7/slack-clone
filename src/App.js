import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/homepage' element={<HomePage />} />

          <Route
            path='/'
            element={
              <>
                <Navigate to='/login' replace />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
