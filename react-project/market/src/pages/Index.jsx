import React from 'react';
import { useTranslation } from 'react-i18next';
import CartModal from '../components/CartModal';
import CatalogDropdown from '../components/CatalogDropdown';

function Index() {
  const { t } = useTranslation(); 

  return (
    <div>
      <section>
        <div className="container">
          <div className="row mt-1 position-fixed z-3">
            <CatalogDropdown />
            <div>
              <button
                type="button"
                className="btn btn-dark btn-secondary d-flex"
                id="modalButton"
                aria-expanded="false"
              >
                <img
                  className="mx-1"
                  src="deps/icons/basket2-fill.svg"
                  alt="Catalog Icon"
                  width="24"
                  height="24"
                />
                <span id="goods-in-cart-count">0</span>
              </button>
            </div>
            <CartModal />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-1">
            <div className="col-lg-2">
            </div>
            <div className="col-lg-10">
              <div style={{ padding: '5px', borderRadius: '15px' }}></div>
              <div className="text-background">
                <h3 className="text-center">{t('welcome')}</h3>
              </div>
              <div style={{ padding: '10px', borderRadius: '15px' }}></div>
              <div className="text-background">
                <h3 className="text-center">{t('popularCategories')}</h3>
              </div>

              <div className="d-flex flex-row flex-nowrap overflow-auto">
                <div className="p-4">
                  <a href="/catalog" className="text-decoration-none">
                    <div className="card border-primary rounded custom-shadow card-custom">
                      <img
                        src="../deps/images/смартфоны.jpg"
                        className="card-img"
                        alt={t('smartphones')}
                      />
                      <div className="card-div">
                        <h5 className="card-title text-center">{t('smartphones')}</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-4">
                  <a href="/catalog" className="text-decoration-none">
                    <div className="card border-primary rounded custom-shadow card-custom">
                      <img
                        src="../deps/images/ноутбуки.jpg"
                        className="card-img"
                        alt={t('laptops')}
                      />
                      <div className="card-div">
                        <h5 className="card-title text-center">{t('laptops')}</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-4">
                  <a href="/catalog" className="text-decoration-none">
                    <div className="card border-primary rounded custom-shadow card-custom">
                      <img
                        src="../deps/images/планшеты.jpg"
                        className="card-img"
                        alt={t('tablets')}
                      />
                      <div className="card-div">
                        <h5 className="card-title text-center">{t('tablets')}</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-4">
                  <a href="/catalog" className="text-decoration-none">
                    <div className="card border-primary rounded custom-shadow card-custom">
                      <img
                        src="../deps/images/компьютеры.jpg"
                        className="card-img"
                        alt={t('computers')}
                      />
                      <div className="card-div">
                        <h5 className="card-title text-center">{t('computers')}</h5>
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
  );
}

export default Index;
