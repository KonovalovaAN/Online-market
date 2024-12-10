import React from 'react';
import { useTranslation } from 'react-i18next';

function FiltersDropdown() {
  const { t } = useTranslation();

  return (
    <div className="dropdown mb-2">
      <button
        className="btn btn-secondary dropdown-toggle btn-dark"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {t('filters')} 
      </button>

      <div action="" method="get" className="dropdown-menu bg-dark" data-bs-theme="dark">
        <div className="form-check text-white mx-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="on_sale"
            id="flexCheckDefault"
            value="on"
          />
          <input type="hidden" name="q" value="request.GET.q" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {t('onSale')} 
          </label>
        </div>
        <p className="text-white mx-3 mt-3">{t('sortBy')}:</p> 
        <div className="form-check text-white mx-3">
          <input
            className="form-check-input"
            type="radio"
            name="order_by"
            id="flexRadioDefault1"
            value="default"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {t('default')} 
          </label>
        </div>
        <div className="form-check text-white mx-3">
          <input
            className="form-check-input"
            type="radio"
            name="order_by"
            id="flexRadioDefault2"
            value="price"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            {t('cheapestToMostExpensive')} 
          </label>
        </div>
        <div className="form-check text-white mx-3">
          <input
            className="form-check-input"
            type="radio"
            name="order_by"
            id="flexRadioDefault3"
            value="-price"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            {t('mostExpensiveToCheapest')} 
          </label>
        </div>
        <button type="submit" className="btn btn-primary mx-3 mt-3">
          {t('apply')} 
        </button>
      </div>
    </div>
  );
}

export default FiltersDropdown;
