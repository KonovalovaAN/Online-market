import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CatalogDropdown from '../components/CatalogDropdown';
import Cart from '../components/Cart';
import Orders from '../components/Orders';

function Profile() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  });
  const [avatar, setAvatar] = useState('../deps/images/baseavatar.jpg'); // Путь к стандартной аватарке

  useEffect(() => {
    document.title = t('profile');

    // Загрузка данных из localStorage при загрузке компонента
    const savedData = JSON.parse(localStorage.getItem('profileData'));
    const savedAvatar = localStorage.getItem('profileAvatar');

    if (savedData) {
      setFormData(savedData);
    }

    if (savedAvatar) {
      setAvatar(savedAvatar); // Восстанавливаем аватарку
    }
  }, [t]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result); 
        localStorage.setItem('profileAvatar', reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profileData', JSON.stringify(formData)); 
    alert(t('dataSaved')); 
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row mt-1 position-fixed z-3">
            <CatalogDropdown />
          </div>
        </div>
        <div className="container">
          <div className="row mt-1">
            <div className="col-lg-2"></div>
            <div className="col-lg-10">
              <div className="row">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="bg-white p-4 mb-4 mx-2 rounded custom-shadow">
                        <h3 className="text-center mb-4">{t('profile')}</h3>
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-md-12 mb-3 text-center">
                              <img
                                src={avatar}
                                alt="Аватар пользователя"
                                className="img-fluid rounded-circle"
                                style={{ maxWidth: '150px' }}
                              />
                              <input
                                type="file"
                                className="form-control mt-3"
                                id="avatar"
                                accept="image/*"
                                onChange={handleAvatarChange}
                              />
                            </div>
                            <div className="col-md-12 mb-3">
                              <label htmlFor="firstName" className="form-label">
                                {t('firstName')}*
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder={t('enterFirstName')}
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="col-md-12 mb-3">
                              <label htmlFor="lastName" className="form-label">
                                {t('lastName')}*
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder={t('enterLastName')}
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="col-md-12 mb-3">
                              <label htmlFor="username" className="form-label">
                                {t('username')}*
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder={t('enterUsername')}
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="col-md-12 mb-3">
                              <label htmlFor="email" className="form-label">
                                {t('email')}*
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder={t('enterEmail')}
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-dark">
                            {t('save')}
                          </button>
                        </form>
                      </div>
                    </div>
                    <Cart />
                  </div>
                </div>
                <Orders />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ padding: '35px', borderRadius: '15px' }}></div>
    </div>
  );
}

export default Profile;
