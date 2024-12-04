import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import CartModal from '../components/CartModal';
import CatalogDropdown from '../components/CatalogDropdown';

function Login() {
  const { t } = useTranslation(); 

  useEffect(() => {
    document.title = t('login'); 
  }, [t]);

  return (  
      <div>
          <section>
              <div className="container">
                  <div className="row mt-1 position-fixed z-3">
                      <CatalogDropdown />
                      <div>
                          <button type="button" className="btn btn-dark btn-secondary d-flex" id="modalButton" aria-expanded="false">
                              <img className="mx-1" src="../deps/icons/basket2-fill.svg" alt={t('catalogIconAlt')} width="24" height="24"/>
                              <span>0</span>
                          </button>
                      </div>
                      <CartModal />
                  </div>
              </div>
              <div className="container">
                  <div className="row mt-1">
                      <div className="col-lg-2">
                      </div>
                      <div className="col-lg-10">
                          <div className="row">
                              <div className="container mt-5">
                                  <div className="row justify-content-center">
                                      <div className="col-md-6 bg-white p-4 mb-4 mx-3 rounded custom-shadow">
                                        <h2 className="text-center mb-4">{t('login')}</h2>
                                          <form>
                                            <div className="mb-3">
                                              <label htmlFor="username" className="form-label">{t('username')}</label>
                                              <input type="text" className="form-control" id="username" placeholder={t('usernamePlaceholder')} required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">{t('password')}</label>
                                                <input type="password" className="form-control" id="password" placeholder={t('passwordPlaceholder')} required />
                                            </div>
                                            <button type="submit" className="btn btn-dark btn-block">{t('loginButton')}</button>
                                            </form>
                                            <div className="mt-3">
                                                <a href="#">{t('forgotPassword')}</a> | <a href="/registration">{t('createAccount')}</a>
                                            </div>
                                            <hr />
                                            <div className="text-center">
                                              <p>{t('orLoginWith')}</p>
                                              <a href="#" className="btn btn-dark" style={{ padding: '5px', borderRadius: '5px', marginRight: '10px' }}>
                                                  <img className="mx-1" src="../deps/icons/google.svg" alt="Google Icon" width="16" height="16" />
                                                  {t('google')}
                                              </a>
                                              <a href="#" className="btn btn-dark" style={{ padding: '5px', borderRadius: '5px', marginRight: '10px' }}>
                                                  <img className="mx-1" src="../deps/icons/facebook.svg" alt="Facebook Icon" width="16" height="16" />
                                                  {t('facebook')}
                                              </a>
                                              <a href="#" className="btn btn-dark" style={{ padding: '5px', borderRadius: '5px' }}>
                                                  <img className="mx-1" src="../deps/icons/github.svg" alt="GitHub Icon" width="16" height="16" />
                                                  {t('github')}
                                              </a>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ padding: '35px', borderRadius: '15px' }}></div>
        </div>
  )
}

export default Login;
