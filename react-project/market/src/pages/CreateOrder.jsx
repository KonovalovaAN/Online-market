import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CatalogDropdown from '../components/CatalogDropdown';

function CreateOrder() {
  const { t } = useTranslation(); 

  useEffect(() => {
    document.title = t('order_title'); 
  }, [t]);

  return (
    <div>
      <section>
        <div className="container">
          <div className="row mt-1 position-fixed z-3">
            <CatalogDropdown />
          </div>
        </div>
        <div className="container">
          <div className="row mt-1">
            <div className="col-lg-2"></div>
            <div className="col-lg-10">
              <div className="bg-white p-4 mb-4 mx-2 rounded custom-shadow">
                <div className="container">
                  <h3 className="text-center mb-4">{t('order_details')}</h3>
                  <div className="container" id="cart-items-container">
                    <div className="card mb-3 text-bg-light shadow-lg">
                      <div className="card-header">
                        <h5 className="card-title">{t('product_title')}</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="row text-center">
                            <div className="col p-0">
                              <div className="input-group">
                                <span className="input-group-btn">
                                  <button
                                    type="button"
                                    className="btn btn-dark btn-sm decrement"
                                    data-cart-id=""
                                    data-cart-change-url=""
                                  >
                                    -
                                  </button>
                                </span>
                                <input type="text" className="form-control number" value="1" readOnly />
                                <span className="input-group-btn">
                                  <button
                                    type="button"
                                    className="btn btn-dark btn-sm increment"
                                    data-cart-id=""
                                    data-cart-change-url=""
                                  >
                                    +
                                  </button>
                                </span>
                              </div>
                            </div>
                            <div className="col p-0">
                              <strong>0.0 BYN</strong>
                            </div>
                            <div className="col p-0">
                              <a href="#" className="remove-from-cart" data-cart-id="">
                                <img
                                  className="mx-1"
                                  src="../deps/icons/trash3-fill.svg"
                                  alt="Catalog Icon"
                                  width="16"
                                  height="16"
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="card mb-3 shadow-lg">
                      <div className="card-footer">
                        <p className="float-left">
                            {t('cart_summary', { count: 0, amount: '0.0' })}
                        </p>
                        <h4 className="float-left">
                          <strong>0.0 BYN</strong>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <h3 className="text-center">{t('order_details')}</h3>
                  <div className="card mb-3">
                    <div className="card-div">
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="id_first_name" className="form-label">
                              {t('name')}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="id_first_name"
                              name="first_name"
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="id_last_name" className="form-label">
                              {t('last_name')}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="id_last_name"
                              name="last_name"
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="id_phone_number" className="form-label">
                              {t('phone')}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="id_phone_number"
                              name="phone_number"
                              placeholder={t('in_format_text')}
                              required
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <label htmlFor="delivery" className="form-label">
                              {t('delivery')}
                            </label>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="requires_delivery"
                                id="id_requires_delivery"
                                value="1"
                                checked
                              />
                              <label className="form-check-label" htmlFor="id_requires_delivery">
                                {t('delivery_needed')}
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="requires_delivery"
                                id="id_requires_delivery"
                                value="0"
                              />
                              <label className="form-check-label" htmlFor="id_requires_delivery">
                                {t('self_pickup')}
                              </label>
                            </div>
                          </div>
                          <div className="mb-3" id="deliveryAddressField">
                            <label htmlFor="id_delivery_address" className="form-label">
                              {t('address')}
                            </label>
                            <textarea
                              className="form-control"
                              id="id_delivery_address"
                              name="delivery_address"
                              rows="4"
                            ></textarea>
                          </div>
                          <div className="col-md-12 mb-3">
                            <label htmlFor="payment" className="form-label">
                              {t('payment')}
                            </label>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment_method"
                                id="id_payment_method_card"
                                value="card"
                                checked
                              />
                              <label className="form-check-label" htmlFor="id_payment_method_card">
                                {t('card_payment')}
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment_method"
                                id="id_payment_method_cash"
                                value="cash"
                              />
                              <label className="form-check-label" htmlFor="id_payment_method_cash">
                                {t('cash_payment')}
                              </label>
                            </div>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-dark">{t('create_order')}</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ padding: '35px', borderRadius: '15px' }}></div>
    </div>
  );
}

export default CreateOrder;
