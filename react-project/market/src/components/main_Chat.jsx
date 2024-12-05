import React, { useState } from 'react';
import './Chat.css';
import messageIcon from './chatIcons/ChatIcon.svg';
import closeIcon from './chatIcons/CloseIcon.svg';
import sendIcon from './chatIcons/SendIcon.svg';
import searchIcon from './chatIcons/SearchIcon.svg';
import clipIcon from './chatIcons/ClipIcon.svg';
import StickerIcon from './chatIcons/StickerIcon.svg';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State for emoji picker

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

  const handleSend = () => {
    if (inputValue.trim() || file) {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([
        ...messages,
        { text: inputValue, file, type: 'sent', timestamp },
      ]);

      setInputValue(''); // Clear input
      setFile(null); // Clear file
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emoji) => {
    setInputValue(inputValue + emoji); // Append emoji to input
    setShowEmojiPicker(false); // Hide emoji picker after selection
  };

  const emojis = ['😊', '😂', '😢', '😍', '😎', '😜', '😇']; // Simple emoji list

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
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-bubble ${msg.type === 'sent' ? 'sent' : 'received'}`}
              >
                {msg.text && <p>{msg.text}</p>}
                {msg.file && (
                  <div className="file-attachment">
                    📎 <a href={URL.createObjectURL(msg.file)} target="_blank" rel="noopener noreferrer">{msg.file.name}</a>
                  </div>
                )}
                {msg.timestamp && <span className="timestamp">{msg.timestamp}</span>}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <label htmlFor="file-input">
              <img src={clipIcon} alt="Attach icon" className="clip-icon" />
            </label>
            <input
              id="file-input"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <input
              type="text"
              placeholder="Введите сообщение"
              className="input-with-emoji"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="emoji-button" onClick={toggleEmojiPicker}>
              <img src={StickerIcon} alt="Emoji icon" />
            </button>
            <button className="send-button" onClick={handleSend}>
              <img src={sendIcon} alt="Send icon" />
            </button>

            {showEmojiPicker && (
              <div className="emoji-picker">
                {emojis.map((emoji, index) => (
                  <button
                    key={index}
                    className="emoji"
                    onClick={() => handleEmojiSelect(emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
