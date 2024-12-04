import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CatalogDropdown from '../components/CatalogDropdown';
import Cart from '../components/Cart'; 
import Orders from '../components/Orders';

function Profile() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('profile');
  }, [t]);

  return (
    <div>
      <section>
        <div className="container">
          {/* Каталог и корзина с фиксированным расположением на странице */}
          <div className="row mt-1 position-fixed z-3">
            {/* Каталог */}
            <CatalogDropdown />
          </div>
        </div>
        {/* Контент */}
        <div className="container">
          <div className="row mt-1">
            <div className="col-lg-2">
              {/* Пустой блок на усмотрение */}
            </div>
            <div className="col-lg-10">
              {/* Контент на странице */}
              <div className="row">
                <div className="container mt-5">
                  <div className="row">
                    {/* Профиль с данными пользователя */}
                    <div className="col-md-5">
                      <div className="bg-white p-4 mb-4 mx-2 rounded custom-shadow">
                        <h3 className="text-center mb-4">{t('profile')}</h3>
                        <form>
                          <div className="row">
                            <div className="col-md-12 mb-3 text-center">
                              <img
                                src="../deps/images/baseavatar.jpg"
                                alt="Аватар пользователя"
                                className="img-fluid rounded-circle"
                                style={{ maxWidth: '150px' }}
                              />
                              <input
                                type="file"
                                className="form-control mt-3"
                                id="avatar"
                                accept="image/*"
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
                                value=""
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
                                value=""
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
                                value=""
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
                                value=""
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
