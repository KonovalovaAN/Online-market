import React, { useState, useEffect } from 'react';
import './Chat.css';
import './ChatAuth.css'
import './Error.css'
import axios from 'axios'
import messageIcon from './chatIcons/ChatIcon.svg';
import closeIcon from './chatIcons/CloseIcon.svg';
import backArrow from './chatIcons/BackArrow.png'
import sendIcon from './chatIcons/SendIcon.svg';
import searchIcon from './chatIcons/SearchIcon.svg';
import clipIcon from './chatIcons/ClipIcon.svg';
import stickerIcon from './chatIcons/StickerIcon.svg';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [ws, setWs] = useState(null);

  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [isRegistering, setIsRegistering] = useState(false); // Registration state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [chats, setChats] = useState([]); // Все чаты
  const [searchQuery, setSearchQuery] = useState(""); // Запрос поиска
  const [selectedChat, setSelectedChat] = useState(null); // Текущий выбранный чат


  useEffect(() => {
    console.log("using useEffect")
    console.log(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'}));
    const socket = new WebSocket(`ws://localhost:8000/ws/chats/${username}/`);
    socket.onopen = () => console.log('WebSocket connected');
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data)
      // setMessages((prev) => [...prev, data]);
      // setMessages([data])
    };
    socket.onerror = (error) => console.error('WebSocket Error:', error);
    socket.onclose = () => console.log('WebSocket connection closed');
    setWs(socket);

    return () => {
      socket.close();
    };
  }, [username]);

    // const handleSend = () => {
    //   if (inputValue.trim() || file) {
    //     console.log("sending message..")
    //     const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    //     const socket = new WebSocket(`ws://localhost:8000/ws/chats/${username}/${selectedChat.username}/`);
    //     socket.onopen = () => {
    //       console.log('WebSocket connected');
    //       console.log("before send")
    //       ws.send(JSON.stringify({ text: inputValue, file: file ? URL.createObjectURL(file) : null, timestamp }));
    //       console.log("after send")
    //     }
    //     socket.onmessage = (event) => {
    //       const data = JSON.parse(event.data);
    //       selectedChat.messages = [selectedChat.messages, data.message]
    //       console.log(selectedChat)
    //       // setMessages((prev) => [...prev, data]);
    //       // setMessages([data])
    //     };
    //     socket.onerror = (error) => console.error('WebSocket Error:', error);
    //     socket.onclose = () => console.log('WebSocket connection closed');
    //     setWs(socket)
    //   // return () => {
    //   //   socket.close();
    //   // };
    //   //   if (ws) {
    //   //     ws.send(JSON.stringify({ text: inputValue, file: file ? URL.createObjectURL(file) : null, timestamp }));
    //   //   }
    //     setMessages([...messages, { text: inputValue, file, type: 'sent', timestamp }]);
    //     setInputValue('');
    //     setFile(null);
    //     console.log("end sending...")
    //   }
    // };

  const handleSend = () => {
  if (inputValue.trim() || file) {
    console.log("Initializing WebSocket...");
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const socket = new WebSocket(`ws://localhost:8000/ws/chats/${username}/${selectedChat.username}/`);

    // Создаем Promise для ожидания успешного подключения WebSocket
    const waitForConnection = new Promise((resolve, reject) => {
      socket.onopen = () => {
        console.log('WebSocket connected');
        resolve(socket);
      };
      socket.onerror = (error) => {
        console.error('WebSocket Error:', error);
        reject(error);
      };
    });

    waitForConnection
      .then((connectedSocket) => {
        console.log("WebSocket ready to send message");
        const messageData = JSON.stringify({
          text: inputValue,
          file: file ? URL.createObjectURL(file) : null,
          timestamp,
        });

        connectedSocket.send(messageData);
        console.log("Message sent:", messageData);

        // Сохраняем WebSocket в состоянии, чтобы поддерживать связь
        setWs(connectedSocket);

        // Обновляем список сообщений
        // setMessages([...messages, { text: inputValue, file, type: 'sent', timestamp }]);
        setInputValue('');
        setFile(null);
      })
      .catch((error) => {
        console.error("Failed to establish WebSocket connection:", error);
      });

    // Обработка сообщений и закрытия WebSocket
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Message received:", data);
      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   { text: data.message, type: 'received', timestamp: data.timestamp },
      // ]);
      console.log(selectedChat.messages)
      selectedChat.messages = selectedChat.messages + data.message
      console.log(selectedChat.messages)
      console.log(selectedChat)
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }
};


  const handleLogin = async () => {
  if (username && password) {
    // setIsAuthenticated(true);
    try {
      let response = await axios.post('http://localhost:8000/chat/login/', { username, password });
      if (response.data.success) {
        setIsAuthenticated(true);
        response = await axios.post('http://localhost:8000/chat/load/', { username });
        console.log(response)
        console.log(response.data)

        // console.log(response.data.alina)
        setChats(response.data)
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


  const handleRegister = () => {
    // Mock registration logic; replace with API call if needed
    if (username && password) {
      alert('Пользователь зарегистрирован!');
      setIsRegistering(false);
    } else {
      alert('Введите корректные данные для регистрации.');
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

        {/* Отображение ошибки */}
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
          <div className="input-container">
            Появились вопросы? Пишите нам!
            <div className="icon-container">
              <img src={messageIcon} alt="Message icon" className="icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className={`chat-window ${isOpen ? 'open' : 'close'}`}>
          <div className="chat-header">
            {selectedChat ? (
                <>
                  {/*<button*/}
                  {/*    className="back-button"*/}
                  {/*    onClick={() => setSelectedChat(null)}*/}
                  {/*>*/}
                  {/*  ← Назад*/}
                  {/*</button>*/}
                  <img
                      src={backArrow}
                      alt="Назад"
                      className="icon"
                      onClick={() => setSelectedChat(null)}
                  />
                  <span>Чат с {selectedChat.username}</span>
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

          {!selectedChat ? (
            <>
              {/* Поле поиска */}
              <div className="search-field">
                <input
                  type="text"
                  placeholder="Поиск чатов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>

              {/* Список чатов */}
              <div className="chat-list">
                {chats
                  .filter((chat) =>
                    chat.username
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((chat, index) => (
                    <div
                      key={index}
                      className="chat-item"
                      onClick={() => {
                          console.log(chat);
                          console.log("aaaaaaaaaaaaaaaaaaa")
                          setSelectedChat(chat);}}
                    >
                      {chat.username}
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <>
              {/* Переписка с выбранным собеседником */}
              <div className="chat-body">
                {selectedChat.messages
                  .map((msg, index) => (
                    <div
                      key={index}
                      // className={`message-bubble ${
                      //   msg.type === 'sent' ? 'sent' : 'received'
                      // }`}
                    >
                      {msg && <p>{msg}</p>}
                      {msg.timestamp && (
                        <span className="timestamp">{msg.timestamp}</span>
                      )}
                    </div>
                  ))}
              </div>

              {/* Поле ввода сообщения */}
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
                {/*<button*/}
                {/*    className="emoji-button"*/}
                {/*    onClick={() => setShowEmojiPicker(!showEmojiPicker)}*/}
                {/*>*/}
                {/*  😊*/}
                {/*</button>*/}
                {/*<button className="send-button" onClick={handleSend}>*/}
                {/*  Отправить*/}
                {/*</button>*/}
                <img
                    src={sendIcon}
                    alt="Отправить"
                    className="send-button"
                    onClick={handleSend}
                />
                {showEmojiPicker && (
                    <div className="emoji-picker">
                      {['😊', '😂', '😍', '😎'].map((emoji, index) => (
                          <button
                              key={index}
                              onClick={() => setInputValue(inputValue + emoji)}
                          >
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
