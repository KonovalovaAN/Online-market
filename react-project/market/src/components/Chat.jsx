import React, { useState } from 'react';
import './Chat.css';
import messageIcon from './chatIcons/ChatIcon.svg';
import closeIcon from './chatIcons/CloseIcon.svg';
import sendIcon from './chatIcons/SendIcon.svg';
import searchIcon from './chatIcons/SearchIcon.svg';
import clipIcon from './chatIcons/ClipIcon.svg';
import StickerIcon from './chatIcons/StickerIcon.svg';
import { useTranslation } from 'react-i18next';  

const Chat = () => {
  const { t } = useTranslation();  
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); 

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
      
      setInputValue(''); 
      setFile(null); 
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emoji) => {
    setInputValue(inputValue + emoji); 
    setShowEmojiPicker(false); 
  };

  const emojis = ['😊', '😂', '😢', '😍', '😎', '😜', '😇']; 

  return (
    <div>
      {!isOpen && !closing ? (
        <div className="chat-container" onClick={toggleChat}>
          <div className="input-container">
            {t('prompt')}
            <div className="icon-container">
              <img src={messageIcon} alt={t('messageIcon')} className="icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className={`chat-window ${isOpen && !closing ? 'open' : 'close'}`}>
          <div className="chat-header">
            <img src={searchIcon} alt={t('searchIcon')} className="icon" />
            {t('header')}
            <img src={closeIcon} alt={t('closeIcon')} className="icon" onClick={toggleChat} />
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
              <img src={clipIcon} alt={t('attachIcon')} className="clip-icon" />
            </label>
            <input
              id="file-input"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <input
              type="text"
              placeholder={t('placeholder')}
              className="input-with-emoji"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="emoji-button" onClick={toggleEmojiPicker}>
              <img src={StickerIcon} alt={t('emojiIcon')} />
            </button>
            <button className="send-button" onClick={handleSend}>
              <img src={sendIcon} alt={t('sendIcon')} />
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
