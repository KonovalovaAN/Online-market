import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CatalogDropdown from '../components/CatalogDropdown';

const String = '127.0.0.1';

function Product() {
  const { name } = useParams(); 
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      console.error('Отсутствует параметр имени продукта');
      return;
    }

    fetch('http://' + String + ':8000/api/goods/' + name)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Товар не найден');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data); 
      })
      .catch((error) => {
        console.error('Ошибка при загрузке товара:', error);
        alert('Товар не найден. Попробуйте еще раз.');
      });
  }, [name]); 

  const handleAddToCart = () => {
    console.log(`Товар ${product.name} добавлен в корзину!`);
  };

  return product ? (
    <div className="container">
        <div className="container">
                  {/* Каталог и корзина с фиксированным расположением на странице */}
                  <div className="row mt-1 position-fixed z-3">
                      {/* Каталог */}
                      <CatalogDropdown />
                      <div>
                          <button type="button" className="btn btn-dark btn-secondary d-flex" id="modalButton" aria-expanded="false">
                              <img className="mx-1" src="../deps/icons/basket2-fill.svg" alt="Catalog Icon" width="24"
                                  height="24"/>
                              <span>0</span>
                          </button>
                      </div>
                      <div style={{ padding: '4px', borderRadius: '15px' }}></div>
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
        
      <div className="row mt-2">
        <div className="col-lg-10">
         <div className="container mt-4" style={{ marginLeft: '155px' }}>
            <div className="card mb-4 custom-shadow">
              <div className="row g-0 d-flex align-items-center" >
                {/* Изображение слева */}
                <div className="col-md-4 text-center">
                  <img
                    src={`http://${String}:8000${product.image}`}
                    className="img-thumbnail"
                    alt={product.name}
                    style={{ maxWidth: '100%', height: 'auto' }}
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal1"
                  />
                </div>
                {/* Контент справа */}
                <div className="col-md-8">
                  <div className="card-body">
                    <h2>{product.name}</h2>
                    <p><strong>Описание:</strong> {product.description}</p>
                    <p><strong>Цена:</strong> {product.price} BYN</p>
                    <button
                      onClick={handleAddToCart}
                      className="btn btn-dark add-to-cart"
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '35px', borderRadius: '15px' }}></div>
    </div>
  ) : (
    <div className="container text-center">
      <div style={{ padding: '35px', borderRadius: '15px' }}></div>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>
    </div>
  );
}

export default Product;
