import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import CatalogDropdown from '../components/CatalogDropdown';

const String = '127.0.0.1';

function Product() {
  const { name } = useParams(); 
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation(); 

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
        alert(t('productNotFound')); 
      });
  }, [name, t]);

  const handleAddToCart = () => {
    console.log(`${t('productAddedToCart')}: ${product.name}`);
  };

  return product ? (
    <div className="container">
        <div className="container">
                  <div className="row mt-1 position-fixed z-3">
                      {/* Каталог */}
                      <CatalogDropdown />
                      <div>
                          <button type="button" className="btn btn-dark btn-secondary d-flex" id="modalButton" aria-expanded="false">
                              <img className="mx-1" src="../deps/icons/basket2-fill.svg" alt={t('catalogIconAlt')} width="24"
                                  height="24"/>
                              <span>0</span>
                          </button>
                      </div>
                      <div style={{ padding: '4px', borderRadius: '15px' }}></div>
                  </div>
              </div>
        
      <div className="row mt-2">
        <div className="col-lg-10">
         <div className="container mt-4" style={{ marginLeft: '155px' }}>
            <div className="card mb-4 custom-shadow">
              <div className="row g-0 d-flex align-items-center" >
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
                <div className="col-md-8">
                  <div className="card-body">
                    <h2>{product.name}</h2>
                    <p><strong>{t('description')}:</strong> {product.description}</p>
                    <p><strong>{t('price')}:</strong> {product.price} BYN</p>
                    <button
                      onClick={handleAddToCart}
                      className="btn btn-dark add-to-cart"
                    >
                      {t('addToCart')}
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
        <span className="visually-hidden">{t('loading')}</span>
      </div>
    </div>
  );
}

export default Product;
