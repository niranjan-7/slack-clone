import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import slack from '../assets/Slack-logo-RGB.png';
import { styled } from 'styled-components';
import { signInWithGoogle } from '../firebase'; // Import your Firebase authentication function
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, navigate to '/homepage'
        navigate('/homepage');
      }
    });

    return () => {
      // Unsubscribe from the listener when the component unmounts
      unsubscribe();
    };
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle(); // Call your Firebase authentication function
    } catch (error) {
      // Handle authentication error
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <BodyContainer>
      <LogoWrapper>
        <img src={slack} alt="Slack Logo" width="150px" height="40px" />
      </LogoWrapper>
      <LoginForm>
        <GoogleSignInButton onClick={handleGoogleSignIn}>
          Sign In with Google
        </GoogleSignInButton>
      </LoginForm>
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LogoWrapper = styled.div`
  margin: 20px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoogleSignInButton = styled.button`
  background-color: #4285f4;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
`;

export default LoginPage;
