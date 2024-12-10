import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CartModal from '../components/CartModal';
import CatalogDropdown from '../components/CatalogDropdown';

function Registration() {
  const { t } = useTranslation();
  
  useEffect(() => {
    document.title = t("registration"); 
  }, [t]);

  return (
    <div>
      <section>
        <div className="container">
          <div className="row mt-1 position-fixed z-3">
            <CatalogDropdown />
            <div>
              <button
                type="button"
                className="btn btn-dark btn-secondary d-flex"
                id="modalButton"
                aria-expanded="false"
              >
                <img
                  className="mx-1"
                  src="../deps/icons/basket2-fill.svg"
                  alt="Catalog Icon"
                  width="24"
                  height="24"
                />
                <span>0</span>
              </button>
            </div>
          </div>
          <CartModal />
        </div>

        <div className="container">
          <div className="row mt-1">
            <div className="col-lg-2">
            </div>
            <div className="col-lg-10">
              <div className="row">
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-md-9 bg-white p-4 mb-5 mx-2 rounded custom-shadow">
                      <h2 className="text-center mb-4">{t('registrationTitle')}</h2> 
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label">{t('firstNameLabel')}*</label> 
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              placeholder={t('firstNamePlaceholder')} 
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label">{t('lastNameLabel')}*</label> 
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              placeholder={t('lastNamePlaceholder')} 
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="username" className="form-label">{t('usernameLabel')}*</label> 
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder={t('usernamePlaceholder')}
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">{t('emailLabel')}*</label> 
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder={t('emailPlaceholder')} 
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="password1" className="form-label">{t('passwordLabel')}*</label> 
                            <input
                              type="password"
                              className="form-control"
                              id="password1"
                              placeholder={t('passwordPlaceholder')} 
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="password2" className="form-label">{t('confirmPasswordLabel')}*</label> 
                            <input
                              type="password"
                              className="form-control"
                              id="password2"
                              placeholder={t('confirmPasswordPlaceholder')} 
                              required
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-dark btn-block">
                          {t('registerButton')} 
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
