import React from 'react';

function CatalogDropdown() {
  return (
    <div className="dropdown mb-2">
      <button
        className="btn btn-secondary dropdown-toggle btn-dark"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Каталог
        <img
          className="mx-1"
          src="../deps/icons/grid-fill.svg"
          alt="Catalog Icon"
          width="16"
          height="16"
        />
      </button>
      <ul className="dropdown-menu bg-dark" data-bs-theme="dark">
        <li>
          <a className="dropdown-item text-white" href="/catalog">
            Все товары
          </a>
        </li>
        <li>
          <a className="dropdown-item text-white" href="/catalog">
            Ноутбуки
          </a>
        </li>
        <li>
          <a className="dropdown-item text-white" href="/catalog">
            Планшеты
          </a>
        </li>
        <li>
          <a className="dropdown-item text-white" href="/catalog">
            Смартфоны
          </a>
        </li>
        <li>
          <a className="dropdown-item text-white" href="/catalog">
            Компьютеры
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CatalogDropdown;
