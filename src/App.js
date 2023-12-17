import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DirectMessagePage from './pages/DirectMessagePage';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyB3Ljhic1iwpn4Ef0qNSJQ_Ie5teD1lXy0",
  authDomain: "slack-clone-ba473.firebaseapp.com",
  projectId: "slack-clone-ba473",
  storageBucket: "slack-clone-ba473.appspot.com",
  messagingSenderId: "452478117191",
  appId: "1:452478117191:web:6e88922bbb9c23aa809862",
  measurementId: "G-95WSQ84JF5"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          {/* <Route path='/signup' element={<SignupPage />} /> */}
          <Route path='/homepage' element={<HomePage auth={auth} />} />
          <Route path='/dms' element={<DirectMessagePage />} />

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
