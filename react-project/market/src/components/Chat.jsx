import React, { useState } from 'react';
import './Chat.css';
import messageIcon from './chatIcons/ChatIcon.svg';
import closeIcon from './chatIcons/CloseIcon.svg';
import sendIcon from './chatIcons/SendIcon.svg';
import searchIcon from './chatIcons/SearchIcon.svg';
import clipIcon from './chatIcons/ClipIcon.svg';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleChat = () => {
    if (isOpen) {
      setClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
      }, 400);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      {!isOpen && !closing ? (
        <div className="chat-container" onClick={toggleChat}>
          <div className="input-container">
            Появились вопросы? Пишите нам!
            <div className="icon-container">
              <img src={messageIcon} alt="Message icon" className="icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className={`chat-window ${isOpen && !closing ? 'open' : 'close'}`}>
          <div className="chat-header">
            <img src={searchIcon} alt="Search icon" className="icon" />
            Напишите ваше сообщение
            <img src={closeIcon} alt="Close chat" className="icon" onClick={toggleChat} />
          </div>
          <div className="chat-body">
            {/* Messages will go here */}
          </div>
          <div className="chat-input">
            <img src={clipIcon} alt="Attach icon" className="clip-icon" />
            <input type="text" placeholder="Введите сообщение" className="input-with-emoji" />
            <button className="send-button">
              <img src={sendIcon} alt="Send icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
