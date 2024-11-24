import React, { useEffect } from 'react';

function Catalog() {
  useEffect(() => {
    document.title = "Каталог"; 
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
                    <div style={{ padding: '4px', borderRadius: '15px' }}></div>
                    {/* Форма фильтров */}
                    <div className="dropdown mb-2">
                    <button className="btn btn-secondary dropdown-toggle btn-dark" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Фильтры
                    </button>
            
                    <div action="" method="get" className="dropdown-menu bg-dark" data-bs-theme="dark">
                        <div className="form-check text-white mx-3">
                            <input className="form-check-input" type="checkbox" name="on_sale" id="flexCheckDefault" value="on"/>
                            <input type="hidden" name="q" value="request.GET.q"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Товары по акции
                            </label>
                        </div>
                        <p className="text-white mx-3 mt-3">Сортировать:</p>
                        <div className="form-check text-white mx-3">
                            <input className="form-check-input" type="radio" name="order_by" id="flexRadioDefault1" value="default" checked/>
                            <label className="form-check-label" for="flexRadioDefault1">
                                По умолчанию
                            </label>
                        </div>
                        <div className="form-check text-white mx-3">
                            <input className="form-check-input" type="radio" name="order_by" id="flexRadioDefault2" value="price"/>
                            <label className="form-check-label" for="flexRadioDefault2">
                                От дешевых к дорогим
                            </label>
                        </div>
                        <div className="form-check text-white mx-3">
                            <input className="form-check-input" type="radio" name="order_by" id="flexRadioDefault3" value="-price"/>
                            <label className="form-check-label" for="flexRadioDefault3">
                                От дорогих к дешевым
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary mx-3 mt-3">Применить</button>
                        </div>
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
                                                                <input type="text" className="form-control number" value="1"
                                                                    readOnly/>
                                                                <span className="input-group-btn">
                                                                    <button type="button" className="btn btn-dark btn-sm increment"
                                                                        data-cart-id="" data-cart-change-url="">+</button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col p-0"><strong>Стоимость:</strong></div>
                                                        <div className="col p-0">
                                                            {/* <a href="#" className="remove-from-cart" data-cart-id="">
                                        
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
                                    </div>
                                    <a className="btn btn-dark" href="/create_order">
                                        Оформить заказ
                                    </a>
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
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/tablet3.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="/product">
                                            <p className="card-title">Планшет Teclast P30T 4GB/128GB (серый)</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">                           
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn add-to-cart">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/tablet2.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="#">
                                            <p className="card-title">Планшет Huawei MatePad SE 11 Gray</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn add-to-cart">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/laptop3.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="#">
                                            <p className="card-title">Ноутбук H-Book by Horizont 15 IPK1</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/laptop2.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="#">
                                            <p className="card-title">Игровой ноутбук MSI Cyborg 15 A13VF-1225XBY</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/pc3.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="https://www.youtube.com/watch?v=qFILPlp5QKo&ab_channel=MORGENSHTERNFAMILY">
                                            <p className="card-title">Игровой компьютер HAFF Gaming Mirana 1834ipd</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/pc2.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="#">
                                            <p className="card-title">Игровой компьютер Thunderobot JT00EP00QRU</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/pc1.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="#">
                                            <p className="card-title">Компьютер JET Gamer 5i9400FD16SD48X105TL2W5</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/tablet1.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="#">
                                            <p className="card-title">Планшет Xiaomi Redmi Pad SE 6GB/128GB RU (серый)</p>
                                        </a>
                                        <p className="card-text text-truncate">Диван, он же софа обыкновенная, ничего примечательного для описания.</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/laptop1.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="#">
                                            <p className="card-title">Игровой ноутбук ASUS TUF Gaming A15 FA506NCR-HN044</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/phone3.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="#">
                                            <p className="card-title">Смартфон Huawei Pura 70 Pro 12GB/512GB (HBN-LX9) White</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/phone2.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="#">
                                            <p className="card-title">Смартфон Samsung Galaxy S24 FE 256GB серый</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Карта товара */}
                            <div className="col-lg-4 col-md-6 p-4">
                                <div className="card border-primary rounded custom-shadow">
                                    <img src="../deps/images/goods/phone1.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-div">
                                        <a href="#">
                                            <p className="card-title">Смартфон Xiaomi 14T 12GB/256GB Titan Black RU</p>
                                        </a>
                                        <p className="card-text text-truncate">Описание.</p>
                                        <p className="product_id">id: 02265</p>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Стоимость:</strong></p>
                                            <a href="#" className="btn">
                                                {/* <img className="mx-1" src="../deps/icons/cart-plus.svg" alt="Catalog Icon"
                                                    width="32" height="32"> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Пагинация */}
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center my-4">
                                <div className="custom-shadow d-flex">
                                    <li className="page-item disabled">
                                      <a className="page-link">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                      <a className="page-link" href="#">Next</a>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                        <div style={{ padding: '35px', borderRadius: '15px' }}></div>
                    </div>
                </div>
            </div>
        </section>
      </div>
  )
}

export default Catalog