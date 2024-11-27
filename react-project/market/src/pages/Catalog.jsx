import React, { useEffect, useState } from 'react';

function Catalog() {
  const [goods, setGoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    document.title = "Каталог";

    fetch('http://127.0.0.1:8000/api/goods/') // Получаем данные с API
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch goods");
        }
        return response.json();
      })
      .then(data => {
        setGoods(data); // Сохраняем данные товаров
      })
      .catch(error => {
        console.error("Error fetching goods:", error);
      });
  }, []);

  // Разделение товаров по страницам
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = goods.slice(indexOfFirstItem, indexOfLastItem);

  // Переключение страниц
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <div className="container">
          {/* Каталог товаров */}
          <div className="row mt-1">
            <div className="col-lg-2">{/* Placeholder for left column */}</div>
            <div className="col-lg-10">
              {/* Display goods */}
              <div className="row">
                {currentItems.length > 0 ? (
                  currentItems.map((item, index) => (
                    <div className="col-lg-4 col-md-6 p-4" key={index}>
                    {/* Карта товара */}
                    <div className="card border-primary rounded custom-shadow h-100">
                      <img 
                        src={`http://127.0.0.1:8000${item.image}`} 
                        className="card-img-top" 
                        alt={item.name} 
                        style={{ 
                          width: '310px', 
                          height: '350px', 
                          objectFit: 'contain', 
                          display: 'block', 
                          marginLeft: 'auto', 
                          marginRight: 'auto', 
                          paddingTop: '10px' 
                        }} 
                      />
                      
                      <div className="card-body d-flex flex-column">
                        <a href="#">
                          <p className="card-title">{item.name}</p>
                        </a>
                        <p><strong>Характеристики:</strong> {item.description}</p>
                  
                        {/* Move the price to the bottom */}
                        <div className="mt-auto d-flex justify-content-between">
                          <p><strong>Стоимость:</strong> {item.price} BYN</p>
                          <a href="#" className="btn add-to-cart">
                            {/* Иконка корзины */}
                          </a>
                        </div>
                      </div>
                    </div>                  
                    </div>
                  ))
                ) : (
                  <p>Товары не найдены.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Пагинация */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center my-4">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={() => paginate(currentPage - 1)}>Previous</a>
          </li>
          {[...Array(Math.ceil(goods.length / itemsPerPage))].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <a className="page-link" href="#" onClick={() => paginate(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === Math.ceil(goods.length / itemsPerPage) ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>Next</a>
          </li>
        </ul>
      </nav>
      <div style={{ padding: '35px', borderRadius: '15px' }}></div>
    </div>
  );
}

export default Catalog;
