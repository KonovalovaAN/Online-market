import React, { useEffect } from 'react';

function Registration() {
  useEffect(() => {
    document.title = "Регистрация"; 
  }, []);
  return (
    <div>  
      <body>
          {/* <header>
              <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                  <div className="container">
                      <a className="navbar-brand" href="/">Главная</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item dropdown ">
                                  <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                      Информация
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li><a className="dropdown-item  text-white" href="#">Доставка и оплата</a></li>
                                      <li><a className="dropdown-item  text-white" href="#">Контактная информация</a></li>
                                      <li><a className="dropdown-item  text-white" href="#">Про нас</a></li>
                                  </ul>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link  text-white" href="/carts">Корзина</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link  text-white" href="/login">Войти</a>
                              </li>
                              <li className="nav-item dropdown ">
                                  <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                      Мой профиль
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li><a className="dropdown-item  text-white" href="/cart">Корзина</a></li>
                                      <li><a className="dropdown-item  text-white" href="/profile">Личный кабинет</a>
                                      </li>
                                      <li><a className="dropdown-item  text-white" href="#">Админ панель</a></li>
                                      <li>
                                          <hr className="dropdown-divider"/>
                                      </li>
                                      <li><a className="dropdown-item  text-white" href="#">Выйти</a></li>
                                  </ul>
                              </li>
                          </ul>
                          <form className="d-flex" role="search">
                              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
                              <button className="btn btn-search" type="submit">Поиск</button>
                          </form> 
                      </div>
                  </div>
              </nav>
          </header> */}
          <section>
              <div className="container">
                  {/* Каталог и корзина с фиксированным расположением на странице */}
                  <div className="row mt-1 position-fixed z-3">
                      {/* Каталог */}
                      <div className="dropdown mb-2">
                          <button className="btn btn-secondary dropdown-toggle btn-dark" type="button" data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Каталог
                              <img className="mx-1" src="../deps/icons/grid-fill.svg" alt="Catalog Icon" width="16"
                                  height="16"/>
                          </button>
                          <ul className="dropdown-menu bg-dark" data-bs-theme="dark">
                              <li><a className="dropdown-item text-white" href="/catalog">Все товары</a></li>
                              <li><a className="dropdown-item text-white" href="/catalog">Ноутбуки</a></li>
                              <li><a className="dropdown-item text-white" href="/catalog">Планшеты</a></li>
                              <li><a className="dropdown-item text-white" href="/catalog">Смартфона</a></li>
                              <li><a className="dropdown-item text-white" href="/catalog">Компьютеры</a></li>
                          </ul>
                      </div>
                      {/* Значек корзины, вызывает модальное окно */}
                      <div>
                          <button type="button" className="btn btn-dark btn-secondary d-flex" id="modalButton" aria-expanded="false">
                              <img className="mx-1" src="../deps/icons/basket2-fill.svg" alt="Catalog Icon" width="24"
                                  height="24"/>
                              <span>0</span>
                          </button>
                      </div>
{/* Разметка модального окна корзины */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <h3 className="text-center mb-4">Корзина</h3>
                                        <div className="container" id="cart-items-container">
                                            {/* Разметка корзины */}
                                            <div className="card mb-3 text-bg-light shadow-lg">
                                                <div className="card-header">
                                                    <h5 className="card-title">Товар</h5>
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="row text-center">
                                                            <div className="col p-0">
                                                                <div className="input-group">
                                                                    <span className="input-group-btn">
                                                                        <button type="button" className="btn btn-dark btn-sm decrement"
                                                                            data-cart-id="" data-cart-change-url="">-</button>
                                                                    </span>
                                                                    <input type="text" className="form-control number" value="1" readonly/>
                                                                    <span className="input-group-btn">
                                                                        <button type="button" className="btn btn-dark btn-sm increment"
                                                                            data-cart-id="" data-cart-change-url="">+</button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col p-0"><strong>Стоимость:</strong></div>
                                                            <div className="col p-0">
                                                                {/* <a href="#" className="remove-from-cart" data-cart-id="">
                                                                    <img className="mx-1" src="deps/icons/trash3-fill.svg"
                                                                        alt="Catalog Icon" width="16" height="16">
                                                                </a> */}
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card mb-3 shadow-lg">
                                                <div className="card-footer">
                                                    <p className="float-left">Итого <strong>0</strong> товар(а) на сумму</p>
                                                    <h4 className="float-left"><strong>0 BYN</strong></h4>
                                                </div>
                                            </div>
                                            {/* Закончилась разметка корзины */}
                                            <a className="btn btn-dark" href="/create_order">
                                                Оформить заказ
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Закончилась разметка модального окна */}
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
      </body>
    </div>
  )
}

export default Registration