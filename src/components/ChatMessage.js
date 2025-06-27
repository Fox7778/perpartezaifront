import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './chatbot.css';

const ChatMessage = ({ chat }) => {
  const isBot = chat.role === 'assistant';
  return (
    <div className={`d-flex mb-2 ${isBot ? 'justify-content-start' : 'justify-content-end'}`}>
      <div className={`message ${isBot ? 'message-bot' : 'message-user'}`}>
        <p className="message-text">{chat.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;