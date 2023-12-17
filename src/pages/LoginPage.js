import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slack from '../assets/Slack-logo-RGB.png';
import { styled } from 'styled-components';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    navigate('/homepage');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <BodyContainer>
      <LogoWrapper>
        <img src={slack} alt="Slack Logo" width="150px" height="40px" />
      </LogoWrapper>
      <LoginForm>
        <InputLabel>Username</InputLabel>
        <InputField
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
        <InputLabel>Password</InputLabel>
        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <LoginButton onClick={handleLogin}>Login</LoginButton>
        <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
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

const InputLabel = styled.label`
  margin: 10px 0;
`;

const InputField = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  width: 200px;
`;

const LoginButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  margin-bottom: 10px;
`;

const SignUpButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
`;

export default LoginPage;
