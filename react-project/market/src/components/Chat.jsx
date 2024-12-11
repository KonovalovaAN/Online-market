
import React, { useState, useEffect } from 'react';
import './Chat.css';
import './ChatAuth.css';
import './Error.css';
import axios from 'axios';
import messageIcon from './chatIcons/ChatIcon.svg';
import closeIcon from './chatIcons/CloseIcon.svg';
import backArrow from './chatIcons/BackArrow.png';
import sendIcon from './chatIcons/SendIcon.svg';
import searchIcon from './chatIcons/SearchIcon.svg';
import clipIcon from './chatIcons/ClipIcon.svg';
import stickerIcon from './chatIcons/StickerIcon.svg';
import plusIcon from './chatIcons/PlusIcon1.png'; // Add a plus icon for creating new chats

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [ws, setWs] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [isRegistering, setIsRegistering] = useState(false); // Registration state
  const [fromUser, setFromUser] = useState('');
  const [toUser, setToUser] = useState('');
  const [messages, setMessages] = useState([]);
  const [password, setPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [conversations, setConversations] = useState([]);
  const [showNewChatInput, setShowNewChatInput] = useState(false); // Control visibility of input field
  const [newChatUsername, setNewChatUsername] = useState(''); // Store new chat username

  // Fetch conversations after login
  const loadConversations = async () => {
    const response = await axios.post('http://25.43.123.165:8000/chat/load/conversations/', { fromUser });
    console.log("LOAD CONVERSATIONS")
    // console.log("add")
    console.log(response)
    setConversations(response.data);
  };

  const handleNewChatSubmit = async () => {
    if (newChatUsername) {
      try {
        const response = await axios.post('http://25.43.123.165:8000/chat/create_conversation/', { newChatUsername });
        if (response.data.success) {
          console.log("success")
          setToUser(newChatUsername);
          const usernameExists = conversations.some(convo => convo.username === newChatUsername);

          if (!usernameExists) {
            // Если нет, добавляем новый объект с username в начало массива
            setConversations([{ username: newChatUsername }, ...conversations]);
          }
          handleClickOnChat(newChatUsername);
          setShowNewChatInput(false);
        } else {
          console.log("not success")
          setError('Пользователь не найден');
        }
      } catch (error) {
        setError('Ошибка при создании чата');
      }
    }
  };

    const handleSend = () => {
  if (inputValue.trim() || file) {
    const timestamp = new Date().toISOString();
      const messageData = JSON.stringify({
              text: inputValue,
              file: file ? URL.createObjectURL(file) : null,
              timestamp,
            });

            ws.send(messageData);
            console.log("Message sent:", messageData);

            // setMessages([...messages, { text: inputValue, file, type: 'sent', timestamp }]);
            setInputValue('');
            setFile(null);
  }
};
  const handleClickOnChat = async (toUser) => {
    const response = await axios.post('http://25.43.123.165:8000/chat/load/messages/', { fromUser, toUser });
    setMessages(response.data);
    const socket = new WebSocket(`ws://25.43.123.165:8000/ws/chats/${fromUser}/${toUser}/`);
    socket.onopen = () => {
      console.log('WebSocket connected');
    };
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // console.log("onmessage trigger")
      // console.log(fromUser, data.type)
      // data.type = fromUser === data.type ? 'sent' : 'received';
      setMessages((prevMessages) => [...prevMessages, data]);
    };
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
    setWs(socket);
  };

    const handleRegister = () => {
    // Mock registration logic; replace with API call if needed
    if (fromUser && password) {
      alert('Пользователь зарегистрирован!');
      setIsRegistering(false);
    } else {
      alert('Введите корректные данные для регистрации.');
    }
  };

  const handleLogin = async () => {
    if (fromUser && password) {
      try {
        let response = await axios.post('http://25.43.123.165:8000/chat/login/', { fromUser, password });
        if (response.data.success) {
          setIsAuthenticated(true);
          loadConversations();
        } else {
          setError('Неверный логин или пароль');
        }
      } catch (error) {
        setError('Ошибка при авторизации');
      }
    } else {
      setError('Введите корректные данные для входа.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="auth-container">
        <div className="auth-box">
          <h2>{isRegistering ? 'Регистрация' : 'Вход'}</h2>
          <input
            type="text"
            placeholder="Логин"
            value={fromUser}
            onChange={(e) => setFromUser(e.target.value)}
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
          <button onClick={isRegistering ? handleRegister : handleLogin} className="auth-button">
            {isRegistering ? 'Зарегистрироваться' : 'Войти'}
          </button>
          <button onClick={() => setIsRegistering(!isRegistering)} className="toggle-button">
            {isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
          </button>
          {error && (
            <div className="auth-error">
              <img src="/path/to/error-icon.svg" alt="Error" className="error-icon" />
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      {!isOpen ? (
        <div className="chat-container" onClick={() => setIsOpen(true)}>
          <div className="input-container" onClick={() => loadConversations()}>
            Появились вопросы? Пишите нам!
            <div className="icon-container">
              <img src={messageIcon} alt="Message icon" className="icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className={`chat-window ${isOpen ? 'open' : 'close'}`}>
          <div className="chat-header">
            {toUser ? (
              <>
                <img
                  src={backArrow}
                  alt="Назад"
                  className="icon"
                  onClick={() => {
                    ws.close();
                    setWs(null);
                    setToUser(null);
                  }}
                />
                <span>Чат с {toUser}</span>
              </>
            ) : (
              <span>Ваши чаты</span>
            )}
            <img
              src={closeIcon}
              alt="Close chat"
              className="icon"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {!toUser ? (
            <>
              <div className="search-field">
                <input
                  type="text"
                  placeholder="Поиск чатов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="chat-list">
                {conversations
                  .filter((conversation) =>
                    conversation.username.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((conversation, index) => (
                    <div
                      key={index}
                      className="chat-item"
                      onClick={() => {
                        setToUser(conversation.username);
                        handleClickOnChat(conversation.username);
                      }}
                    >
                      {conversation.username}
                    </div>
                  ))}
              </div>

              <div className="new-chat-button" onClick={() => setShowNewChatInput(true)}>
                <img
                    src={plusIcon}
                    alt="Добавить чат"
                    className="add-chat-button"
                />
              </div>

              {showNewChatInput && (
                  <div className="new-chat-input">
                  <input
                    type="text"
                    placeholder="Введите имя пользователя"
                    value={newChatUsername}
                    onChange={(e) => setNewChatUsername(e.target.value)}
                  />
                  <button onClick={handleNewChatSubmit}>Создать чат</button>
                  <button onClick={() => setShowNewChatInput(false)}>Отменить</button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="chat-body">
                {messages.map((msg, index) => (
                  <div key={index} className={`message-bubble ${msg.type === 'sent' ? 'sent' : 'received'}`}>
                    {msg.text && <p>{msg.text}</p>}
                    {msg.timestamp && (
                      <span className="timestamp">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Введите сообщение"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="input-with-emoji"
                />
                <img
                  src={stickerIcon}
                  alt="Стикеры"
                  className="emoji-button"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                />
                <img
                  src={sendIcon}
                  alt="Отправить"
                  className="send-button"
                  onClick={handleSend}
                />
                {showEmojiPicker && (
                  <div className="emoji-picker">
                    {['😊', '😂', '😍', '😎'].map((emoji, index) => (
                      <button key={index} onClick={() => setInputValue(inputValue + emoji)}>
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chat;
