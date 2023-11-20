import React, { useState } from 'react';
import { styled } from 'styled-components';
import AccountBox from '@material-ui/icons/AccountBox';
import { Headset } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import FaceIcon from '@material-ui/icons/Face';

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      username: 'Virat Kohli',
      message: 'Hi everyone',
      timestamp: '4:52:18 AM',
    },
    {
      username: 'Kamal Haasan',
      message: 'Hola amigos',
      timestamp: '4:53:47 AM',
    },
    {
      username: 'Harry Kane',
      message: 'Hey mate',
      timestamp: '4:55:51 AM',
    },
    {
      username: 'Neymar Jr',
      message: 'Yo guys',
      timestamp: '4:59:28 AM',
    },
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

      <SearchInput
        type="text"
        placeholder="Search users or messages"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {filteredMessages.map((msg, index) => (
        <Message key={index}>
          <UserDetails>
            <FaceIcon />
            <Username>{msg.username}</Username>
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

const SearchInput = styled.input`
  margin: 10px;
  padding: 8px;
`;

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
