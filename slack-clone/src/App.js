import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import { styled } from 'styled-components';
import SidebarOne from './components/SidebarOne';
import Sidebartwo from './components/SidebarTwo';


function App() {
  return (
    <div>
      <Router>
{/*         
          <Routes>
             <Route path='/' exact element={<HomePage />} />
             <Route path='/login' exact element={<LoginPage />} />
           
          </Routes> */}

          <>  
            <Header />
            <BodyContainer>
              <SidebarOne />
              <Sidebartwo />
              <Routes>
                <Route path='/' exact>
                  {/* Chat */}
                </Route>
              </Routes>
            </BodyContainer>

          </>
        
      </Router>
    </div>
  );
}

export default App;


const BodyContainer = styled.div`
  display:flex;
  height: 100vh;
`