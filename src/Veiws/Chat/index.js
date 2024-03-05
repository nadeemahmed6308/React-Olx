import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, { text: currentMessage, sender: 'user' }]);
      setCurrentMessage('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`alert ${
                  message.sender === 'user' ? 'alert-primary' : 'alert-secondary'
                }`}
                role="alert"
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              className="btn btn-primary"
              onClick={sendMessage}
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
