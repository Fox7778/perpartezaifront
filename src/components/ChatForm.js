import React, { useRef } from 'react';
import { IoSend } from 'react-icons/io5';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    // Clear input
    inputRef.current.value = '';

    // Build new history with user message and placeholder
    const newHistory = [
      ...chatHistory,
      { role: 'user', text: userMessage },
      { role: 'assistant', text: 'Přemýšlím...' }
    ];
    setChatHistory(newHistory);

    // Call API with actual conversation (exclude placeholder)
    const convForApi = [
      ...chatHistory,
      { role: 'user', text: userMessage }
    ];
    generateBotResponse(convForApi);
  };

  return (
    <form className="chatbot-form input-group justify-content-center" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="rounded-start message-input"
        placeholder="Napiš mi tvůj příklad..."
        required
      />
      <button type="submit" className="btn border-0 rounded-end send-button">
        <IoSend />
      </button>
    </form>
  );
};

export default ChatForm;
