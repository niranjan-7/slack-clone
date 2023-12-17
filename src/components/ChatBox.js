import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Auth } from 'firebase/auth';



const ChatBox = ({ auth }) => {
  const dummy = useRef();
  const firestore = getFirestore();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'), limit(25));

  const [messages] = useCollectionData(q, { idField: 'id' });
  const [newMessage, setNewMessage] = useState('');

  const addMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

    const newMessageObj = {
      text: newMessage,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      username: displayName || 'Anonymous',
    };

    await addDoc(messagesRef, newMessageObj);

    setNewMessage('');
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ChatBoxContainer>
        {messages &&
          messages.map((msg) => (
            <Message key={msg.id} message={msg} auth={auth} />
          ))}

        <span ref={dummy}></span>
      </ChatBoxContainer>

      <InputContainer>
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit" disabled={!newMessage} onClick={addMessage}>
            Send
          </button>
      </InputContainer>
    </>
  );
};


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

const Message = ({ message,auth }) => {
  
  
  const { text, uid, photoURL, username, createdAt } = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <MessageContainer className={`message ${messageClass}`}>
      <UserDetails>
        <UserAvatar
          src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
        />
        <UserInfo>
          <Username>{username}</Username>
          <Timestamp>{formatDate(createdAt)}</Timestamp>
        </UserInfo>
      </UserDetails>
      <MessageContent>{text}</MessageContent>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.div`
  font-weight: bold;
`;

const Timestamp = styled.div`
  color: gray;
  font-size: 12px;
`;

const MessageContent = styled.div`
  background-color: #f8e8ee;
  border: 1px solid #d7ccc8;
  padding: 8px;
  margin-top: 5px;
  max-width: 300px;
  word-wrap: break-word;
`;

const formatDate = (timestamp) => {
  const date = timestamp.toDate();
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export default ChatBox;
