import React, { useState } from 'react';
import { styled } from 'styled-components';
import FaceIcon from '@mui/icons-material/Face';

function DirectMessages({ selectedUser }) {
  const [messages, setMessages] = useState([
    {
      username: 'Niranjan',
      message: 'Hey, how are you?',
      timestamp: '5:02:18 PM',
    },
    {
      username: selectedUser,
      message: 'Hi there! Im good.',
      timestamp: '5:03:47 PM',
    },
    // Additional messages can be added as needed
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMessages, setFilteredMessages] = useState(messages);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAddMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessageObj = {
        username: 'Niranjan',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages([...messages, newMessageObj]);
      setFilteredMessages([...filteredMessages, newMessageObj]);
      setNewMessage('');
    }
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredMessages = messages.filter(
      (msg) =>
        msg.username.toLowerCase().includes(searchTerm) ||
        msg.message.toLowerCase().includes(searchTerm)
    );

    setSearchTerm(searchTerm);
    setFilteredMessages(filteredMessages);
  };

  return (
    <ChatBoxContainer>
      {/* Your existing code for top header, search input, and messages */}
      {/* ... */}

      {filteredMessages.map((msg, index) => (
        <Message key={index} sentByUser={msg.username === 'Niranjan'}>
          <UserDetails>
            <FaceIcon />
            <Username>{msg.username}</Username>
            <Timestamp>{msg.timestamp}</Timestamp>
          </UserDetails>
          <MessageContent>{msg.message}</MessageContent>
        </Message>
      ))}

      {/* Your existing code for the input container */}
      {/* ... */}
    </ChatBoxContainer>
  );
}


export default DirectMessages;




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
  background-color: #f8e8ee;
  border: 1px solid #d7ccc8;
  padding: 8px;
  margin-top: 5px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

const ChatBoxContainer = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  margin-top: 48px;
  overflow: auto;
`;
