import React, { useEffect } from 'react';

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
                     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-div">
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
                                                                    <input type="text" className="form-control number" value="1" readOnly/>
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