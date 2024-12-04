import React from 'react';
import { useTranslation } from 'react-i18next';

function Orders() {
  const { t } = useTranslation(); 
  return (
    <div className="col-md-12">
      <div className="bg-white p-4 mb-4 mx-2 rounded custom-shadow">
        <h3 className="text-center mb-4">{t('myOrders')}</h3> 
        <div className="accordion-item">
          <div
            id="collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="heading2"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-div">
              <table className="table table-dark table-hover">
                <thead>
                  <tr>
                    <th>{t('product')}</th> 
                    <th>{t('quantity')}</th> 
                    <th>{t('price')}</th> 
                    <th>{t('totalCost')}</th> 
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
