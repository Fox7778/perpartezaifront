import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./chatbot.css"
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
const Chatbot = () => {
 const [chatHistory, setChatHistory] = useState([]);

 const generateBotResponse = async (history) =>{
  history = history.map(({role, text}) => ({role, role:[{text}]}))
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json','Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`},
      body: JSON.stringify({
      model: "gpt-4.1",
      messages:history
    }),
 };
 try{
  const response = await fetch ("https://api.openai.com/v1/chat/completions", requestOptions);
    const data = await response.json();
    if(!response.ok){
      throw new Error(data.error.message || 'Oops! Něco se pokazilo.');
    }
console.log(data);
 } catch(error){
    console.log(error);
  }
};

  return (
    <div className="container rounded chatbot-container">
      <div className="row text-center chatbot-header">
        <h1>PerpartezAI</h1>
        </div>
        {/* chatbot body */}
     <div className="chatbot-body">
        <div className="message-bot d-flex">
          <p className="message-text">  Hello, how can i help you ?</p>
        </div>

        {chatHistory.map((chat, index) => (
          <ChatMessage key={index} chat={chat}/>
        ))}
        
     </div>
        <div className="chatbot-footer">
      <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
    </div>

    </div>
  )
}

export default Chatbot;
