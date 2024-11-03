import React, { useEffect } from 'react';

function Cart() {
  useEffect(() => {
    document.title = "Корзина"; 
  }, []);
  return (
    <div>
    <body>
      <section>
          <div class="container">
              {/* Каталог и корзина с фиксированным расположением на странице */}
              <div class="row mt-1 position-fixed z-3">
                  {/* Каталог */}
                  <div class="dropdown mb-2">
                      <button class="btn btn-secondary dropdown-toggle btn-dark" type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Каталог
                          <img class="mx-1" src="../deps/icons/grid-fill.svg" alt="Catalog Icon" width="16"
                              height="16"/>
                      </button>
                      <ul class="dropdown-menu bg-dark" data-bs-theme="dark">
                          <li><a class="dropdown-item text-white" href="/catalog">Все товары</a></li>
                          <li><a class="dropdown-item text-white" href="/catalog">Ноутбуки</a></li>
                          <li><a class="dropdown-item text-white" href="/catalog">Планшеты</a></li>
                          <li><a class="dropdown-item text-white" href="/catalog">Смартфона</a></li>
                          <li><a class="dropdown-item text-white" href="/catalog">Компьютеры</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          {/* Контент */}
          <div class="container">
              <div class="row mt-1">
                  <div class="col-lg-2">
                      {/* Пустой блок на усмотрение */}
                  </div>
                  <div class="col-lg-10">
                      {/* Контент на странице */}
                      <div class="row">
                          <div class="container mt-5">
                              <div class="row justify-content-center">
                                  <div class=" bg-white p-4 mb-4 mx-2 rounded custom-shadow">
                                      <h3 class="text-center mb-4">Корзина</h3>
                                      <div class="container" id="cart-items-container">
                                          {/* Разметка корзины */}
                                          <div class="card mb-3 text-bg-light shadow-lg">
                                              <div class="card-header">
                                                  <h5 class="card-title">Товар</h5>
                                              </div>
                                              <ul class="list-group list-group-flush">
                                                  <li class="list-group-item">
                                                      <div class="row text-center">
                                                          <div class="col p-0">
                                                              <div class="input-group">
                                                                  <span class="input-group-btn">
                                                                      <button type="button" class="btn btn-dark btn-sm decrement"
                                                                          data-cart-id="" data-cart-change-url="">-</button>
                                                                  </span>
                                                                  <input type="text" class="form-control number" value="1"
                                                                      readonly/>
                                                                  <span class="input-group-btn">
                                                                      <button type="button" class="btn btn-dark btn-sm increment"
                                                                          data-cart-id="" data-cart-change-url="">+</button>
                                                                  </span>
                                                              </div>
                                                          </div>
                                                          <div class="col p-0"><strong>0.0 BYN</strong></div>
                                                          <div class="col p-0">
                                                              <a href="#" class="remove-from-cart" data-cart-id="">
                                                                  <img class="mx-1" src="../deps/icons/trash3-fill.svg"
                                                                      alt="Catalog Icon" width="16" height="16"/>
                                                              </a>
                                                          </div>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </div>
                                          <div class="card mb-3 shadow-lg">
                                              <div class="card-footer">
                                                  <p class="float-left">Итого <strong>1</strong> товар(а) на сумму</p>
                                                  <h4 class="float-left"><strong>0.0 BYN</strong></h4>
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
                  </div>
              </div>
          </div>
       </section>
      </body>
    </div>
  )
}

export default Cart