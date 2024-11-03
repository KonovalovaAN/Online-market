import React from 'react'

function Index() {
  return (
    <div>
        <body>
            <section>
                <div className="container">
                    {/* Каталог и корзина с фиксированным расположением на странице */}
                    <div className="row mt-1 position-fixed z-3">
                        {/* Каталог */}
                        <div className="dropdown mb-2">
                            <button className="btn btn-secondary dropdown-toggle btn-dark" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Каталог
                                <img className="mx-1" src="deps/icons/grid-fill.svg" alt="Catalog Icon" width="16" height="16"/>
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
                            <button type="button" className="btn btn-dark btn-secondary d-flex" id="modalButton"
                                aria-expanded="false">
                                <img className="mx-1" src="deps/icons/basket2-fill.svg" alt="Catalog Icon" width="24" height="24"/>
                                <span id="goods-in-cart-count">0</span>
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
                </section>
                <section>
                    <div className="container">
                        <div className="row mt-1">
                            <div className="col-lg-2">
                                {/* Пустой блок на усмотрение */}
                            </div>
                            <div className="col-lg-10">
                                <div style={{ padding: '5px', borderRadius: '15px' }}></div>
                                <div className="text-background">
                                    <h3 className="text-center">Добро пожаловать в магазин TechKing!</h3>
                                </div>
                                <div style={{ padding: '10px', borderRadius: '15px' }}></div>
                                <div className="text-background">
                                    <h3 className="text-center">Популярные категории</h3>
                                </div>
                
                                <div className="d-flex flex-row flex-nowrap overflow-auto">
                                    {/* Карта товара */}
                                    <div className="p-4">
                                        <a href="/catalog" className="text-decoration-none">
                                            <div className="card border-primary rounded custom-shadow card-custom"> {/* Используем новый класс здесь */}
                                                <img src="../deps/images/смартфоны.jpg" className="card-img" alt="Смартфоны"/>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">Смартфоны</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </div>                            
                                    {/* Карта товара */}
                                    <div className="p-4">
                                        <a href="/catalog" className="text-decoration-none">
                                            <div className="card border-primary rounded custom-shadow card-custom">
                                                <img src="../deps/images/ноутбуки.jpg" className="card-img" alt="Ноутбуки"/>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">Ноутбуки</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Карта товара */}
                                    <div className="p-4">
                                        <a href="/catalog" className="text-decoration-none">
                                            <div className="card border-primary rounded custom-shadow card-custom">
                                                <img src="../deps/images/планшеты.jpg" className="card-img" alt="Планшеты"/>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">Планшеты</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Карта товара */}
                                    <div className="p-4">
                                        <a href="/catalog" className="text-decoration-none">
                                            <div className="card border-primary rounded custom-shadow card-custom">
                                                <img src="../deps/images/компьютеры.jpg" className="card-img" alt="Компьютеры"/>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">Компьютеры</h5>
                                                </div>
                                            </div>
                                        </a>
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

export default Index