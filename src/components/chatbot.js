import React, { useState } from 'react';
import axios from 'axios';  

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Ahoj! Jak ti mohu pomoci?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      
      const res = await axios.post(
  'https://api.openai.com/v1/chat/completions',
  {
    model: 'gpt-4.1',
    messages: [{ role: 'user', content: input }]
  },
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`
    }
  }
);
      const botReply = res.data.reply;

      
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Oops, něco se pokazilo' }]);
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: 600 }}>
      <div className="card">
        <div className="card-header">PerpartezAI</div>
        <div
          className="card-body"
          style={{ height: 400, overflowY: 'auto', background: '#f8f9fa' }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`d-flex mb-2 ${
                m.sender === 'user' ? 'justify-content-end' : 'justify-content-start'
              }`}
            >
              <div
                className={`p-2 rounded ${
                  m.sender === 'user' ? 'bg-primary text-white' : 'bg-light'
                }`}
                style={{ maxWidth: '75%' }}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Zde napiš svůj příklad.."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button className="btn btn-primary" onClick={handleSend}>
              Odeslat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}