import React from 'react';

function CartModal() {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            <button type="button" className="btn btn-dark btn-sm decrement" data-cart-id="" data-cart-change-url="">-</button>
                          </span>
                          <input type="text" className="form-control number" value="1" readOnly />
                          <span className="input-group-btn">
                            <button type="button" className="btn btn-dark btn-sm increment" data-cart-id="" data-cart-change-url="">+</button>
                          </span>
                        </div>
                      </div>
                      <div className="col p-0"><strong>Стоимость:</strong></div>
                      <div className="col p-0">
                        {/* <a href="#" className="remove-from-cart" data-cart-id="">
                          <img className="mx-1" src="deps/icons/trash3-fill.svg" alt="Trash Icon" width="16" height="16" />
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
              {/* Конец разметки корзины */}
              <a className="btn btn-dark" href="/create_order">
                Оформить заказ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
