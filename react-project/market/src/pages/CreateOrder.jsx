import React, { useEffect } from 'react';

function CreateOrder() {
  useEffect(() => {
    document.title = "Оформление заказа"; 
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
                                    <a className="nav-link  text-white" href="/cart">Корзина</a>
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
                            <div className=" bg-white p-4 mb-4 mx-2 rounded custom-shadow">
                                <div className="container">
                                    <h3 className="text-center mb-4">Выбранные товары</h3>
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
                                                                <input type="text" className="form-control number" value="1"
                                                                    readonly/>
                                                                <span className="input-group-btn">
                                                                    <button type="button" className="btn btn-dark btn-sm increment"
                                                                        data-cart-id="" data-cart-change-url="">+</button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col p-0"><strong>0.0 BYN</strong></div>
                                                        <div className="col p-0">
                                                            <a href="#" className="remove-from-cart" data-cart-id="">
                                                                <img className="mx-1" src="../deps/icons/trash3-fill.svg"
                                                                    alt="Catalog Icon" width="16" height="16"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card mb-3 shadow-lg">
                                            <div className="card-footer">
                                                <p className="float-left">Итого <strong>0</strong> товар(а) на сумму</p>
                                                <h4 className="float-left"><strong>0.0 BYN</strong></h4>
                                            </div>
                                        </div>
                                       {/* Закончилась разметка корзины */}
                                    </div>
                                </div>
                               {/* Детали заказа */}
                                <div className="container">
                                    <h3 className="text-center">Детали заказа</h3>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label for="id_first_name" className="form-label">Имя*:</label>
                                                        <input type="text" className="form-control" id="id_first_name"
                                                            name="first_name" required/>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label for="id_last_name" className="form-label">Фамилия*:</label>
                                                        <input type="text" className="form-control" id="id_last_name" name="last_name" required/>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label for="id_phone_number" className="form-label">Номер телефона*:</label>
                                                        <input type="text" className="form-control" id="id_phone_number" name="phone_number"
                                                            placeholder="В формате: XXX-XXX-XX-XX"
                                                            required/>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <label for="delivery" className="form-label">Способ доставки: </label>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="requires_delivery"
                                                                id="id_requires_delivery" value="1" checked/>
                                                            <label className="form-check-label" for="id_requires_delivery">Нужна
                                                                доставка</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="requires_delivery"
                                                                id="id_requires_delivery" value="0"/>
                                                            <label className="form-check-label" for="id_requires_delivery">Самовывоз</label>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3" id="deliveryAddressField">
                                                        <label for="id_delivery_address" className="form-label">Адрес
                                                            доставки*:</label>
                                                        <textarea className="form-control" id="id_delivery_address"
                                                            name="delivery_address" rows="2"></textarea>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <label className="form-label">Способ оплаты: </label>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="payment_on_get"
                                                                id="id_payment_on_get" value="0" checked/>
                                                            <label className="form-check-label" for="id_payment_on_get">Оплата
                                                                картой</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="payment_on_get"
                                                                id="id_payment_on_get" value="1"/>
                                                            <label className="form-check-label" for="id_payment_on_get">Наличными/картой
                                                                при плучении</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ padding: '35px', borderRadius: '15px' }}></div>
          </body>
    </div>
  )
}

export default CreateOrder