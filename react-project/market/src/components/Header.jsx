import React from 'react'

function Header() {
  return (
    <div>
            <header>
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
                                    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Информация
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                          <a className="dropdown-item  text-white" href="#">
                                            Доставка и оплата
                                            </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item  text-white" href="#">
                                            Контактная информация
                                            </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item  text-white" href="/about">
                                            Про нас
                                            </a>
                                        </li>
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
            </header>
    </div>
  )
}

export default Header