import React, { useEffect } from 'react';

function Product() {
  useEffect(() => {
    document.title = "Страница продукта"; 
  }, []);
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
          </section>
      </body>
    </div>
  )
}

export default Product