import React, {useRef} from 'react'
import { IoSend } from "react-icons/io5";
const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
   const inputRef = useRef();

   const handleFormSubmit = (e) =>{
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage) return;
    inputRef.current.value = '';

   setChatHistory((history) => [...history, { role: 'user', text: userMessage }]);
   setTimeout(()=> {setChatHistory((history) => [...history, { role: 'model', text: "Přemýšlím..." }]);
   generateBotResponse([...chatHistory, { role: 'user', text: userMessage }]);
   },600);
};


  return (
    <form action="#" className="chatbot-form input-group justify-content-center" onSubmit={handleFormSubmit}>
        <input
        ref={inputRef}
          type="text"
          className=" rounded-start message-input"
          placeholder="Napiš mi tvůj příklad..."
          required
        />
        <button
          type="submit"
          className="btn  border-0 rounded-end send-button"
        >
          <IoSend />
        </button>
      </form>
  )
}

export default ChatForm
