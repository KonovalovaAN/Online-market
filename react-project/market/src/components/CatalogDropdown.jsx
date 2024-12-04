import React from 'react';
import { useTranslation } from 'react-i18next';

function CatalogDropdown() {
  const { t } = useTranslation();

  return (
    <div className="dropdown mb-2">
      <button
        className="btn btn-secondary dropdown-toggle btn-dark"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {t('catalog')}
        <img
          className="mx-1"
          src="../deps/icons/grid-fill.svg"
          alt={t('catalogIconAlt')}
          width="16"
          height="16"
        />
      </button>
      <ul className="dropdown-menu bg-dark" data-bs-theme="dark">
        <li>
          <a className="dropdown-item text-white" href="/catalog">
            {t('allProducts')}
          </a>
        </li>
        <li>
          <a className="dropdown-item text-white" href="/catalog">
            {t('laptops')}
          </a>
        </li>
        <li>
          <a className="dropdown-item text-white" href="/catalog">
            {t('tablets')}
          </a>
        </li>
        <li>
          <a className="dropdown-item text-white" href="/catalog">
            {t('smartphones')}
          </a>
        </li>
        <li>
          <a className="dropdown-item text-white" href="/catalog">
            {t('computers')}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CatalogDropdown;
