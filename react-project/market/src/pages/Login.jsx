import React, { useEffect } from 'react';
import CartModal from '../components/CartModal';
import CatalogDropdown from '../components/CatalogDropdown';

function Login() {
  useEffect(() => {
    document.title = "Войти"; 
  }, []);
  return (  
      <div>
          <section>
              <div className="container">
                  {/* Каталог и корзина с фиксированным расположением на странице */}
                  <div className="row mt-1 position-fixed z-3">
                      {/* Каталог */}
                      <CatalogDropdown />
                      {/* Значек корзины, вызывает модальное окно */}
                      <div>
                          <button type="button" className="btn btn-dark btn-secondary d-flex" id="modalButton" aria-expanded="false">
                              <img className="mx-1" src="../deps/icons/basket2-fill.svg" alt="Catalog Icon" width="24"
                                  height="24"/>
                              <span>0</span>
                          </button>
                      </div>
                      <CartModal />
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
                                  <div className="row justify-content-center">
                                      <div className="col-md-6 bg-white p-4 mb-4 mx-3 rounded custom-shadow">
                                        <h2 className="text-center mb-4">Авторизация</h2>
                                          <form>
                                            <div className="mb-3">
                                              <label for="username" className="form-label">Имя пользователя</label>
                                              <input type="text" className="form-control" id="username" placeholder="Введите ваше имя пользователя" required/>
                                            </div>
                                            <div className="mb-3">
                                                <label for="password" className="form-label">Пароль</label>
                                                <input type="password" className="form-control" id="password" placeholder="Введите ваш пароль" required/>
                                            </div>
                                            <button type="submit" className="btn btn-dark btn-block">Войти</button>
                                            </form>
                                            <div className="mt-3">
                                                <a href="#">Забыли пароль?</a> | <a href="/registration">Создать аккаунт</a>
                                            </div>
                                            <hr />
                                            <div className="text-center">
                                              <p>Или авторизуйтесь через:</p>
                                              <a href="#" className="btn btn-dark" style={{ padding: '5px', borderRadius: '5px', marginRight: '10px' }}>
                                                  <img className="mx-1" src="../deps/icons/google.svg" alt="Google Icon" width="16" height="16" />
                                                  Google
                                              </a>
                                              <a href="#" className="btn btn-dark" style={{ padding: '5px', borderRadius: '5px', marginRight: '10px' }}>
                                                  <img className="mx-1" src="../deps/icons/facebook.svg" alt="Facebook Icon" width="16" height="16" />
                                                  Facebook
                                              </a>
                                              <a href="#" className="btn btn-dark" style={{ padding: '5px', borderRadius: '5px' }}>
                                                  <img className="mx-1" src="../deps/icons/github.svg" alt="GitHub Icon" width="16" height="16" />
                                                  GitHub
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
        </div>
  )
}

export default Login