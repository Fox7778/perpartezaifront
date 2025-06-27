import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './chatbot.css';
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import axios from 'axios';

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const OPENAI_API_KEY = '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'

  const generateBotResponse = async (history) => {
    // Prepare messages in correct format
    const messages = history.map(({ role, text }) => ({
      role,
      content: text
    }));

    // Debug: ensure API key is loaded
    console.log('🔑 API Key:',OPENAI_API_KEY);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4.1',
          messages
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`
          }
        }
      );

      const botText = response.data.choices[0].message.content;
      setChatHistory((prev) => [
        ...prev,
        { role: 'assistant', text: botText }
      ]);
    } catch (error) {
      console.error('OpenAI API error:', error);
      setChatHistory((prev) => [
        ...prev,
        { role: 'assistant', text: '⚠️ Omlouvám se, něco se pokazilo.' }
      ]);
    }
  };

  return (
    <div className="container rounded chatbot-container">
      <div className="row text-center chatbot-header">
        <h1>PerpartezAI</h1>
      </div>

      <div className="chatbot-body">
        {chatHistory.length === 0 && (
          <div className="message-bot d-flex">
            <p className="message-text">Jak ti mohu pomoci?</p>
          </div>
        )}

        {chatHistory.map((chat, index) => (
          <ChatMessage key={index} chat={chat} />
        ))}
      </div>

      <div className="chatbot-footer">
        <ChatForm
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
        />
      </div>
    </div>
  );
};

export default Chatbot;
