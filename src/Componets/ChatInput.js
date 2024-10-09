import React, { useState } from 'react';
import './ChatInput.css'; 

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log('Message sent:', message);
    setMessage(''); 
  };

  return (
    <div className="chat-input-container">
      <div className="attachment-icon">
        <input type="file" id="file-upload" className="file-input" />
        <label htmlFor="file-upload" className="attach-label">
          📎
        </label>
      </div>

      <input
        type="text"
        className="message-input"
        placeholder="Ask Anything..."
        value={message}
        onChange={handleInputChange}
      />

      <button className="send-button" onClick={handleSendMessage}>
        ⬆️
      </button>
    </div>
  );
};

export default ChatInput;
