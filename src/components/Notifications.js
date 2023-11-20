import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

function Notifications({ newMessages }) {
  return (
    <NotificationContainer>
      <h3>Notifications</h3>
      <ul>
        {newMessages.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </NotificationContainer>
  );
}

function ChatBox() {
  const [messages, setMessages] = useState([
    // Existing messages...
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMessages, setFilteredMessages] = useState(messages);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Check for new messages and add notifications
    const latestMessage = messages[messages.length - 1];
    if (latestMessage) {
      setNotifications([
        `New message from ${latestMessage.username}: "${latestMessage.message}"`,
        ...notifications,
      ]);
    }
  }, [messages]);

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
    <></>
  );
}

// Add the styles for the Notifications component

const NotificationContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  overflow: hidden;

  h3 {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
  }
`;

// Rest of the styled components remain the same

export default ChatBox;
