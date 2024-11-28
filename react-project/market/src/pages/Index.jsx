import React from 'react'
import CartModal from '../components/CartModal';
import CatalogDropdown from '../components/CatalogDropdown';

function Index() {
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
                            <button type="button" className="btn btn-dark btn-secondary d-flex" id="modalButton"
                                aria-expanded="false">
                                <img className="mx-1" src="deps/icons/basket2-fill.svg" alt="Catalog Icon" width="24" height="24"/>
                                <span id="goods-in-cart-count">0</span>
                            </button>
                        </div>
                        
                        {/* Разметка модального окна корзины */}
                        <CartModal />                        
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
                                                <div className="card-div">
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
                                                <div className="card-div">
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
                                                <div className="card-div">
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
                                                <div className="card-div">
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
        </div>
  )
}

export default Index