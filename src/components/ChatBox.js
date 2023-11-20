import React, { useState } from 'react';
import { styled } from 'styled-components';
import AccountBox from '@material-ui/icons/AccountBox';
import { Headset } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import FaceIcon from '@material-ui/icons/Face';

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      username: 'virat',
      message: 'Hi',
      timestamp: '4:53:28 AM',
    },
    {
      username: 'Kamal',
      message: 'Hola',
      timestamp: '4:53:28 AM',
    },
    {
      username: 'Kane',
      message: 'Hey ',
      timestamp: '4:53:28 AM',
    },
    {
      username: 'Ney',
      message: 'Yo',
      timestamp: '4:53:28 AM',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAddMessage = () => {
    // Add the new message to the messages state
    setMessages([
      ...messages,
      {
        username: 'Niranjan',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);

    setNewMessage('');
  };

  return (
    <ChatBoxContainer>
      <TopHeader>
        <h2>#general</h2>
        <TopRightSection>
          <AccountBoxWrapper>
            <AccountBox />
            4
          </AccountBoxWrapper>
          <HeadsetWrapper>
            <Headset />
            <CloseIcon />
          </HeadsetWrapper>
        </TopRightSection>
      </TopHeader>

      {messages.map((msg, index) => (
        <Message key={index}>
          <UserDetails>
            <FaceIcon />
            <Username>{msg.username.slice(0, 3)}</Username>
            <Timestamp>{msg.timestamp}</Timestamp>
          </UserDetails>
          <MessageContent>{msg.message}</MessageContent>
        </Message>
      ))}

      <InputContainer>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleAddMessage}>Send</button>
      </InputContainer>
    </ChatBoxContainer>
  );
}

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Username = styled.div`
  margin-right: 5px;
`;

const Timestamp = styled.div`
  margin-left: auto;
`;

const MessageContent = styled.div`
  background-color: #F8E8EE;
  border: 1px solid #D7CCC8;
  padding: 8px;
  margin-top: 5px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
  border-bottom: 2px solid;
`;

const TopRightSection = styled.div`
  display: flex;
  align-items: center;
`;

const AccountBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 5px;
  border: 2px solid;
  padding: 4px;
`;

const HeadsetWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 2px solid;
  padding: 4px;
`;

const ChatBoxContainer = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  margin-top: 48px;
  overflow: auto;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-top: 2px solid;
  input {
    flex: 1;
    margin-right: 8px;
  }
`;

export default ChatBox;
