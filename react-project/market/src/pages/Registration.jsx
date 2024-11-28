import React, { useEffect } from 'react';
import CartModal from '../components/CartModal';
import CatalogDropdown from '../components/CatalogDropdown';

function Registration() {
  useEffect(() => {
    document.title = "Регистрация"; 
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
                  </div>
                  <CartModal />
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
                                      <div className="col-md-9 bg-white p-4 mb-5 mx-2 rounded custom-shadow">
                                          <h2 className="text-center mb-4">Регистрация</h2>
                                          <form>
                                              <div className="row">
                                                  <div className="col-md-6 mb-3">
                                                      <label for="firstName" className="form-label">Имя*</label>
                                                      <input type="text" className="form-control" id="firstName"
                                                          placeholder="Введите ваше имя" required/>
                                                  </div>
                                                  <div className="col-md-6 mb-3">
                                                      <label for="lastName" className="form-label">Фамилия*</label>
                                                      <input type="text" className="form-control" id="lastName"
                                                          placeholder="Введите вашу фамилию" required/>
                                                  </div>
                                                  <div className="col-md-6 mb-3">
                                                      <label for="username" className="form-label">Имя пользователя*</label>
                                                      <input type="text" className="form-control" id="username"
                                                          placeholder="Введите ваше имя пользователя" required/>
                                                  </div>
                                                  <div className="col-md-6 mb-3">
                                                      <label for="email" className="form-label">Email*</label>
                                                      <input type="email" className="form-control" id="email"
                                                          placeholder="Введите ваш email" required/>
                                                  </div>
                                                  <div className="col-md-6 mb-3">
                                                      <label for="password1" className="form-label">Пароль*</label>
                                                      <input type="password" className="form-control" id="password1"
                                                          placeholder="Введите пароль" required/>
                                                  </div>
                                                  <div className="col-md-6 mb-3">
                                                      <label for="password2" className="form-label">Подтверждение пароля*</label>
                                                      <input type="password" className="form-control" id="password2"
                                                          placeholder="Подтвердите пароль" required/>
                                                  </div>
                                              </div>
                                              <button type="submit"
                                                  className="btn btn-dark btn-block">Зарегистрироваться</button>
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
  )
}

export default Registration