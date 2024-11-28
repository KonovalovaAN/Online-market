  import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';
  import CartModal from '../components/CartModal';
  import CatalogDropdown from '../components/CatalogDropdown';
  import FiltersDropdown from '../components/FiltersDropdown'; 

  // const String = `192.168.0.100`
  const String = `127.0.0.1`

  function Catalog() {
    const [goods, setGoods] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    useEffect(() => {
      document.title = "Каталог";

      fetch('http://' + String + ':8000/api/goods/') // Получаем данные с API
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
                      <CatalogDropdown />
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
                      <FiltersDropdown />
                      </div>
                      <CartModal />
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
                          src={`http://` + String + `:8000${item.image}`} 
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
                        <Link to={`/product/${encodeURIComponent(item.name)}`}>
                          <p className="card-title">{item.name}</p>
                        </Link>

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
