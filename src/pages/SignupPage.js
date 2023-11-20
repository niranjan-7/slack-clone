import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slack from '../assets/Slack-logo-RGB.png';
import { styled } from 'styled-components';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Handle signup logic here
    console.log('Signup:', { username, name, password });

    // Navigate to the login page after signup
    navigate('/login');
  };

  return (
    <SignupContainer>
      <LogoWrapper>
        <img src={slack} alt="Slack Logo" width="150px" height="40px" />
      </LogoWrapper>
      <SignupForm>
        <InputLabel>Username</InputLabel>
        <InputField
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
        <InputLabel>Name</InputLabel>
        <InputField
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <InputLabel>Password</InputLabel>
        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <SignupButton onClick={handleSignUp}>Sign Up</SignupButton>
      </SignupForm>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LogoWrapper = styled.div`
  margin: 20px;
`;

const SignupForm = styled.div`
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

const SignupButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
`;

export default SignupPage;
